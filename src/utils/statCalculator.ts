import type { Build } from '../types';
import { getPowersetById } from '../data';
import { getEnhancementById, enhancementSets } from '../data/enhancements';
import { archetypes } from '../data/archetypes';

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

// Map set bonus stat names to our StatBlock paths
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

export function calculateStats(build: Build): StatBlock {
  const stats = emptyStats();

  // Get base power effects from picked powers
  for (const pick of build.powerPicks) {
    const powerset = getPowersetById(pick.powersetId);
    if (!powerset) continue;
    const power = powerset.powers.find((p) => p.id === pick.powerId);
    if (!power) continue;

    for (const effect of power.effects) {
      if (effect.type === 'shield' || effect.type === 'buff') {
        // Map power effects to stats based on damage type and target
        if (effect.description.toLowerCase().includes('defense')) {
          const dmg = effect.damageType;
          if (dmg && dmg in stats.defense) {
            (stats.defense as Record<string, number>)[dmg] += effect.value;
          }
          // Check for positional defense keywords
          if (effect.description.toLowerCase().includes('melee')) stats.defense.melee += effect.value;
          if (effect.description.toLowerCase().includes('ranged')) stats.defense.ranged += effect.value;
          if (effect.description.toLowerCase().includes('aoe')) stats.defense.aoe += effect.value;
        }
        if (effect.description.toLowerCase().includes('resistance') && effect.damageType) {
          const dmg = effect.damageType;
          if (dmg in stats.resistance) {
            (stats.resistance as Record<string, number>)[dmg] += effect.value;
          }
        }
        if (effect.description.toLowerCase().includes('regen')) stats.general.regen += effect.value;
        if (effect.description.toLowerCase().includes('recovery')) stats.general.recovery += effect.value;
        if (effect.description.toLowerCase().includes('max hp')) stats.general.maxHp += effect.value;
      }
      if (effect.type === 'damage') {
        stats.general.damage += effect.value;
      }
    }
  }

  // Calculate set bonuses from slotted IO set enhancements
  // Count how many enhancements from each set are slotted per power
  const setCountsPerPower = new Map<string, Map<string, number>>();

  for (const pick of build.powerPicks) {
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

  // Apply set bonuses (each set in each power can grant bonuses once)
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
