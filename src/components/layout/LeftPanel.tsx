import { useMemo } from 'react'
import { useBuildStore } from '../../store'
import { getPowersetsForArchetype, getPowersetById, getArchetypeById } from '../../data'
import PowersetPicker from '../powerset/PowersetPicker'
import PowerList from '../powerset/PowerList'
import type { Power } from '../../types'
import styles from './LeftPanel.module.css'

export default function LeftPanel() {
  const build = useBuildStore((s) => s.currentBuild)
  const setPrimary = useBuildStore((s) => s.setPrimaryPowerset)
  const setSecondary = useBuildStore((s) => s.setSecondaryPowerset)
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

  const primaryPowerset = build?.primaryPowersetId ? getPowersetById(build.primaryPowersetId) : null
  const secondaryPowerset = build?.secondaryPowersetId ? getPowersetById(build.secondaryPowersetId) : null

  const pickedPowerIds = useMemo(
    () => new Set(build?.powerPicks.map((pp) => pp.powerId) || []),
    [build?.powerPicks]
  )

  const handlePickPower = (power: Power) => {
    if (!build) return
    // Find the next available power pick level
    const pickLevels = [1, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 35, 38, 41, 44, 47, 49]
    const usedLevels = new Set(build.powerPicks.map((pp) => `${pp.levelPicked}-${pickLevels.indexOf(pp.levelPicked)}`))

    // Find next available slot
    for (let i = 0; i < pickLevels.length; i++) {
      const key = `${pickLevels[i]}-${i}`
      if (!usedLevels.has(key) && pickLevels[i] >= power.availableAtLevel) {
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
      </div>
    </aside>
  )
}
