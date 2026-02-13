import { useBuildStore } from '../../store'
import { useUIStore } from '../../store/uiStore'
import { getPowersetById } from '../../data'
import { getEnhancementById } from '../../data/enhancements'
import { POWER_PICK_LEVELS } from '../../data/leveling'
import EnhancementIcon from '../enhancement/EnhancementIcon'
import styles from './CenterPanel.module.css'

export default function CenterPanel() {
  const build = useBuildStore((s) => s.currentBuild)
  const removePower = useBuildStore((s) => s.removePower)
  const togglePowerActive = useBuildStore((s) => s.togglePowerActive)
  const openPicker = useUIStore((s) => s.openEnhancementPicker)

  // Map power picks by their index in the pick sequence
  const picksByIndex = new Map<number, { powerId: string; powersetId: string; powerName: string; powersetName: string; slottedEnhancements: { enhancementId: string; slotIndex: number }[]; isActive: boolean }>();
  if (build) {
    const sorted = [...build.powerPicks].sort((a, b) => a.levelPicked - b.levelPicked);
    let slotIdx = 0;
    for (const pick of sorted) {
      while (slotIdx < POWER_PICK_LEVELS.length && POWER_PICK_LEVELS[slotIdx] < pick.levelPicked) {
        slotIdx++;
      }
      if (slotIdx < POWER_PICK_LEVELS.length) {
        const powerset = getPowersetById(pick.powersetId);
        const power = powerset?.powers.find((p) => p.id === pick.powerId);
        picksByIndex.set(slotIdx, {
          powerId: pick.powerId,
          powersetId: pick.powersetId,
          powerName: power?.name || pick.powerId,
          powersetName: powerset?.name || '',
          slottedEnhancements: pick.slottedEnhancements,
          isActive: pick.isActive !== false,
        });
        slotIdx++;
      }
    }
  }

  return (
    <main className={styles.panel}>
      <div className={styles.header}>
        <h3 className={styles.title}>Build</h3>
        <span className={styles.pickCount}>
          {build?.powerPicks.length || 0} / 24 powers
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.grid}>
          {POWER_PICK_LEVELS.map((level, i) => {
            const pick = picksByIndex.get(i);
            return (
              <div
                key={i}
                className={`${styles.row} ${pick ? styles.filled : ''} ${pick && !pick.isActive ? styles.inactive : ''}`}
              >
                <span
                  className={styles.level}
                  onClick={() => pick && removePower(pick.powerId)}
                  title={pick ? 'Click to remove power' : undefined}
                  style={pick ? { cursor: 'pointer' } : undefined}
                >
                  {level}
                </span>
                <div className={styles.powerInfo}>
                  {pick ? (
                    <>
                      <span className={styles.powerName}>{pick.powerName}</span>
                      <span className={styles.powersetLabel}>{pick.powersetName}</span>
                    </>
                  ) : (
                    <span className={styles.emptyLabel}>Empty</span>
                  )}
                </div>
                {pick && (
                  <button
                    className={`${styles.toggleBtn} ${pick.isActive ? styles.toggleOn : styles.toggleOff}`}
                    onClick={() => togglePowerActive(pick.powerId)}
                    title={pick.isActive ? 'Disable power' : 'Enable power'}
                  >
                    {pick.isActive ? 'ON' : 'OFF'}
                  </button>
                )}
                {pick && (
                  <div className={styles.enhSlots}>
                    {Array.from({ length: 6 }, (_, j) => {
                      const slotted = pick.slottedEnhancements.find((se) => se.slotIndex === j);
                      const enhancement = slotted ? getEnhancementById(slotted.enhancementId) : null;

                      if (enhancement) {
                        return (
                          <EnhancementIcon
                            key={j}
                            enhancement={enhancement}
                            onClick={() => openPicker(pick.powerId, j)}
                          />
                        );
                      }

                      return (
                        <div
                          key={j}
                          className={styles.emptySlot}
                          onClick={() => openPicker(pick.powerId, j)}
                          title="Click to slot enhancement"
                        >
                          0
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  )
}
