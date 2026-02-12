import type { Archetype } from '../../types'
import styles from './ArchetypeCard.module.css'

interface ArchetypeCardProps {
  archetype: Archetype;
  onClick: (archetype: Archetype) => void;
}

const roleLabels: Record<string, string> = {
  melee: 'Melee',
  ranged: 'Ranged',
  tank: 'Tank',
  control: 'Control',
  support: 'Support',
  hybrid: 'Hybrid',
}

export default function ArchetypeCard({ archetype, onClick }: ArchetypeCardProps) {
  return (
    <button
      className={styles.card}
      style={{
        '--at-color': archetype.accentColor,
        '--at-glow': `0 0 15px ${archetype.accentColor}40, 0 0 30px ${archetype.accentColor}20`,
        '--at-glow-strong': `0 0 20px ${archetype.accentColor}60, 0 0 40px ${archetype.accentColor}30, 0 0 60px ${archetype.accentColor}15`,
      } as React.CSSProperties}
      onClick={() => onClick(archetype)}
    >
      <div className={styles.iconWrapper}>
        <img
          src={archetype.icon}
          alt={archetype.name}
          className={styles.icon}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{archetype.name}</h3>
        <span className={styles.role}>{roleLabels[archetype.role]}</span>
        <p className={styles.description}>{archetype.description}</p>
        <div className={styles.categories}>
          <span className={styles.category}>
            <span className={styles.categoryLabel}>Primary:</span> {archetype.primaryCategory}
          </span>
          <span className={styles.category}>
            <span className={styles.categoryLabel}>Secondary:</span> {archetype.secondaryCategory}
          </span>
        </div>
        <div className={styles.stats}>
          <span className={styles.stat}>
            HP: {archetype.baseHitPoints.toFixed(0)}
          </span>
          <span className={styles.stat}>
            DMG: {(archetype.damageModifier * 100).toFixed(0)}%
          </span>
          <span className={styles.stat}>
            RES Cap: {archetype.resistanceCap}%
          </span>
        </div>
      </div>
      <div className={styles.inherent}>
        <span className={styles.inherentLabel}>{archetype.inherentPower}</span>
      </div>
    </button>
  )
}
