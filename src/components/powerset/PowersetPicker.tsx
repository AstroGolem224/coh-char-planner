import type { Powerset } from '../../types'
import styles from './PowersetPicker.module.css'

interface PowersetPickerProps {
  label: string;
  powersets: Powerset[];
  selectedId: string;
  accentColor: string;
  onChange: (powersetId: string) => void;
}

export default function PowersetPicker({ label, powersets, selectedId, accentColor, onChange }: PowersetPickerProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.select}
        style={{ borderColor: accentColor }}
        value={selectedId}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">-- Select --</option>
        {powersets.map((ps) => (
          <option key={ps.id} value={ps.id}>{ps.name}</option>
        ))}
      </select>
    </div>
  )
}
