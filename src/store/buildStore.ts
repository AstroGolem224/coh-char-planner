import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import type { Build, PowerPick } from '../types';

interface BuildState {
  currentBuild: Build | null;
  savedBuilds: Build[];

  createNewBuild: (archetypeId: string, name?: string) => Build;
  setPrimaryPowerset: (powersetId: string) => void;
  setSecondaryPowerset: (powersetId: string) => void;
  pickPower: (powerId: string, powersetId: string, level: number) => void;
  removePower: (level: number) => void;
  slotEnhancement: (powerId: string, slotIndex: number, enhancementId: string) => void;
  removeEnhancement: (powerId: string, slotIndex: number) => void;
  updateBuildName: (name: string) => void;
  saveBuild: () => void;
  loadBuild: (buildId: string) => void;
  deleteBuild: (buildId: string) => void;
  importBuild: (json: string) => boolean;
  exportBuild: () => string | null;
  resetBuild: () => void;
}

function createEmptyBuild(archetypeId: string, name: string): Build {
  const now = new Date().toISOString();
  return {
    id: uuidv4(),
    name,
    archetypeId,
    primaryPowersetId: '',
    secondaryPowersetId: '',
    poolPowersetIds: [],
    powerPicks: [],
    slotAssignments: [],
    level: 50,
    notes: '',
    createdAt: now,
    updatedAt: now,
    version: 1,
  };
}

export const useBuildStore = create<BuildState>()(
  persist(
    (set, get) => ({
      currentBuild: null,
      savedBuilds: [],

      createNewBuild: (archetypeId: string, name?: string) => {
        const build = createEmptyBuild(archetypeId, name || 'New Build');
        set({ currentBuild: build });
        return build;
      },

      setPrimaryPowerset: (powersetId: string) => {
        set((state) => {
          if (!state.currentBuild) return state;
          return {
            currentBuild: {
              ...state.currentBuild,
              primaryPowersetId: powersetId,
              // Clear power picks from old primary
              powerPicks: state.currentBuild.powerPicks.filter(
                (pp) => pp.powersetId !== state.currentBuild!.primaryPowersetId || pp.powersetId === powersetId
              ),
              updatedAt: new Date().toISOString(),
            },
          };
        });
      },

      setSecondaryPowerset: (powersetId: string) => {
        set((state) => {
          if (!state.currentBuild) return state;
          return {
            currentBuild: {
              ...state.currentBuild,
              secondaryPowersetId: powersetId,
              powerPicks: state.currentBuild.powerPicks.filter(
                (pp) => pp.powersetId !== state.currentBuild!.secondaryPowersetId || pp.powersetId === powersetId
              ),
              updatedAt: new Date().toISOString(),
            },
          };
        });
      },

      pickPower: (powerId: string, powersetId: string, level: number) => {
        set((state) => {
          if (!state.currentBuild) return state;
          const pick: PowerPick = {
            powerId,
            powersetId,
            levelPicked: level,
            slottedEnhancements: [],
          };
          return {
            currentBuild: {
              ...state.currentBuild,
              powerPicks: [...state.currentBuild.powerPicks, pick].sort(
                (a, b) => a.levelPicked - b.levelPicked
              ),
              updatedAt: new Date().toISOString(),
            },
          };
        });
      },

      removePower: (level: number) => {
        set((state) => {
          if (!state.currentBuild) return state;
          return {
            currentBuild: {
              ...state.currentBuild,
              powerPicks: state.currentBuild.powerPicks.filter(
                (pp) => pp.levelPicked !== level
              ),
              updatedAt: new Date().toISOString(),
            },
          };
        });
      },

      slotEnhancement: (powerId: string, slotIndex: number, enhancementId: string) => {
        set((state) => {
          if (!state.currentBuild) return state;
          const powerPicks = state.currentBuild.powerPicks.map((pp) => {
            if (pp.powerId !== powerId) return pp;
            const existing = pp.slottedEnhancements.filter((se) => se.slotIndex !== slotIndex);
            return {
              ...pp,
              slottedEnhancements: [
                ...existing,
                { enhancementId, slotIndex, level: 50 },
              ].sort((a, b) => a.slotIndex - b.slotIndex),
            };
          });
          return {
            currentBuild: {
              ...state.currentBuild,
              powerPicks,
              updatedAt: new Date().toISOString(),
            },
          };
        });
      },

      removeEnhancement: (powerId: string, slotIndex: number) => {
        set((state) => {
          if (!state.currentBuild) return state;
          const powerPicks = state.currentBuild.powerPicks.map((pp) => {
            if (pp.powerId !== powerId) return pp;
            return {
              ...pp,
              slottedEnhancements: pp.slottedEnhancements.filter(
                (se) => se.slotIndex !== slotIndex
              ),
            };
          });
          return {
            currentBuild: {
              ...state.currentBuild,
              powerPicks,
              updatedAt: new Date().toISOString(),
            },
          };
        });
      },

      updateBuildName: (name: string) => {
        set((state) => {
          if (!state.currentBuild) return state;
          return {
            currentBuild: {
              ...state.currentBuild,
              name,
              updatedAt: new Date().toISOString(),
            },
          };
        });
      },

      saveBuild: () => {
        const { currentBuild, savedBuilds } = get();
        if (!currentBuild) return;
        const idx = savedBuilds.findIndex((b) => b.id === currentBuild.id);
        const updated = { ...currentBuild, updatedAt: new Date().toISOString() };
        if (idx >= 0) {
          const newSaved = [...savedBuilds];
          newSaved[idx] = updated;
          set({ savedBuilds: newSaved, currentBuild: updated });
        } else {
          set({ savedBuilds: [...savedBuilds, updated], currentBuild: updated });
        }
      },

      loadBuild: (buildId: string) => {
        const { savedBuilds } = get();
        const build = savedBuilds.find((b) => b.id === buildId);
        if (build) {
          set({ currentBuild: { ...build } });
        }
      },

      deleteBuild: (buildId: string) => {
        set((state) => ({
          savedBuilds: state.savedBuilds.filter((b) => b.id !== buildId),
        }));
      },

      importBuild: (json: string) => {
        try {
          const build = JSON.parse(json) as Build;
          if (!build.id || !build.archetypeId) return false;
          build.id = uuidv4(); // New ID to avoid conflicts
          set({ currentBuild: build });
          return true;
        } catch {
          return false;
        }
      },

      exportBuild: () => {
        const { currentBuild } = get();
        if (!currentBuild) return null;
        return JSON.stringify(currentBuild, null, 2);
      },

      resetBuild: () => {
        set({ currentBuild: null });
      },
    }),
    {
      name: 'coh-build-store',
      partialize: (state) => ({
        savedBuilds: state.savedBuilds,
      }),
    }
  )
);
