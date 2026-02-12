import type { Powerset } from '../../types';

export const scrapperExpandedPowersets: Powerset[] = [
  // ========================
  // PRIMARY (MELEE) POWERSETS
  // ========================
  {
    id: 'claws',
    name: 'Claws',
    type: 'primary',
    archetypeId: 'scrapper',
    description: 'Claws powers deliver rapid, vicious lethal damage with razor-sharp claws. This powerset excels at fast attack chains and has excellent area-of-effect options.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'claws_swipe',
        name: 'Swipe',
        powersetId: 'claws',
        description: 'A quick swipe with your claws that deals minor lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 3,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 30.5,
            description: 'Minor lethal damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'claws_strike',
        name: 'Strike',
        powersetId: 'claws',
        description: 'A focused claw strike that deals moderate lethal damage with a chance to cause bleeding.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 6.86,
        rechargeTime: 4,
        castTime: 1.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 55.61,
            description: 'Moderate lethal damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 10.8,
            duration: 8,
            description: 'Bleeding: lethal damage over 8 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'claws_slash',
        name: 'Slash',
        powersetId: 'claws',
        description: 'A wide slash that deals moderate lethal damage to a single target with a chance to cause bleeding.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 6.86,
        rechargeTime: 6,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 62.56,
            description: 'Moderate lethal damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 14.4,
            duration: 10,
            description: 'Bleeding: lethal damage over 10 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'claws_follow_up',
        name: 'Follow Up',
        powersetId: 'claws',
        description: 'A precise series of strikes that deals minor damage but increases your to-hit and damage for a short time. Stacks up to three times.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 6.86,
        rechargeTime: 8,
        castTime: 1.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 36.15,
            description: 'Minor lethal damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            duration: 10,
            description: '+20% damage for 10 seconds (stacks up to 3 times)'
          },
          {
            type: 'buff',
            target: 'self',
            value: 12.5,
            duration: 10,
            description: '+12.5% to-hit for 10 seconds (stacks up to 3 times)'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'claws_focus',
        name: 'Focus',
        powersetId: 'claws',
        description: 'Focuses energy through your claws in a ranged cone attack dealing moderate lethal and energy damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 8.53,
        rechargeTime: 8,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 52.8,
            description: 'Moderate lethal damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 26.4,
            description: 'Minor energy damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'claws_spin',
        name: 'Spin',
        powersetId: 'claws',
        description: 'A devastating spinning attack that hits all nearby foes with your claws for moderate lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 11.86,
        rechargeTime: 14,
        castTime: 2.0,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 64.9,
            description: 'Moderate lethal damage to nearby enemies'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'claws_shockwave',
        name: 'Shockwave',
        powersetId: 'claws',
        description: 'Unleashes a cone of kinetic energy from your claws that deals moderate damage and knocks foes back.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 11.86,
        rechargeTime: 16,
        castTime: 2.0,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 48.64,
            description: 'Moderate lethal damage in a cone'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 0.8,
            description: '80% chance to knock back targets'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'claws_eviscerate',
        name: 'Eviscerate',
        powersetId: 'claws',
        description: 'A devastating leaping attack that tears through all nearby foes for superior lethal damage with a chance for deep wounds.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 13.52,
        rechargeTime: 20,
        castTime: 2.33,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 96.42,
            description: 'Superior lethal damage to nearby enemies'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 21.6,
            duration: 12,
            description: 'Deep wounds: lethal damage over 12 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'claws_lotus_drops',
        name: 'Lotus Drops',
        powersetId: 'claws',
        description: 'You perform a graceful but deadly series of attacks, slashing all nearby enemies with extreme lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 15.18,
        rechargeTime: 20,
        castTime: 2.67,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 110.5,
            description: 'Extreme lethal damage to nearby enemies'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 28.8,
            duration: 14,
            description: 'Severe bleeding: lethal damage over 14 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'katana',
    name: 'Katana',
    type: 'primary',
    archetypeId: 'scrapper',
    description: 'Katana powers deliver precise, lethal strikes with a finely crafted blade. This powerset features high single-target damage with defense-debuffing attacks and a unique parry mechanic.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'katana_sting_of_the_wasp',
        name: 'Sting of the Wasp',
        powersetId: 'katana',
        description: 'A quick thrust that deals minor lethal damage and slightly reduces the target\'s defense.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 5.2,
        rechargeTime: 4,
        castTime: 1.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 47.52,
            description: 'Moderate lethal damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: -7.5,
            duration: 10,
            description: '-7.5% defense for 10 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'katana_gambler_cut',
        name: 'Gambler\'s Cut',
        powersetId: 'katana',
        description: 'A fast horizontal slash that deals moderate lethal damage and reduces the target\'s defense.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 6.86,
        rechargeTime: 6,
        castTime: 1.67,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 74.39,
            description: 'High lethal damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: -10,
            duration: 12,
            description: '-10% defense for 12 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'katana_flashing_steel',
        name: 'Flashing Steel',
        powersetId: 'katana',
        description: 'A sweeping arc of steel that hits multiple targets in front of you for moderate lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 8.53,
        rechargeTime: 8,
        castTime: 1.67,
        range: 7,
        maxTargets: 5,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 55.61,
            description: 'Moderate lethal damage to multiple targets'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: -7.5,
            duration: 10,
            description: '-7.5% defense for 10 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'katana_build_up',
        name: 'Build Up',
        powersetId: 'katana',
        description: 'Focuses your energy, greatly increasing the damage and to-hit of your next few attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 5.2,
        rechargeTime: 90,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 100,
            duration: 10,
            description: '+100% damage for 10 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            duration: 10,
            description: '+20% to-hit for 10 seconds'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'katana_divine_avalanche',
        name: 'Divine Avalanche',
        powersetId: 'katana',
        description: 'A defensive strike that deals minor damage but grants a substantial defense bonus to melee and lethal attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 5.2,
        rechargeTime: 3,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 36.15,
            description: 'Minor lethal damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 15,
            duration: 10,
            description: '+15% melee defense for 10 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 15,
            duration: 10,
            description: '+15% lethal defense for 10 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'defense_buff'],
        maxSlots: 6
      },
      {
        id: 'katana_the_lotus_drops',
        name: 'The Lotus Drops',
        powersetId: 'katana',
        description: 'A spinning attack that hits all nearby foes for moderate lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 11.86,
        rechargeTime: 14,
        castTime: 2.0,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 64.9,
            description: 'Moderate lethal damage to nearby enemies'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: -7.5,
            duration: 10,
            description: '-7.5% defense for 10 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'katana_soaring_dragon',
        name: 'Soaring Dragon',
        powersetId: 'katana',
        description: 'A rising slash that deals superior lethal damage and launches the target into the air.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 11.86,
        rechargeTime: 12,
        castTime: 2.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 132.63,
            description: 'Superior lethal damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1.0,
            description: 'Knock up target'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: -10,
            duration: 12,
            description: '-10% defense for 12 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'katana_golden_dragonfly',
        name: 'Golden Dragonfly',
        powersetId: 'katana',
        description: 'A devastating overhead strike that deals extreme lethal damage and can knock down multiple targets.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 15.18,
        rechargeTime: 15,
        castTime: 2.33,
        range: 7,
        maxTargets: 3,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 164.06,
            description: 'Extreme lethal damage'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 0.67,
            description: '67% chance to knock down targets'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: -10,
            duration: 12,
            description: '-10% defense for 12 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'katana_lotus_blossom',
        name: 'Lotus Blossom',
        powersetId: 'katana',
        description: 'A masterful series of blindingly fast strikes that deals extreme lethal damage to a single target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 18.0,
        rechargeTime: 20,
        castTime: 2.67,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 200.0,
            description: 'Extreme lethal damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: -15,
            duration: 15,
            description: '-15% defense for 15 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'defense_debuff'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'street_justice',
    name: 'Street Justice',
    type: 'primary',
    archetypeId: 'scrapper',
    description: 'Street Justice powers are brutal, no-holds-barred melee attacks that build combo points. As you land attacks, you build Combo Level, which enhances your finishing moves with additional effects.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'street_justice_initial_strike',
        name: 'Initial Strike',
        powersetId: 'street_justice',
        description: 'A quick jab that deals minor smashing damage. Builds 1 Combo Level.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 3,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 32.8,
            description: 'Minor smashing damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 1,
            duration: 15,
            description: 'Builds 1 Combo Level'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'street_justice_heavy_blow',
        name: 'Heavy Blow',
        powersetId: 'street_justice',
        description: 'A powerful punch that deals moderate smashing damage with a chance to disorient. Builds 1 Combo Level.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 6.86,
        rechargeTime: 6,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 62.56,
            description: 'Moderate smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 0.2,
            duration: 6,
            description: '20% chance to disorient target for 6 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 1,
            duration: 15,
            description: 'Builds 1 Combo Level'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'street_justice_sweeping_cross',
        name: 'Sweeping Cross',
        powersetId: 'street_justice',
        description: 'A wide cross punch that hits nearby foes for moderate smashing damage. At Combo Level 2+, also reduces their damage resistance. Builds 1 Combo Level.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 8.53,
        rechargeTime: 8,
        castTime: 1.67,
        range: 7,
        maxTargets: 5,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 55.61,
            description: 'Moderate smashing damage to nearby enemies'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: -15,
            duration: 10,
            description: 'At Combo Level 2+: -15% damage resistance for 10 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 1,
            duration: 15,
            description: 'Builds 1 Combo Level'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'street_justice_shin_breaker',
        name: 'Shin Breaker',
        powersetId: 'street_justice',
        description: 'A brutal kick to the shins that deals moderate smashing damage and slows the target. At Combo Level 2+, also immobilizes. Consumes Combo Levels.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 8.53,
        rechargeTime: 10,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 74.39,
            description: 'Moderate smashing damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: -40,
            duration: 12,
            description: '-40% movement speed for 12 seconds'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 0.8,
            duration: 8,
            description: 'At Combo Level 2+: immobilize target for 8 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'slow', 'immobilize'],
        maxSlots: 6
      },
      {
        id: 'street_justice_rib_cracker',
        name: 'Rib Cracker',
        powersetId: 'street_justice',
        description: 'A devastating body blow that deals high smashing damage and reduces the target\'s resistance. Builds 1 Combo Level.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 8.53,
        rechargeTime: 8,
        castTime: 1.67,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 84.11,
            description: 'High smashing damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: -10,
            duration: 15,
            description: '-10% damage resistance for 15 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 1,
            duration: 15,
            description: 'Builds 1 Combo Level'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'street_justice_spinning_strike',
        name: 'Spinning Strike',
        powersetId: 'street_justice',
        description: 'A powerful spinning attack that hits all nearby enemies for moderate smashing damage. At Combo Level 2+, also stuns targets. Consumes Combo Levels.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 11.86,
        rechargeTime: 14,
        castTime: 2.0,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 64.9,
            description: 'Moderate smashing damage to nearby enemies'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 0.6,
            duration: 8,
            description: 'At Combo Level 2+: 60% chance to disorient for 8 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'street_justice_crushing_uppercut',
        name: 'Crushing Uppercut',
        powersetId: 'street_justice',
        description: 'A devastating uppercut that deals superior smashing damage and launches the target into the air. Builds 1 Combo Level.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 11.86,
        rechargeTime: 12,
        castTime: 2.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 140.85,
            description: 'Superior smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1.0,
            description: 'Knock up target'
          },
          {
            type: 'buff',
            target: 'self',
            value: 1,
            duration: 15,
            description: 'Builds 1 Combo Level'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'street_justice_crowd_control',
        name: 'Crowd Control',
        powersetId: 'street_justice',
        description: 'A brutal series of attacks that hits all nearby enemies for high smashing damage. At Combo Level 3, also heals you. Consumes Combo Levels.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 15.18,
        rechargeTime: 20,
        castTime: 2.33,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 96.42,
            description: 'High smashing damage to nearby enemies'
          },
          {
            type: 'heal',
            target: 'self',
            value: 15,
            description: 'At Combo Level 3: heal 15% of max HP per target hit'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'heal'],
        maxSlots: 6
      },
      {
        id: 'street_justice_knockout_blow',
        name: 'Knockout Blow',
        powersetId: 'street_justice',
        description: 'The ultimate finishing move. A massive haymaker that deals extreme smashing damage and disorients the target. At Combo Level 3, damage is dramatically increased. Consumes Combo Levels.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 18.0,
        rechargeTime: 20,
        castTime: 2.67,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 200.0,
            description: 'Extreme smashing damage (increased at Combo Level 3)'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1.0,
            duration: 14,
            description: 'Disorient target for 14 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'fiery_melee_scrapper',
    name: 'Fiery Melee',
    type: 'primary',
    archetypeId: 'scrapper',
    description: 'Fiery Melee powers deal devastating fire damage in close combat. This powerset offers strong single-target and area damage with damage-over-time effects from burning enemies.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'fiery_melee_scrapper_scorch',
        name: 'Scorch',
        powersetId: 'fiery_melee_scrapper',
        description: 'A quick fiery punch that deals minor fire damage with a chance to set the target on fire.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 3,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 30.5,
            description: 'Minor fire damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 8.4,
            duration: 6,
            description: 'Burning: fire damage over 6 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'fiery_melee_scrapper_fire_sword',
        name: 'Fire Sword',
        powersetId: 'fiery_melee_scrapper',
        description: 'Summons a sword of pure fire that deals moderate fire and lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 6.86,
        rechargeTime: 6,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 42.18,
            description: 'Moderate fire damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 21.09,
            description: 'Minor lethal damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 12.6,
            duration: 8,
            description: 'Burning: fire damage over 8 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'fiery_melee_scrapper_combustion',
        name: 'Combustion',
        powersetId: 'fiery_melee_scrapper',
        description: 'You erupt in flames, dealing fire damage to all nearby foes. The flames continue to burn, dealing damage over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 11.86,
        rechargeTime: 16,
        castTime: 2.0,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 38.72,
            description: 'Minor fire damage to nearby enemies'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 25.2,
            duration: 12,
            description: 'Burning: fire damage over 12 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'fiery_melee_scrapper_build_up',
        name: 'Build Up',
        powersetId: 'fiery_melee_scrapper',
        description: 'Greatly increases your damage and to-hit for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 5.2,
        rechargeTime: 90,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 100,
            duration: 10,
            description: '+100% damage for 10 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            duration: 10,
            description: '+20% to-hit for 10 seconds'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'fiery_melee_scrapper_fire_sword_circle',
        name: 'Fire Sword Circle',
        powersetId: 'fiery_melee_scrapper',
        description: 'A spinning attack with your fire sword that hits all nearby enemies for moderate fire and lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 11.86,
        rechargeTime: 14,
        castTime: 2.0,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 42.18,
            description: 'Moderate fire damage to nearby enemies'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 21.09,
            description: 'Minor lethal damage to nearby enemies'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 16.8,
            duration: 10,
            description: 'Burning: fire damage over 10 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'fiery_melee_scrapper_breath_of_fire',
        name: 'Breath of Fire',
        powersetId: 'fiery_melee_scrapper',
        description: 'You exhale a cone of flames that deals moderate fire damage and sets enemies ablaze.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 11.86,
        rechargeTime: 16,
        castTime: 2.33,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 55.61,
            description: 'Moderate fire damage in a cone'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 21.0,
            duration: 12,
            description: 'Burning: fire damage over 12 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'fiery_melee_scrapper_incinerate',
        name: 'Incinerate',
        powersetId: 'fiery_melee_scrapper',
        description: 'A sustained blast of fire at close range that deals superior fire damage with heavy burning.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 11.86,
        rechargeTime: 12,
        castTime: 2.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 120.72,
            description: 'Superior fire damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 33.6,
            duration: 14,
            description: 'Heavy burning: fire damage over 14 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'fiery_melee_scrapper_greater_fire_sword',
        name: 'Greater Fire Sword',
        powersetId: 'fiery_melee_scrapper',
        description: 'Summons a massive sword of intense flame that deals extreme fire and lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 15.18,
        rechargeTime: 15,
        castTime: 2.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 110.5,
            description: 'High fire damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 55.25,
            description: 'Moderate lethal damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 28.8,
            duration: 12,
            description: 'Heavy burning: fire damage over 12 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'fiery_melee_scrapper_inferno',
        name: 'Inferno',
        powersetId: 'fiery_melee_scrapper',
        description: 'You unleash a massive explosion of fire, dealing extreme fire damage to all nearby enemies. This power drains your endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 18.0,
        rechargeTime: 145,
        castTime: 3.0,
        range: 7,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 178.5,
            description: 'Extreme fire damage to all nearby enemies'
          },
          {
            type: 'debuff',
            target: 'self',
            value: -100,
            description: 'Drains all remaining endurance'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },

  // ==========================
  // SECONDARY (ARMOR) POWERSETS
  // ==========================
  {
    id: 'bio_armor_scrapper',
    name: 'Bio Armor',
    type: 'secondary',
    archetypeId: 'scrapper',
    description: 'Bio Armor uses biological adaptations to provide resistance, defense, and regeneration. It features three distinct adaptation stances: Defensive, Efficient, and Offensive, allowing you to shift your focus mid-combat.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'bio_armor_scrapper_hardened_carapace',
        name: 'Hardened Carapace',
        powersetId: 'bio_armor_scrapper',
        description: 'Your body develops a hardened outer shell that provides resistance to smashing, lethal, and toxic damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 0.21,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 12.0,
            description: '+12% resistance to smashing damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 12.0,
            description: '+12% resistance to lethal damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 8.0,
            description: '+8% resistance to toxic damage'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'bio_armor_scrapper_environmental_modification',
        name: 'Environmental Modification',
        powersetId: 'bio_armor_scrapper',
        description: 'Your body adapts to environmental threats, providing defense to melee and ranged attacks and resistance to energy and cold damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 0.21,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 5.0,
            description: '+5% defense to melee attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 5.0,
            description: '+5% defense to ranged attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 10.0,
            description: '+10% resistance to energy damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 10.0,
            description: '+10% resistance to cold damage'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'resistance', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'bio_armor_scrapper_adaptation',
        name: 'Adaptation',
        powersetId: 'bio_armor_scrapper',
        description: 'Allows you to shift between three stances: Defensive Adaptation (more defense/resistance), Efficient Adaptation (endurance recovery), or Offensive Adaptation (more damage).',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 0,
        rechargeTime: 10,
        castTime: 0.5,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 10,
            description: 'Defensive: +10% defense to all, +15% resistance to all'
          },
          {
            type: 'buff',
            target: 'self',
            value: 50,
            description: 'Efficient: +50% endurance recovery, +25% recharge speed'
          },
          {
            type: 'buff',
            target: 'self',
            value: 30,
            description: 'Offensive: +30% damage, +15% to-hit'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'resistance', 'endurance_reduction', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'bio_armor_scrapper_inexhaustible',
        name: 'Inexhaustible',
        powersetId: 'bio_armor_scrapper',
        description: 'Your body produces extra energy, providing protection against slow and recovery debuffs while improving your endurance recovery.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 25,
            description: '+25% endurance recovery'
          },
          {
            type: 'buff',
            target: 'self',
            value: 40,
            description: '+40% resistance to slow effects'
          },
          {
            type: 'buff',
            target: 'self',
            value: 30,
            description: '+30% resistance to endurance drain'
          }
        ],
        allowedEnhancementTypes: ['endurance_modification', 'slow'],
        maxSlots: 6
      },
      {
        id: 'bio_armor_scrapper_dna_siphon',
        name: 'DNA Siphon',
        powersetId: 'bio_armor_scrapper',
        description: 'Siphon genetic material from nearby foes to heal yourself and boost your regeneration. Heals more with more enemies nearby.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 8.53,
        rechargeTime: 30,
        castTime: 1.5,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'heal',
            target: 'self',
            value: 20,
            description: 'Heal 20% of max HP per nearby enemy (up to 5 enemies)'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            duration: 15,
            description: '+100% regeneration rate for 15 seconds'
          }
        ],
        allowedEnhancementTypes: ['heal', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'bio_armor_scrapper_evolving_armor',
        name: 'Evolving Armor',
        powersetId: 'bio_armor_scrapper',
        description: 'Your body rapidly evolves additional armor plating, providing strong resistance to fire, cold, energy, and negative energy damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 0.26,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 15.0,
            description: '+15% resistance to fire damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 15.0,
            description: '+15% resistance to cold damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 15.0,
            description: '+15% resistance to energy damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 15.0,
            description: '+15% resistance to negative energy damage'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'bio_armor_scrapper_ablative_carapace',
        name: 'Ablative Carapace',
        powersetId: 'bio_armor_scrapper',
        description: 'Rapidly grows a thick ablative shell that absorbs incoming damage and heals you over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 8.53,
        rechargeTime: 60,
        castTime: 1.0,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'shield',
            target: 'self',
            value: 40,
            duration: 30,
            description: 'Absorb shield: absorbs 40% of max HP in damage for 30 seconds'
          },
          {
            type: 'heal',
            target: 'self',
            value: 25,
            duration: 30,
            description: 'Heal 25% of max HP over 30 seconds'
          }
        ],
        allowedEnhancementTypes: ['heal', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'bio_armor_scrapper_parasitic_aura',
        name: 'Parasitic Aura',
        powersetId: 'bio_armor_scrapper',
        description: 'Releases parasitic organisms that drain the life force of nearby enemies, healing you and reducing their damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 13.0,
        rechargeTime: 120,
        castTime: 2.0,
        range: 7,
        maxTargets: 16,
        effects: [
          {
            type: 'heal',
            target: 'self',
            value: 10,
            duration: 30,
            description: 'Heal 10% of max HP per target over 30 seconds'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: -20,
            duration: 30,
            description: '-20% damage for 30 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 50,
            duration: 30,
            description: '+50% endurance recovery for 30 seconds'
          }
        ],
        allowedEnhancementTypes: ['heal', 'recharge', 'endurance_reduction', 'to_hit_debuff'],
        maxSlots: 6
      },
      {
        id: 'bio_armor_scrapper_genomic_evolution',
        name: 'Genomic Evolution',
        powersetId: 'bio_armor_scrapper',
        description: 'Your body undergoes rapid genetic evolution, dramatically increasing all resistances, defense, regeneration, and recovery for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 0,
        rechargeTime: 360,
        castTime: 2.0,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 30,
            duration: 120,
            description: '+30% resistance to all damage types for 120 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 15,
            duration: 120,
            description: '+15% defense to all for 120 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 200,
            duration: 120,
            description: '+200% regeneration rate for 120 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            duration: 120,
            description: '+100% endurance recovery for 120 seconds'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'defense_buff', 'heal', 'recharge'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'regeneration',
    name: 'Regeneration',
    type: 'secondary',
    archetypeId: 'scrapper',
    description: 'Regeneration focuses on rapid self-healing and recovery. Rather than preventing damage, this powerset rapidly heals it, making you extremely hard to kill through sustained damage. Includes powerful click heals and a self-resurrection power.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'regeneration_fast_healing',
        name: 'Fast Healing',
        powersetId: 'regeneration',
        description: 'Your body naturally heals at an accelerated rate, greatly increasing your regeneration.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 100,
            description: '+100% regeneration rate'
          }
        ],
        allowedEnhancementTypes: ['heal'],
        maxSlots: 6
      },
      {
        id: 'regeneration_reconstruction',
        name: 'Reconstruction',
        powersetId: 'regeneration',
        description: 'Instantly heals a substantial portion of your hit points and provides a small amount of toxic resistance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 60,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'heal',
            target: 'self',
            value: 37.5,
            description: 'Heal 37.5% of max HP'
          },
          {
            type: 'buff',
            target: 'self',
            value: 15,
            duration: 30,
            description: '+15% resistance to toxic damage for 30 seconds'
          }
        ],
        allowedEnhancementTypes: ['heal', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'regeneration_quick_recovery',
        name: 'Quick Recovery',
        powersetId: 'regeneration',
        description: 'Your metabolism is highly efficient, greatly increasing your endurance recovery rate.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 50,
            description: '+50% endurance recovery'
          }
        ],
        allowedEnhancementTypes: ['endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'regeneration_dull_pain',
        name: 'Dull Pain',
        powersetId: 'regeneration',
        description: 'Increases your maximum hit points and heals you for a large amount.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 5.2,
        rechargeTime: 300,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 40,
            duration: 120,
            description: '+40% maximum hit points for 120 seconds'
          },
          {
            type: 'heal',
            target: 'self',
            value: 40,
            description: 'Heal 40% of max HP'
          }
        ],
        allowedEnhancementTypes: ['heal', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'regeneration_integration',
        name: 'Integration',
        powersetId: 'regeneration',
        description: 'Improves your regeneration rate and provides protection against disorient, hold, sleep, and knockback effects.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 0.21,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 75,
            description: '+75% regeneration rate'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            description: 'Protection against disorient, hold, sleep, and knockback'
          }
        ],
        allowedEnhancementTypes: ['heal', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'regeneration_resilience',
        name: 'Resilience',
        powersetId: 'regeneration',
        description: 'Your body becomes tougher, providing resistance to smashing, lethal, and toxic damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 15,
            description: '+15% resistance to smashing damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 15,
            description: '+15% resistance to lethal damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 11.25,
            description: '+11.25% resistance to toxic damage'
          }
        ],
        allowedEnhancementTypes: ['resistance'],
        maxSlots: 6
      },
      {
        id: 'regeneration_instant_healing',
        name: 'Instant Healing',
        powersetId: 'regeneration',
        description: 'Dramatically increases your regeneration rate for a moderate time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 5.2,
        rechargeTime: 300,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 500,
            duration: 90,
            description: '+500% regeneration rate for 90 seconds'
          }
        ],
        allowedEnhancementTypes: ['heal', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'regeneration_revive',
        name: 'Revive',
        powersetId: 'regeneration',
        description: 'Self resurrection power. You can revive yourself from defeat with full hit points and endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 0,
        rechargeTime: 300,
        castTime: 3.0,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'heal',
            target: 'self',
            value: 100,
            description: 'Resurrect with full hit points'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            duration: 15,
            description: 'Restore full endurance and gain brief invulnerability'
          }
        ],
        allowedEnhancementTypes: ['heal', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'regeneration_moment_of_glory',
        name: 'Moment of Glory',
        powersetId: 'regeneration',
        description: 'For a short time, you gain massive resistance to all damage and high defense. However, your regeneration is suppressed and you crash afterward.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 0,
        rechargeTime: 360,
        castTime: 2.0,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 60,
            duration: 180,
            description: '+60% resistance to all damage types for 180 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 30,
            duration: 180,
            description: '+30% defense to all attacks for 180 seconds'
          },
          {
            type: 'debuff',
            target: 'self',
            value: -100,
            duration: 180,
            description: 'Regeneration suppressed during effect'
          },
          {
            type: 'debuff',
            target: 'self',
            value: -100,
            duration: 15,
            description: 'Crash: -100% endurance and recovery for 15 seconds after expiration'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'defense_buff', 'recharge'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'energy_aura',
    name: 'Energy Aura',
    type: 'secondary',
    archetypeId: 'scrapper',
    description: 'Energy Aura sheathes you in a field of energy that provides defense and resistance. This powerset offers strong energy-based protection with endurance management tools and stealth capabilities.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'energy_aura_kinetic_shield',
        name: 'Kinetic Shield',
        powersetId: 'energy_aura',
        description: 'Generates a kinetic energy shield that provides defense against smashing, lethal, and negative energy attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 0.21,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 8.5,
            description: '+8.5% defense to smashing attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 8.5,
            description: '+8.5% defense to lethal attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 3.0,
            description: '+3% defense to negative energy attacks'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'energy_aura_power_shield',
        name: 'Power Shield',
        powersetId: 'energy_aura',
        description: 'Projects a power shield that provides defense against fire, cold, and energy attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 0.21,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 8.5,
            description: '+8.5% defense to fire attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 8.5,
            description: '+8.5% defense to cold attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 8.5,
            description: '+8.5% defense to energy attacks'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'energy_aura_entropy_shield',
        name: 'Entropy Shield',
        powersetId: 'energy_aura',
        description: 'Generates a low-level entropy field that provides stealth and defense against AoE and psionic attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 0.21,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 5.0,
            description: '+5% defense to AoE attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 3.0,
            description: '+3% defense to psionic attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            description: 'Stealth: enemies less likely to detect you'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'energy_aura_energy_protection',
        name: 'Energy Protection',
        powersetId: 'energy_aura',
        description: 'Provides resistance to energy, negative energy, and psionic damage. Also provides protection against status effects.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 0.21,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 15.0,
            description: '+15% resistance to energy damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 15.0,
            description: '+15% resistance to negative energy damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 7.5,
            description: '+7.5% resistance to psionic damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            description: 'Protection against disorient, hold, sleep, and knockback'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'energy_aura_energy_drain',
        name: 'Energy Drain',
        powersetId: 'energy_aura',
        description: 'Drains endurance from all nearby enemies, recovering your endurance and boosting your to-hit for each target affected.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 5.2,
        rechargeTime: 120,
        castTime: 2.0,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'debuff',
            target: 'aoe',
            value: -20,
            description: 'Drain 20% endurance from each target'
          },
          {
            type: 'buff',
            target: 'self',
            value: 10,
            duration: 30,
            description: '+10% to-hit per target affected for 30 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 15,
            description: 'Recover 15% endurance per target affected'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'to_hit_buff', 'recharge', 'endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'energy_aura_conserve_power',
        name: 'Conserve Power',
        powersetId: 'energy_aura',
        description: 'Dramatically reduces the endurance cost of all your powers for a moderate time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 0,
        rechargeTime: 300,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: -75,
            duration: 90,
            description: '-75% endurance cost of all powers for 90 seconds'
          }
        ],
        allowedEnhancementTypes: ['recharge'],
        maxSlots: 6
      },
      {
        id: 'energy_aura_repelling_force',
        name: 'Repelling Force',
        powersetId: 'energy_aura',
        description: 'Emits a repelling energy field that provides additional defense to melee attacks and has a chance to knock back attackers.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 0.26,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 7.5,
            description: '+7.5% defense to melee attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 5.0,
            description: '+5% defense to smashing attacks'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 0.15,
            description: '15% chance to knock back melee attackers'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'energy_aura_energy_cloak',
        name: 'Energy Cloak',
        powersetId: 'energy_aura',
        description: 'Cloaks you in energy that provides defense to all positional attacks and increases your movement speed.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 0.26,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 3.75,
            description: '+3.75% defense to melee attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 3.75,
            description: '+3.75% defense to ranged attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 3.75,
            description: '+3.75% defense to AoE attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            description: '+20% run speed'
          },
          {
            type: 'buff',
            target: 'self',
            value: 43.3,
            description: '+43.3% resistance to defense debuffs'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction', 'run_speed'],
        maxSlots: 6
      },
      {
        id: 'energy_aura_overload',
        name: 'Overload',
        powersetId: 'energy_aura',
        description: 'Overcharges your energy shields, massively boosting defense and providing endurance recovery. Crashes when it expires.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 0,
        rechargeTime: 360,
        castTime: 2.0,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 30,
            duration: 180,
            description: '+30% defense to all attacks for 180 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 200,
            duration: 180,
            description: '+200% endurance recovery for 180 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            duration: 180,
            description: '+100% resistance to defense debuffs for 180 seconds'
          },
          {
            type: 'debuff',
            target: 'self',
            value: -100,
            duration: 15,
            description: 'Crash: -100% endurance and recovery for 15 seconds after expiration'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'recharge'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'ninjitsu',
    name: 'Ninjitsu',
    type: 'secondary',
    archetypeId: 'scrapper',
    description: 'Ninjitsu provides defense through stealth, agility, and ancient ninja techniques. This powerset combines positional defense with healing, caltrops for area denial, and a powerful smoke flash for control.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'ninjitsu_ninja_reflexes',
        name: 'Ninja Reflexes',
        powersetId: 'ninjitsu',
        description: 'Your ninja training provides defense against melee and ranged attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 0.21,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 10.5,
            description: '+10.5% defense to melee attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 10.5,
            description: '+10.5% defense to ranged attacks'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'ninjitsu_danger_sense',
        name: 'Danger Sense',
        powersetId: 'ninjitsu',
        description: 'Your heightened awareness provides defense against AoE attacks and increases your perception.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 8.0,
            description: '+8% defense to AoE attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            description: 'Increased perception range'
          }
        ],
        allowedEnhancementTypes: ['defense_buff'],
        maxSlots: 6
      },
      {
        id: 'ninjitsu_shinobi_iri',
        name: 'Shinobi-Iri',
        powersetId: 'ninjitsu',
        description: 'An advanced stealth technique that makes you nearly invisible and provides defense to all attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 0.21,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 3.75,
            description: '+3.75% defense to all attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            description: 'Stealth: enemies much less likely to detect you'
          },
          {
            type: 'buff',
            target: 'self',
            value: 15,
            description: '+15% run speed'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction', 'run_speed'],
        maxSlots: 6
      },
      {
        id: 'ninjitsu_kuji_in_rin',
        name: 'Kuji-In Rin',
        powersetId: 'ninjitsu',
        description: 'A meditative technique that provides protection against disorient, hold, sleep, fear, and knockback effects.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 0.21,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 100,
            description: 'Protection against disorient, hold, sleep, fear, and knockback'
          },
          {
            type: 'buff',
            target: 'self',
            value: 7.5,
            description: '+7.5% resistance to psionic damage'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'ninjitsu_caltrops',
        name: 'Caltrops',
        powersetId: 'ninjitsu',
        description: 'Throw a handful of caltrops on the ground that slow and deal minor lethal damage to enemies who walk through them.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 5.2,
        rechargeTime: 30,
        castTime: 1.0,
        range: 7,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 2.5,
            duration: 15,
            description: 'Minor lethal damage over time to enemies in area'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: -80,
            duration: 15,
            description: '-80% movement speed while in area'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'slow', 'recharge', 'endurance_reduction', 'damage'],
        maxSlots: 6
      },
      {
        id: 'ninjitsu_kuji_in_sha',
        name: 'Kuji-In Sha',
        powersetId: 'ninjitsu',
        description: 'A healing meditation that restores a large portion of your hit points and provides brief regeneration.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 8.53,
        rechargeTime: 60,
        castTime: 1.5,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'heal',
            target: 'self',
            value: 35,
            description: 'Heal 35% of max HP'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            duration: 15,
            description: '+100% regeneration rate for 15 seconds'
          }
        ],
        allowedEnhancementTypes: ['heal', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'ninjitsu_smoke_flash',
        name: 'Smoke Flash',
        powersetId: 'ninjitsu',
        description: 'Throw a smoke bomb that placates enemies and reduces their to-hit. Affected enemies will not attack you unless provoked.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 11.86,
        rechargeTime: 60,
        castTime: 1.5,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'control',
            target: 'aoe',
            value: 1.0,
            duration: 15,
            description: 'Placate: enemies ignore you for 15 seconds unless attacked'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: -10,
            duration: 30,
            description: '-10% to-hit for 30 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'to_hit_debuff', 'recharge', 'endurance_reduction', 'confuse'],
        maxSlots: 6
      },
      {
        id: 'ninjitsu_bo_ryaku',
        name: 'Bo Ryaku',
        powersetId: 'ninjitsu',
        description: 'Strategic body conditioning that improves your resistance to smashing, lethal, fire, cold, energy, and negative energy damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 11.25,
            description: '+11.25% resistance to smashing damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 11.25,
            description: '+11.25% resistance to lethal damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 7.5,
            description: '+7.5% resistance to fire, cold, energy, and negative energy damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 43.3,
            description: '+43.3% resistance to defense debuffs'
          }
        ],
        allowedEnhancementTypes: ['resistance'],
        maxSlots: 6
      },
      {
        id: 'ninjitsu_kuji_in_retsu',
        name: 'Kuji-In Retsu',
        powersetId: 'ninjitsu',
        description: 'The ultimate ninja technique. Massively boosts defense to all attacks and provides enhanced regeneration for a short time. Crashes afterward.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 0,
        rechargeTime: 360,
        castTime: 2.0,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 40,
            duration: 180,
            description: '+40% defense to all attacks for 180 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 300,
            duration: 180,
            description: '+300% regeneration rate for 180 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            duration: 180,
            description: '+100% resistance to defense debuffs for 180 seconds'
          },
          {
            type: 'debuff',
            target: 'self',
            value: -100,
            duration: 15,
            description: 'Crash: -100% endurance and recovery for 15 seconds after expiration'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'heal', 'recharge'],
        maxSlots: 6
      }
    ]
  }
];
