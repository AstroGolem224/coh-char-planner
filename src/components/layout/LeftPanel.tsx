import { useMemo } from 'react'
import { useBuildStore } from '../../store'
import { getPowersetsForArchetype, getPowersetById, getArchetypeById, getPoolPowersets } from '../../data'
import PowersetPicker from '../powerset/PowersetPicker'
import PowerList from '../powerset/PowerList'
import type { Power } from '../../types'
import styles from './LeftPanel.module.css'

const MAX_POOLS = 4;

export default function LeftPanel() {
  const build = useBuildStore((s) => s.currentBuild)
  const setPrimary = useBuildStore((s) => s.setPrimaryPowerset)
  const setSecondary = useBuildStore((s) => s.setSecondaryPowerset)
  const addPool = useBuildStore((s) => s.addPoolPowerset)
  const removePool = useBuildStore((s) => s.removePoolPowerset)
  const pickPower = useBuildStore((s) => s.pickPower)

  const archetype = build ? getArchetypeById(build.archetypeId) : null
  const accentColor = archetype?.accentColor || '#00bfff'

  const primaryPowersets = useMemo(
    () => (build ? getPowersetsForArchetype(build.archetypeId, 'primary') : []),
    [build?.archetypeId]
  )
  const secondaryPowersets = useMemo(
    () => (build ? getPowersetsForArchetype(build.archetypeId, 'secondary') : []),
    [build?.archetypeId]
  )

  const allPools = useMemo(() => getPoolPowersets(), [])

  const selectedPoolIds = build?.poolPowersetIds || []
  const availablePools = useMemo(
    () => allPools.filter((ps) => !selectedPoolIds.includes(ps.id)),
    [allPools, selectedPoolIds]
  )

  const selectedPools = useMemo(
    () => selectedPoolIds.map((id) => getPowersetById(id)).filter(Boolean),
    [selectedPoolIds]
  )

  const primaryPowerset = build?.primaryPowersetId ? getPowersetById(build.primaryPowersetId) : null
  const secondaryPowerset = build?.secondaryPowersetId ? getPowersetById(build.secondaryPowersetId) : null

  const pickedPowerIds = useMemo(
    () => new Set(build?.powerPicks.map((pp) => pp.powerId) || []),
    [build?.powerPicks]
  )

  const handlePickPower = (power: Power) => {
    if (!build) return
    const pickLevels = [1, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 35, 38, 41, 44, 47, 49]

    // Determine occupied slot indices using same sequential logic as CenterPanel
    const occupiedIndices = new Set<number>()
    const sortedPicks = [...build.powerPicks].sort((a, b) => a.levelPicked - b.levelPicked)
    let slotIdx = 0
    for (const pick of sortedPicks) {
      while (slotIdx < pickLevels.length && pickLevels[slotIdx] < pick.levelPicked) {
        slotIdx++
      }
      if (slotIdx < pickLevels.length) {
        occupiedIndices.add(slotIdx)
        slotIdx++
      }
    }

    // Find first free slot where power meets level requirement
    for (let i = 0; i < pickLevels.length; i++) {
      if (!occupiedIndices.has(i) && pickLevels[i] >= power.availableAtLevel) {
        pickPower(power.id, power.powersetId, pickLevels[i])
        return
      }
    }
  }

  if (!build) {
    return (
      <aside className={styles.panel}>
        <div className={styles.header}>
          <h3 className={styles.title}>Powers</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.placeholder}>No build loaded</div>
        </div>
      </aside>
    )
  }

  return (
    <aside className={styles.panel}>
      <div className={styles.header}>
        <h3 className={styles.title}>Powers</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <PowersetPicker
            label="Primary"
            powersets={primaryPowersets}
            selectedId={build.primaryPowersetId}
            accentColor={accentColor}
            onChange={setPrimary}
          />
          {primaryPowerset && (
            <PowerList
              powers={primaryPowerset.powers}
              pickedPowerIds={pickedPowerIds}
              onPick={handlePickPower}
            />
          )}
        </div>
        <div className={styles.divider} />
        <div className={styles.section}>
          <PowersetPicker
            label="Secondary"
            powersets={secondaryPowersets}
            selectedId={build.secondaryPowersetId}
            accentColor={accentColor}
            onChange={setSecondary}
          />
          {secondaryPowerset && (
            <PowerList
              powers={secondaryPowerset.powers}
              pickedPowerIds={pickedPowerIds}
              onPick={handlePickPower}
            />
          )}
        </div>
        <div className={styles.divider} />
        <div className={styles.section}>
          <div className={styles.poolHeader}>
            <span className={styles.poolLabel}>Power Pools</span>
            <span className={styles.poolCount}>{selectedPoolIds.length}/{MAX_POOLS}</span>
          </div>
          {selectedPoolIds.length < MAX_POOLS && (
            <select
              className={styles.poolSelect}
              value=""
              onChange={(e) => {
                if (e.target.value) addPool(e.target.value)
              }}
            >
              <option value="">+ Add Pool...</option>
              {availablePools.map((ps) => (
                <option key={ps.id} value={ps.id}>{ps.name}</option>
              ))}
            </select>
          )}
          {selectedPools.map((pool) => pool && (
            <div key={pool.id} className={styles.poolSection}>
              <div className={styles.poolNameRow}>
                <span className={styles.poolName}>{pool.name}</span>
                <button
                  className={styles.poolRemoveBtn}
                  onClick={() => removePool(pool.id)}
                  title="Remove pool"
                >
                  ×
                </button>
              </div>
              <PowerList
                powers={pool.powers}
                pickedPowerIds={pickedPowerIds}
                onPick={handlePickPower}
              />
            </div>
          ))}
          {selectedPools.length === 0 && (
            <div className={styles.poolEmpty}>No pools selected</div>
          )}
        </div>
      </div>
    </aside>
  )
}
