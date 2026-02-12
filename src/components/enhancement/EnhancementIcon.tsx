import { useState } from 'react';
import type { Enhancement } from '../../types';
import { categoryLabels, categoryColors } from '../../data/enhancements';
import styles from './EnhancementIcon.module.css';

interface Props {
  enhancement: Enhancement;
  onClick?: () => void;
}

export default function EnhancementIcon({ enhancement, onClick }: Props) {
  const [showTooltip, setShowTooltip] = useState(false);

  const primaryCategory = enhancement.categories[0];
  const color = categoryColors[primaryCategory] || '#888';
  const abbr = getAbbreviation(enhancement);

  return (
    <div
      className={`${styles.icon} ${enhancement.origin === 'set' ? styles.set : ''}`}
      style={{ backgroundColor: color, '--enh-color': color } as React.CSSProperties}
      onClick={onClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      title=""
    >
      {abbr}
      {showTooltip && (
        <div className={styles.tooltip}>
          {enhancement.name}
          {enhancement.categories.length > 0 && (
            <> — {enhancement.categories.map((c) => categoryLabels[c]).join('/')}</>
          )}
        </div>
      )}
    </div>
  );
}

function getAbbreviation(enh: Enhancement): string {
  if (enh.categories.length === 1) {
    const label = categoryLabels[enh.categories[0]];
    return label.slice(0, 3);
  }
  return enh.categories.map((c) => categoryLabels[c][0]).join('');
}
