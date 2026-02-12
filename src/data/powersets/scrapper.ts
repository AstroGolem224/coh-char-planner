import type { Powerset } from '../../types';

export const scrapperPowersets: Powerset[] = [
  {
    id: 'martial_arts',
    name: 'Martial Arts',
    type: 'primary',
    archetypeId: 'scrapper',
    description: 'Martial Arts powers focus on lightning-fast strikes and devastating kicks. This powerset offers a balanced mix of single-target attacks with occasional area effects.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'martial_arts_thunder_kick',
        name: 'Thunder Kick',
        powersetId: 'martial_arts',
        description: 'A quick kick that deals minor smashing damage with a chance to disorient the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 3,
        castTime: 1.0,
        range: 5,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 36.15,
            description: 'Minor smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 0.2,
            duration: 8,
            description: '20% chance to disorient target for 8 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'martial_arts_storm_kick',
        name: 'Storm Kick',
        powersetId: 'martial_arts',
        description: 'Unleashes a rapid spinning kick that deals moderate smashing damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 6.86,
        rechargeTime: 6,
        castTime: 1.5,
        range: 5,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 62.56,
            description: 'Moderate smashing damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'martial_arts_cobra_strike',
        name: 'Cobra Strike',
        powersetId: 'martial_arts',
        description: 'A precision strike that deals minor damage but has a high chance to disorient the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 6.86,
        rechargeTime: 15,
        castTime: 1.0,
        range: 5,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 26.87,
            description: 'Minor smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 0.8,
            duration: 11.92,
            description: '80% chance to disorient target for 11.92 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'martial_arts_focus_chi',
        name: 'Focus Chi',
        powersetId: 'martial_arts',
        description: 'Focuses your chi, greatly increasing the damage of your next few attacks.',
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
        id: 'martial_arts_crippling_axe_kick',
        name: 'Crippling Axe Kick',
        powersetId: 'martial_arts',
        description: 'A devastating axe kick that deals high damage and reduces the target\'s speed and damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 8.53,
        rechargeTime: 10,
        castTime: 1.5,
        range: 5,
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
            value: -25,
            duration: 10,
            description: '-25% movement speed for 10 seconds'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: -15,
            duration: 10,
            description: '-15% damage for 10 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'slow'],
        maxSlots: 6
      },
      {
        id: 'martial_arts_dragons_tail',
        name: 'Dragon\'s Tail',
        powersetId: 'martial_arts',
        description: 'A spinning sweep that hits all nearby foes for moderate damage and has a chance to knock them down.',
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
            value: 0.5,
            description: '50% chance to knock down targets'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'martial_arts_eagles_claw',
        name: 'Eagle\'s Claw',
        powersetId: 'martial_arts',
        description: 'A devastating leaping attack that deals superior damage with a high chance to disorient and knock up the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 11.86,
        rechargeTime: 12,
        castTime: 2.33,
        range: 5,
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
            value: 0.7,
            duration: 11.92,
            description: '70% chance to disorient target for 11.92 seconds'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 0.7,
            description: '70% chance to knock up target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'martial_arts_crane_kick',
        name: 'Crane Kick',
        powersetId: 'martial_arts',
        description: 'A slow but extremely powerful kick that deals extreme damage and has a high chance to knock back the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 13.52,
        rechargeTime: 15,
        castTime: 2.67,
        range: 5,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 161.72,
            description: 'Extreme smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 0.8,
            description: '80% chance to knock back target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'martial_arts_tier9',
        name: 'Tier 9 Power',
        powersetId: 'martial_arts',
        description: 'Ultimate Martial Arts power.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 32,
        positionInSet: 9,
        enduranceCost: 15.0,
        rechargeTime: 20,
        castTime: 2.0,
        range: 5,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 180.0,
            description: 'Ultimate smashing damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'broadsword',
    name: 'Broadsword',
    type: 'primary',
    archetypeId: 'scrapper',
    description: 'Broadsword powers are slow but devastating melee attacks. This powerset features high damage lethal attacks with some defense capabilities.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'broadsword_hack',
        name: 'Hack',
        powersetId: 'broadsword',
        description: 'A quick slash that deals moderate lethal damage with a chance for critical hits.',
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
        id: 'broadsword_slash',
        name: 'Slash',
        powersetId: 'broadsword',
        description: 'A strong slash that deals high lethal damage and reduces the target\'s defense.',
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
        id: 'broadsword_slice',
        name: 'Slice',
        powersetId: 'broadsword',
        description: 'A sweeping slice that hits multiple targets in front of you for moderate damage.',
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
        id: 'broadsword_build_up',
        name: 'Build Up',
        powersetId: 'broadsword',
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
        id: 'broadsword_parry',
        name: 'Parry',
        powersetId: 'broadsword',
        description: 'A defensive strike that deals minor damage but grants a large defense bonus.',
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
        id: 'broadsword_whirling_sword',
        name: 'Whirling Sword',
        powersetId: 'broadsword',
        description: 'A spinning attack that hits all nearby foes for moderate damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 11.86,
        rechargeTime: 14,
        castTime: 2.0,
        range: 8,
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
        id: 'broadsword_disembowel',
        name: 'Disembowel',
        powersetId: 'broadsword',
        description: 'An upward slash that deals superior damage and knocks the target into the air.',
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
        id: 'broadsword_head_splitter',
        name: 'Head Splitter',
        powersetId: 'broadsword',
        description: 'A devastating overhead strike that deals extreme damage and can knock down multiple targets.',
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
        id: 'broadsword_tier9',
        name: 'Tier 9 Power',
        powersetId: 'broadsword',
        description: 'Ultimate Broadsword power.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 32,
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
            description: 'Ultimate lethal damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'super_reflexes',
    name: 'Super Reflexes',
    type: 'secondary',
    archetypeId: 'scrapper',
    description: 'Super Reflexes provides pure defense through incredible agility and reaction time. This powerset offers strong positional defense against all attack types.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'super_reflexes_focused_fighting',
        name: 'Focused Fighting',
        powersetId: 'super_reflexes',
        description: 'Provides defense against melee attacks through heightened focus.',
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
            value: 13.875,
            description: '+13.875% defense to melee attacks'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'super_reflexes_focused_senses',
        name: 'Focused Senses',
        powersetId: 'super_reflexes',
        description: 'Provides defense against ranged attacks through enhanced awareness.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 2,
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
            value: 13.875,
            description: '+13.875% defense to ranged attacks'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'super_reflexes_agile',
        name: 'Agile',
        powersetId: 'super_reflexes',
        description: 'Your agility provides defense and increases your jumping ability.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 4,
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
            value: 5.625,
            description: '+5.625% defense to melee attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 5.625,
            description: '+5.625% defense to ranged attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 5.625,
            description: '+5.625% defense to AoE attacks'
          }
        ],
        allowedEnhancementTypes: ['defense_buff'],
        maxSlots: 6
      },
      {
        id: 'super_reflexes_practiced_brawler',
        name: 'Practiced Brawler',
        powersetId: 'super_reflexes',
        description: 'Provides protection against disorient, hold, sleep, and knockback effects.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 10,
        positionInSet: 4,
        enduranceCost: 5.2,
        rechargeTime: 60,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 100,
            duration: 90,
            description: 'Protection against disorient, hold, sleep, and knockback for 90 seconds'
          }
        ],
        allowedEnhancementTypes: ['recharge'],
        maxSlots: 6
      },
      {
        id: 'super_reflexes_dodge',
        name: 'Dodge',
        powersetId: 'super_reflexes',
        description: 'Provides defense against area of effect attacks through quick movement.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 16,
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
            value: 13.875,
            description: '+13.875% defense to AoE attacks'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'super_reflexes_lucky',
        name: 'Lucky',
        powersetId: 'super_reflexes',
        description: 'Your luck increases your defense to all attacks and improves resistance to defense debuffs.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 20,
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
            value: 5.625,
            description: '+5.625% defense to melee attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 5.625,
            description: '+5.625% defense to ranged attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 5.625,
            description: '+5.625% defense to AoE attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 43.3,
            description: '+43.3% resistance to defense debuffs'
          }
        ],
        allowedEnhancementTypes: ['defense_buff'],
        maxSlots: 6
      },
      {
        id: 'super_reflexes_evasion',
        name: 'Evasion',
        powersetId: 'super_reflexes',
        description: 'Greatly improves all your defenses for a short time. Also provides scaling resistance based on nearby enemies.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 28,
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
            value: 3.75,
            description: '+3.75% defense to all attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            description: 'Scaling resistance based on nearby enemies (up to 20%)'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction', 'resistance'],
        maxSlots: 6
      },
      {
        id: 'super_reflexes_quickness',
        name: 'Quickness',
        powersetId: 'super_reflexes',
        description: 'Increases your attack rate, movement speed, and reduces the time to activate powers.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 35,
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
            value: 20,
            description: '+20% recharge speed'
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
            value: 30,
            description: 'Slow resistance'
          }
        ],
        allowedEnhancementTypes: ['run_speed', 'slow'],
        maxSlots: 6
      },
      {
        id: 'super_reflexes_elude',
        name: 'Elude',
        powersetId: 'super_reflexes',
        description: 'Massively increases your defense and recovery for a short time, but crashes when it expires.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 38,
        positionInSet: 9,
        enduranceCost: 0,
        rechargeTime: 360,
        castTime: 2.03,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 45,
            duration: 180,
            description: '+45% defense to all attacks for 180 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 800,
            duration: 180,
            description: '+800% recovery for 180 seconds'
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
    id: 'willpower',
    name: 'Willpower',
    type: 'secondary',
    archetypeId: 'scrapper',
    description: 'Willpower combines resistance and regeneration for a balanced, endurance-efficient defense set. It provides moderate protection against most damage types with strong regeneration.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'willpower_high_pain_tolerance',
        name: 'High Pain Tolerance',
        powersetId: 'willpower',
        description: 'Provides resistance to smashing and lethal damage, and increases your maximum hit points.',
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
            value: 10,
            description: '+10% maximum hit points'
          }
        ],
        allowedEnhancementTypes: ['resistance'],
        maxSlots: 6
      },
      {
        id: 'willpower_mind_over_body',
        name: 'Mind Over Body',
        powersetId: 'willpower',
        description: 'Provides resistance to smashing, lethal, and psionic damage through mental discipline.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 2,
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
            value: 7.5,
            description: '+7.5% resistance to psionic damage'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'willpower_fast_healing',
        name: 'Fast Healing',
        powersetId: 'willpower',
        description: 'Increases your natural regeneration rate.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 4,
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
            description: '+50% regeneration rate'
          }
        ],
        allowedEnhancementTypes: ['heal'],
        maxSlots: 6
      },
      {
        id: 'willpower_indomitable_will',
        name: 'Indomitable Will',
        powersetId: 'willpower',
        description: 'Provides resistance to psionic damage and protection against psionic attacks, sleep, and fear.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 10,
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
            value: 18.75,
            description: '+18.75% resistance to psionic damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            description: 'Protection against sleep, fear, and confuse'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'willpower_rise_to_the_challenge',
        name: 'Rise to the Challenge',
        powersetId: 'willpower',
        description: 'Increases regeneration and provides resistance to toxic damage. Regeneration improves based on nearby enemies.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 16,
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
            value: 50,
            description: 'Base +50% regeneration rate'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            description: 'Additional regeneration per nearby enemy (up to 10 enemies)'
          },
          {
            type: 'buff',
            target: 'self',
            value: 11.25,
            description: '+11.25% resistance to toxic damage'
          }
        ],
        allowedEnhancementTypes: ['heal', 'resistance', 'endurance_reduction', 'to_hit_debuff'],
        maxSlots: 6
      },
      {
        id: 'willpower_quick_recovery',
        name: 'Quick Recovery',
        powersetId: 'willpower',
        description: 'Greatly increases your endurance recovery rate.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 20,
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
            value: 50,
            description: '+50% endurance recovery'
          }
        ],
        allowedEnhancementTypes: ['endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'willpower_heightened_senses',
        name: 'Heightened Senses',
        powersetId: 'willpower',
        description: 'Provides defense to all attack types and increases perception.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 28,
        positionInSet: 7,
        enduranceCost: 0.21,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 5.625,
            description: '+5.625% defense to melee attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 5.625,
            description: '+5.625% defense to ranged attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 5.625,
            description: '+5.625% defense to AoE attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            description: 'Increased perception and protection against confuse'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'willpower_resurgence',
        name: 'Resurgence',
        powersetId: 'willpower',
        description: 'Self resurrection power that restores hit points and endurance when defeated.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 35,
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
        allowedEnhancementTypes: ['recharge', 'heal'],
        maxSlots: 6
      },
      {
        id: 'willpower_strength_of_will',
        name: 'Strength of Will',
        powersetId: 'willpower',
        description: 'Provides substantial resistance to all damage types and protection from most status effects.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 38,
        positionInSet: 9,
        enduranceCost: 0.52,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 15,
            description: '+15% resistance to fire, cold, energy, and negative energy damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            description: 'Protection against disorient, hold, immobilize, knockback, and repel'
          },
          {
            type: 'buff',
            target: 'self',
            value: 50,
            description: '+50% resistance to defense debuffs and slow'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  }
];
