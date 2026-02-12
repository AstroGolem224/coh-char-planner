import { useMemo } from 'react'
import { useBuildStore } from '../../store'
import { calculateStats } from '../../utils/statCalculator'
import { archetypes } from '../../data/archetypes'
import styles from './RightPanel.module.css'

export default function RightPanel() {
  const build = useBuildStore((s) => s.currentBuild)

  const stats = useMemo(() => {
    if (!build) return null;
    return calculateStats(build);
  }, [build]);

  // Get resistance cap from archetype
  const archetype = build ? archetypes.find((a) => a.id === build.archetypeId) : null;
  const resCap = archetype?.resistanceCap ?? 75;

  const statGroups = [
    {
      label: 'Defense',
      stats: [
        { name: 'Smashing', value: stats?.defense.smashing ?? 0, cap: 45 },
        { name: 'Lethal', value: stats?.defense.lethal ?? 0, cap: 45 },
        { name: 'Fire', value: stats?.defense.fire ?? 0, cap: 45 },
        { name: 'Cold', value: stats?.defense.cold ?? 0, cap: 45 },
        { name: 'Energy', value: stats?.defense.energy ?? 0, cap: 45 },
        { name: 'Negative', value: stats?.defense.negative ?? 0, cap: 45 },
        { name: 'Psionic', value: stats?.defense.psionic ?? 0, cap: 45 },
        { name: 'Melee', value: stats?.defense.melee ?? 0, cap: 45 },
        { name: 'Ranged', value: stats?.defense.ranged ?? 0, cap: 45 },
        { name: 'AoE', value: stats?.defense.aoe ?? 0, cap: 45 },
      ],
    },
    {
      label: 'Resistance',
      stats: [
        { name: 'Smashing', value: stats?.resistance.smashing ?? 0, cap: resCap },
        { name: 'Lethal', value: stats?.resistance.lethal ?? 0, cap: resCap },
        { name: 'Fire', value: stats?.resistance.fire ?? 0, cap: resCap },
        { name: 'Cold', value: stats?.resistance.cold ?? 0, cap: resCap },
        { name: 'Energy', value: stats?.resistance.energy ?? 0, cap: resCap },
        { name: 'Negative', value: stats?.resistance.negative ?? 0, cap: resCap },
        { name: 'Psionic', value: stats?.resistance.psionic ?? 0, cap: resCap },
      ],
    },
    {
      label: 'General',
      stats: [
        { name: 'Max HP', value: stats?.general.maxHp ?? 0, cap: 100 },
        { name: 'Regen', value: stats?.general.regen ?? 0, cap: 100 },
        { name: 'Recovery', value: stats?.general.recovery ?? 0, cap: 100 },
        { name: 'Recharge', value: stats?.general.recharge ?? 0, cap: 200 },
        { name: 'Accuracy', value: stats?.general.accuracy ?? 0, cap: 100 },
        { name: 'Damage', value: stats?.general.damage ?? 0, cap: 100 },
      ],
    },
  ]

  // Count active set bonuses for display
  const activeBonusCount = stats ? (
    Object.values(stats.defense).reduce((s, v) => s + (v > 0 ? 1 : 0), 0) +
    Object.values(stats.resistance).reduce((s, v) => s + (v > 0 ? 1 : 0), 0) +
    Object.values(stats.general).reduce((s, v) => s + (v > 0 ? 1 : 0), 0)
  ) : 0;

  return (
    <aside className={styles.panel}>
      <div className={styles.header}>
        <h3 className={styles.title}>Totals</h3>
        {activeBonusCount > 0 && (
          <span className={styles.bonusCount}>{activeBonusCount} active</span>
        )}
      </div>
      <div className={styles.content}>
        {statGroups.map((group) => (
          <div key={group.label} className={styles.group}>
            <h4 className={styles.groupLabel}>{group.label}</h4>
            {group.stats.map((stat) => (
              <div key={stat.name} className={styles.statRow}>
                <span className={styles.statName}>{stat.name}</span>
                <div className={styles.statBar}>
                  <div
                    className={`${styles.statFill} ${stat.value >= stat.cap ? styles.capped : ''}`}
                    style={{ width: `${Math.min((stat.value / stat.cap) * 100, 100)}%` }}
                  />
                </div>
                <span className={`${styles.statValue} ${stat.value > 0 ? styles.hasValue : ''}`}>
                  {stat.value.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  )
}
