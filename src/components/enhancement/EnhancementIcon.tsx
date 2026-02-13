import { useState } from 'react';
import type { Enhancement } from '../../types';
import type { EnhancementCategory } from '../../types/powerset';
import { categoryLabels, enhancementSets } from '../../data/enhancements';
import styles from './EnhancementIcon.module.css';

interface Props {
  enhancement: Enhancement;
  onClick?: () => void;
}

function getIconPath(category: EnhancementCategory, isSet: boolean): string {
  if (isSet) {
    return `/icons/enhancements/io_${category}.png`;
  }
  return `/icons/enhancements/${category}.webp`;
}

export default function EnhancementIcon({ enhancement, onClick }: Props) {
  const [showTooltip, setShowTooltip] = useState(false);

  const primaryCategory = enhancement.categories[0];
  const isSet = enhancement.origin === 'set';
  const iconSrc = getIconPath(primaryCategory, isSet);
  const fallbackSrc = `/icons/enhancements/${primaryCategory}.webp`;

  const setName = enhancement.setId
    ? enhancementSets.find((s) => s.id === enhancement.setId)?.name
    : null;

  return (
    <div
      className={`${styles.icon} ${isSet ? styles.set : ''}`}
      onClick={onClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img
        className={styles.iconImg}
        src={iconSrc}
        alt={enhancement.name}
        onError={(e) => {
          const target = e.currentTarget;
          if (!target.dataset.fallback) {
            target.dataset.fallback = '1';
            target.src = fallbackSrc;
          }
        }}
        draggable={false}
      />
      {showTooltip && (
        <div className={styles.tooltip}>
          {setName && <div className={styles.tooltipSetName}>{setName}</div>}
          <div className={styles.tooltipEnhName}>{enhancement.name}</div>
          {enhancement.categories.length > 0 && (
            <div className={styles.tooltipCategories}>
              {enhancement.categories.map((c) => categoryLabels[c]).join(' / ')}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
