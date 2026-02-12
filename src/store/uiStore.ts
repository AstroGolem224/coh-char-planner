import { create } from 'zustand';

interface EnhancementPickerState {
  isOpen: boolean;
  targetPowerId: string | null;
  targetSlotIndex: number;
}

interface UIState {
  enhancementPicker: EnhancementPickerState;
  openEnhancementPicker: (powerId: string, slotIndex: number) => void;
  closeEnhancementPicker: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  enhancementPicker: {
    isOpen: false,
    targetPowerId: null,
    targetSlotIndex: 0,
  },

  openEnhancementPicker: (powerId: string, slotIndex: number) => {
    set({
      enhancementPicker: {
        isOpen: true,
        targetPowerId: powerId,
        targetSlotIndex: slotIndex,
      },
    });
  },

  closeEnhancementPicker: () => {
    set({
      enhancementPicker: {
        isOpen: false,
        targetPowerId: null,
        targetSlotIndex: 0,
      },
    });
  },
}));
