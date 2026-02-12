import { useState } from 'react';
import { useBuildStore } from '../../store';
import { useUIStore } from '../../store/uiStore';
import { getPowersetById } from '../../data';
import {
  basicEnhancements,
  enhancementSets,
  categoryLabels,
  categoryColors,
} from '../../data/enhancements';
import type { Enhancement, EnhancementCategory } from '../../types';
import styles from './EnhancementPicker.module.css';

type Tab = 'basic' | 'sets';

export default function EnhancementPicker() {
  const { isOpen, targetPowerId, targetSlotIndex } = useUIStore((s) => s.enhancementPicker);
  const closePicker = useUIStore((s) => s.closeEnhancementPicker);
  const build = useBuildStore((s) => s.currentBuild);
  const slotEnhancement = useBuildStore((s) => s.slotEnhancement);
  const removeEnhancement = useBuildStore((s) => s.removeEnhancement);
  const [activeTab, setActiveTab] = useState<Tab>('basic');

  if (!isOpen || !targetPowerId || !build) return null;

  // Find the power pick and its power data
  const pick = build.powerPicks.find((pp) => pp.powerId === targetPowerId);
  if (!pick) return null;

  const powerset = getPowersetById(pick.powersetId);
  const power = powerset?.powers.find((p) => p.id === pick.powerId);
  if (!power) return null;

  const allowedCategories = power.allowedEnhancementTypes;

  // Current enhancement in this slot
  const currentEnh = pick.slottedEnhancements.find((se) => se.slotIndex === targetSlotIndex);

  // Filter basic enhancements to those matching allowed categories
  const matchingBasic = basicEnhancements.filter((enh) =>
    enh.categories.some((cat) => allowedCategories.includes(cat))
  );

  // Filter IO sets to those matching allowed categories
  const matchingSets = enhancementSets.filter((set) =>
    allowedCategories.includes(set.applicableTo)
  );

  function handleSelect(enhancement: Enhancement) {
    slotEnhancement(targetPowerId!, targetSlotIndex, enhancement.id);
    closePicker();
  }

  function handleRemove() {
    removeEnhancement(targetPowerId!, targetSlotIndex);
    closePicker();
  }

  return (
    <div className={styles.overlay} onClick={closePicker}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <div className={styles.title}>{power.name}</div>
            <div className={styles.slotInfo}>Slot {targetSlotIndex + 1} of {power.maxSlots}</div>
          </div>
          <button className={styles.closeBtn} onClick={closePicker}>×</button>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'basic' ? styles.active : ''}`}
            onClick={() => setActiveTab('basic')}
          >
            Standard
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'sets' ? styles.active : ''}`}
            onClick={() => setActiveTab('sets')}
          >
            IO Sets ({matchingSets.length})
          </button>
        </div>

        <div className={styles.content}>
          {currentEnh && (
            <button className={styles.removeBtn} onClick={handleRemove}>
              Remove Current Enhancement
            </button>
          )}

          {activeTab === 'basic' && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>SINGLE ORIGIN</div>
              <div className={styles.grid}>
                {matchingBasic.map((enh) => (
                  <EnhItemButton key={enh.id} enhancement={enh} onSelect={handleSelect} />
                ))}
              </div>
              {matchingBasic.length === 0 && (
                <div className={styles.empty}>No matching enhancements</div>
              )}
            </div>
          )}

          {activeTab === 'sets' && (
            <>
              {matchingSets.length === 0 ? (
                <div className={styles.empty}>No IO sets available for this power</div>
              ) : (
                matchingSets.map((set) => (
                  <div key={set.id} className={styles.section}>
                    <div className={styles.setHeader}>
                      <span className={styles.setName}>{set.name}</span>
                      <span className={styles.setRarity}>{set.rarity}</span>
                    </div>
                    <div className={styles.grid}>
                      {set.enhancements.map((enh) => (
                        <EnhItemButton key={enh.id} enhancement={enh} onSelect={handleSelect} />
                      ))}
                    </div>
                    <div className={styles.setBonuses}>
                      {set.setBonuses.map((bonus, i) => (
                        <div key={i} className={styles.bonusLine}>
                          <span className={styles.bonusCount}>{bonus.requiredCount}pc:</span>
                          {bonus.description}
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function EnhItemButton({ enhancement, onSelect }: { enhancement: Enhancement; onSelect: (e: Enhancement) => void }) {
  const primaryCat = enhancement.categories[0];
  const color = categoryColors[primaryCat] || '#888';

  return (
    <div className={styles.enhItem} onClick={() => onSelect(enhancement)}>
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: 3,
          backgroundColor: color,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.45rem',
          fontWeight: 700,
          color: '#fff',
          textShadow: '0 1px 2px rgba(0,0,0,0.8)',
        }}
      >
        {categoryLabels[primaryCat]?.slice(0, 2)}
      </div>
      <div>
        <div className={styles.enhName}>{enhancement.name}</div>
        <div className={styles.enhCategories}>
          {enhancement.categories.map((c: EnhancementCategory) => categoryLabels[c]).join(' / ')}
        </div>
      </div>
    </div>
  );
}
