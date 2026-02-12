import type { Power } from '../../types'
import PowerCard from './PowerCard'
import styles from './PowerList.module.css'

interface PowerListProps {
  powers: Power[];
  pickedPowerIds: Set<string>;
  onPick: (power: Power) => void;
}

export default function PowerList({ powers, pickedPowerIds, onPick }: PowerListProps) {
  return (
    <div className={styles.list}>
      {powers.map((power) => (
        <PowerCard
          key={power.id}
          power={power}
          isPicked={pickedPowerIds.has(power.id)}
          isAvailable={true}
          onPick={onPick}
        />
      ))}
    </div>
  )
}
