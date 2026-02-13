import type { Build, SlottedEnhancement } from '../types';
import type { EnhancementCategory } from '../types/powerset';
import { getPowersetById } from '../data';
import { getEnhancementById, enhancementSets } from '../data/enhancements';

export interface StatBlock {
  defense: {
    smashing: number;
    lethal: number;
    fire: number;
    cold: number;
    energy: number;
    negative: number;
    psionic: number;
    melee: number;
    ranged: number;
    aoe: number;
  };
  resistance: {
    smashing: number;
    lethal: number;
    fire: number;
    cold: number;
    energy: number;
    negative: number;
    psionic: number;
  };
  general: {
    maxHp: number;
    regen: number;
    recovery: number;
    recharge: number;
    accuracy: number;
    damage: number;
  };
}

function emptyStats(): StatBlock {
  return {
    defense: { smashing: 0, lethal: 0, fire: 0, cold: 0, energy: 0, negative: 0, psionic: 0, melee: 0, ranged: 0, aoe: 0 },
    resistance: { smashing: 0, lethal: 0, fire: 0, cold: 0, energy: 0, negative: 0, psionic: 0 },
    general: { maxHp: 0, regen: 0, recovery: 0, recharge: 0, accuracy: 0, damage: 0 },
  };
}

function applySetBonusStat(stats: StatBlock, stat: string, value: number) {
  switch (stat) {
    case 'accuracy': stats.general.accuracy += value; break;
    case 'damage': stats.general.damage += value; break;
    case 'recharge': stats.general.recharge += value; break;
    case 'maxHp': stats.general.maxHp += value; break;
    case 'recovery': stats.general.recovery += value; break;
    case 'regen': stats.general.regen += value; break;
    case 'defense_smashing': stats.defense.smashing += value; break;
    case 'defense_lethal': stats.defense.lethal += value; break;
    case 'defense_fire': stats.defense.fire += value; break;
    case 'defense_cold': stats.defense.cold += value; break;
    case 'defense_energy': stats.defense.energy += value; break;
    case 'defense_negative': stats.defense.negative += value; break;
    case 'defense_psionic': stats.defense.psionic += value; break;
    case 'defense_melee': stats.defense.melee += value; break;
    case 'defense_ranged': stats.defense.ranged += value; break;
    case 'defense_aoe': stats.defense.aoe += value; break;
    case 'resistance_smashing': stats.resistance.smashing += value; break;
    case 'resistance_lethal': stats.resistance.lethal += value; break;
    case 'resistance_fire': stats.resistance.fire += value; break;
    case 'resistance_cold': stats.resistance.cold += value; break;
    case 'resistance_energy': stats.resistance.energy += value; break;
    case 'resistance_negative': stats.resistance.negative += value; break;
    case 'resistance_psionic': stats.resistance.psionic += value; break;
  }
}

const defenseTypes = new Set(['smashing', 'lethal', 'fire', 'cold', 'energy', 'negative', 'psionic', 'melee', 'ranged', 'aoe']);
const resistanceTypes = new Set(['smashing', 'lethal', 'fire', 'cold', 'energy', 'negative', 'psionic']);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyEffect = Record<string, any>;

/** Extract the relevant type key from an effect (handles damageType, defenseType, resistanceType) */
function getEffectSubtype(effect: AnyEffect): string | undefined {
  return effect.damageType || effect.defenseType || effect.resistanceType;
}

/** Check if an effect is a stat-modifying effect (defense, resistance, or general buff) */
function isStatEffect(effect: AnyEffect): boolean {
  const t = effect.type;
  return t === 'shield' || t === 'buff' || t === 'defense' || t === 'resistance';
}

/** Determine which enhancement categories boost a given power effect */
function getBoostingCategories(effect: AnyEffect): EnhancementCategory[] {
  if (!isStatEffect(effect)) return [];

  const t = effect.type;
  const desc = (effect.description || '').toLowerCase();
  const categories: EnhancementCategory[] = [];

  if (t === 'resistance' || (desc.includes('res') && !desc.includes('restore'))) {
    categories.push('resistance');
  }
  if (t === 'defense' || desc.includes('def')) {
    categories.push('defense_buff');
  }
  if (desc.includes('regen') || desc.includes('max hp') || desc.includes('maxhp') || desc.includes('hit point')) {
    categories.push('heal');
  }
  if (desc.includes('recovery')) {
    categories.push('endurance_modification');
  }

  return categories;
}

/** Calculate the enhancement multiplier from slotted IOs for a given effect */
function getEnhancementMultiplier(
  boostingCategories: EnhancementCategory[],
  slottedEnhancements: SlottedEnhancement[],
): number {
  if (boostingCategories.length === 0) return 1;

  let totalBonus = 0;
  for (const slot of slottedEnhancements) {
    const enh = getEnhancementById(slot.enhancementId);
    if (!enh) continue;
    for (const cat of enh.categories) {
      if (boostingCategories.includes(cat)) {
        totalBonus += enh.bonusPercentage;
        break; // count each enhancement once per effect
      }
    }
  }

  return 1 + (totalBonus / 100);
}

function applyPowerEffect(
  stats: StatBlock,
  effect: AnyEffect,
  multiplier: number,
) {
  if (!isStatEffect(effect)) return;

  const desc = (effect.description || '').toLowerCase();
  const val = effect.value * multiplier;
  const t = effect.type;
  const dmg = getEffectSubtype(effect);

  // Defense effects
  const isDef = t === 'defense' || desc.includes('def');
  if (isDef) {
    if (dmg && defenseTypes.has(dmg)) {
      (stats.defense as Record<string, number>)[dmg] += val;
    }
    // Positional defense from description
    if (desc.includes('melee') && dmg !== 'melee') stats.defense.melee += val;
    if (desc.includes('ranged') && dmg !== 'ranged') stats.defense.ranged += val;
    if (desc.includes('aoe') && dmg !== 'aoe') stats.defense.aoe += val;
    // "All type DEF" or "All DEF" patterns
    if (desc.includes('all') && !dmg) {
      for (const dt of defenseTypes) {
        (stats.defense as Record<string, number>)[dt] += val;
      }
    }
  }

  // Resistance effects
  const isRes = t === 'resistance' || (desc.includes('res') && !desc.includes('restore'));
  if (isRes) {
    if (dmg && resistanceTypes.has(dmg)) {
      (stats.resistance as Record<string, number>)[dmg] += val;
    }
    // "All Resistance" patterns
    if (desc.includes('all') && !dmg) {
      for (const rt of resistanceTypes) {
        (stats.resistance as Record<string, number>)[rt] += val;
      }
    }
  }

  // General stats
  if (desc.includes('regen')) stats.general.regen += val;
  if (desc.includes('recovery')) stats.general.recovery += val;
  if (desc.includes('max hp') || desc.includes('maxhp') || desc.includes('hit point')) stats.general.maxHp += val;
  if (desc.includes('recharge')) stats.general.recharge += val;
  if (desc.includes('accuracy') || desc.includes('to-hit') || desc.includes('tohit')) stats.general.accuracy += val;
  if (desc.includes('damage') && !desc.includes('resistance')) stats.general.damage += val;
}

export function calculateStats(build: Build): StatBlock {
  const stats = emptyStats();

  // Only include active powers
  const activePicks = build.powerPicks.filter((pp) => pp.isActive !== false);

  // Apply power effects from active powers, enhanced by slotted IOs
  for (const pick of activePicks) {
    const powerset = getPowersetById(pick.powersetId);
    if (!powerset) continue;
    const power = powerset.powers.find((p) => p.id === pick.powerId);
    if (!power) continue;

    for (const effect of power.effects) {
      const boostingCategories = getBoostingCategories(effect as AnyEffect);
      const multiplier = getEnhancementMultiplier(boostingCategories, pick.slottedEnhancements);
      applyPowerEffect(stats, effect as AnyEffect, multiplier);
    }
  }

  // Calculate IO set bonuses from active powers only
  const setCountsPerPower = new Map<string, Map<string, number>>();

  for (const pick of activePicks) {
    const setCounts = new Map<string, number>();
    for (const slot of pick.slottedEnhancements) {
      const enh = getEnhancementById(slot.enhancementId);
      if (enh?.setId) {
        setCounts.set(enh.setId, (setCounts.get(enh.setId) || 0) + 1);
      }
    }
    if (setCounts.size > 0) {
      setCountsPerPower.set(pick.powerId, setCounts);
    }
  }

  // Apply set bonuses (these are flat values, not enhanced by slotted IOs)
  for (const [, setCounts] of setCountsPerPower) {
    for (const [setId, count] of setCounts) {
      const enhSet = enhancementSets.find((s) => s.id === setId);
      if (!enhSet) continue;
      for (const bonus of enhSet.setBonuses) {
        if (count >= bonus.requiredCount) {
          for (const effect of bonus.effects) {
            applySetBonusStat(stats, effect.stat, effect.value);
          }
        }
      }
    }
  }

  return stats;
}
