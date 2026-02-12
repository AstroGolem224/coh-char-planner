import { useState } from 'react'
import type { Power } from '../../types'
import styles from './PowerCard.module.css'

interface PowerCardProps {
  power: Power;
  isPicked: boolean;
  isAvailable: boolean;
  onPick: (power: Power) => void;
}

const powerTypeLabels: Record<string, string> = {
  click: 'Click',
  toggle: 'Toggle',
  auto: 'Auto',
  passive: 'Passive',
}

const powerTypeColors: Record<string, string> = {
  click: '#4fc3f7',
  toggle: '#ffd700',
  auto: '#00e676',
  passive: '#9fa8da',
}

export default function PowerCard({ power, isPicked, isAvailable, onPick }: PowerCardProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.card} ${isPicked ? styles.picked : ''} ${!isAvailable ? styles.unavailable : ''}`}
        onClick={() => isAvailable && !isPicked && onPick(power)}
        disabled={!isAvailable || isPicked}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className={styles.icon}>
          <img src={power.icon} alt="" className={styles.iconImg} />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>{power.name}</span>
          <span className={styles.meta}>
            <span
              className={styles.type}
              style={{ color: powerTypeColors[power.powerType] }}
            >
              {powerTypeLabels[power.powerType]}
            </span>
            <span className={styles.level}>Lvl {power.availableAtLevel}</span>
          </span>
        </div>
        {isPicked && <span className={styles.checkmark}>&#10003;</span>}
      </button>

      {showTooltip && (
        <div className={styles.tooltip}>
          <h4 className={styles.tooltipTitle}>{power.name}</h4>
          <p className={styles.tooltipDesc}>{power.description}</p>
          <div className={styles.tooltipStats}>
            <span>Recharge: {power.rechargeTime}s</span>
            <span>End Cost: {power.enduranceCost.toFixed(1)}</span>
            <span>Cast: {power.castTime}s</span>
            {power.range > 0 && <span>Range: {power.range}ft</span>}
          </div>
          {power.effects.length > 0 && (
            <div className={styles.tooltipEffects}>
              {power.effects.map((eff, i) => (
                <span key={i} className={styles.tooltipEffect}>{eff.description}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
