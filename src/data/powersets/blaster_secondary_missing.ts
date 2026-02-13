import type { Powerset } from '../../types';

export const blasterSecondaryMissing: Powerset[] = [
  // =============================================
  // MARTIAL COMBAT
  // =============================================
  {
    id: 'martial_combat',
    name: 'Martial Combat',
    type: 'secondary',
    archetypeId: 'blaster',
    description: 'Martial Combat combines disciplined melee strikes with focused ki energy blasts. This set features smashing and lethal melee attacks alongside ranged ki projectiles, with Build Up to amplify your combat prowess.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'mc_thunder_kick',
        name: 'Thunder Kick',
        powersetId: 'martial_combat',
        description: 'A swift spinning kick that deals moderate smashing damage to a single foe.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 5.2,
        rechargeTime: 4,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 51.4,
            description: 'Moderate smashing damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'mc_storm_kick',
        name: 'Storm Kick',
        powersetId: 'martial_combat',
        description: 'A powerful roundhouse kick that deals moderate smashing and lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 8,
        castTime: 1.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 38.2,
            description: 'Moderate smashing damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 33.4,
            description: 'Moderate lethal damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'mc_build_up',
        name: 'Build Up',
        powersetId: 'martial_combat',
        description: 'Focuses your martial discipline to greatly increase damage and accuracy for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 5.2,
        rechargeTime: 90,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 80,
            duration: 10,
            description: '+80% DMG for 10s'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            duration: 10,
            description: '+20% ToHit for 10s'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'mc_spinning_kick',
        name: 'Spinning Kick',
        powersetId: 'martial_combat',
        description: 'A devastating spinning kick that strikes all nearby foes for moderate smashing damage and has a chance to stun.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 10,
        positionInSet: 4,
        enduranceCost: 11.96,
        rechargeTime: 16,
        castTime: 1.67,
        range: 8,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 56.3,
            description: 'Moderate smashing damage to nearby foes'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 4,
            description: 'Chance to stun nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'mc_ki_push',
        name: 'Ki Push',
        powersetId: 'martial_combat',
        description: 'Projects a focused blast of ki energy at range, dealing high smashing damage and knocking the target back.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 16,
        positionInSet: 5,
        enduranceCost: 11.96,
        rechargeTime: 12,
        castTime: 1.17,
        range: 40,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 82.4,
            description: 'High smashing damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'mc_inner_focus',
        name: 'Inner Focus',
        powersetId: 'martial_combat',
        description: 'Centers your martial discipline, granting increased defense to all attack types and resistance to control effects.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 20,
        positionInSet: 6,
        enduranceCost: 0,
        rechargeTime: 120,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 15.0,
            duration: 60,
            description: 'Self +15% Defense to all attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 10.0,
            duration: 60,
            description: 'Self +Mez Protection (resistance to hold, stun, sleep)'
          }
        ],
        allowedEnhancementTypes: ['endurance_reduction', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'mc_ki_burst',
        name: 'Ki Burst',
        powersetId: 'martial_combat',
        description: 'Releases a burst of ki energy in a cone, dealing high smashing damage to all foes in the area and knocking them down.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 24,
        positionInSet: 7,
        enduranceCost: 14.35,
        rechargeTime: 20,
        castTime: 1.67,
        range: 40,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 75.6,
            description: 'High smashing damage in cone'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'mc_dragons_tail',
        name: 'Dragon\'s Tail',
        powersetId: 'martial_combat',
        description: 'A devastating spinning sweep that strikes all nearby foes with extreme smashing and lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 8,
        enduranceCost: 15.6,
        rechargeTime: 20,
        castTime: 1.83,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 62.5,
            description: 'High smashing damage to nearby foes'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 56.3,
            description: 'High lethal damage to nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'mc_eagles_claw',
        name: 'Eagle\'s Claw',
        powersetId: 'martial_combat',
        description: 'The ultimate martial arts technique. A devastating leaping strike that deals massive smashing and lethal damage, stuns the target, and unleashes a shockwave that damages nearby foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 35,
        positionInSet: 9,
        enduranceCost: 18.72,
        rechargeTime: 120,
        castTime: 2.33,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 118.7,
            description: 'Extreme smashing damage to primary target'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 86.4,
            description: 'High lethal damage to primary target'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 56.3,
            description: 'High smashing damage shockwave to nearby foes'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 8,
            description: 'Stuns primary target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      }
    ]
  },

  // =============================================
  // NINJA TRAINING
  // =============================================
  {
    id: 'ninja_training',
    name: 'Ninja Training',
    type: 'secondary',
    archetypeId: 'blaster',
    description: 'Ninja Training combines lethal melee strikes with stealth, caltrops, and smoke bombs. This set excels at hit-and-run tactics, offering strong single-target melee damage alongside evasion and crowd control utilities.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'nt_shuriken',
        name: 'Shuriken',
        powersetId: 'ninja_training',
        description: 'Hurls a razor-sharp shuriken at a foe, dealing moderate lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 5.72,
        rechargeTime: 4,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 51.4,
            description: 'Moderate lethal damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'nt_ninja_blade',
        name: 'Ninja Blade',
        powersetId: 'ninja_training',
        description: 'A quick slash with a concealed blade that deals moderate lethal damage and has a chance to cause bleeding.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 8,
        castTime: 1.33,
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
            value: 12.4,
            duration: 8.4,
            description: 'Minor lethal damage over time (bleeding)'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'nt_build_up',
        name: 'Build Up',
        powersetId: 'ninja_training',
        description: 'Focuses your ninja discipline to greatly increase damage and accuracy for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 5.2,
        rechargeTime: 90,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 80,
            duration: 10,
            description: '+80% DMG for 10s'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            duration: 10,
            description: '+20% ToHit for 10s'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'nt_caltrops',
        name: 'Caltrops',
        powersetId: 'ninja_training',
        description: 'Scatters a patch of razor-sharp caltrops on the ground that slow and damage foes who walk over them.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 10,
        positionInSet: 4,
        enduranceCost: 10.4,
        rechargeTime: 20,
        castTime: 1.17,
        range: 60,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 3.5,
            duration: 30,
            description: 'Minor lethal damage over time to foes in area'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 70,
            duration: 30,
            description: 'Severely slows movement speed of foes in area'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'slow'],
        maxSlots: 6
      },
      {
        id: 'nt_crescent_strike',
        name: 'Crescent Strike',
        powersetId: 'ninja_training',
        description: 'A powerful crescent-shaped blade slash that deals high lethal damage with a chance to stun the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 16,
        positionInSet: 5,
        enduranceCost: 11.96,
        rechargeTime: 12,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 92.8,
            description: 'High lethal damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 4,
            description: 'Chance to stun target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'nt_smoke_flash',
        name: 'Smoke Flash',
        powersetId: 'ninja_training',
        description: 'Deploys a smoke bomb that grants stealth and increased defense to all attacks. Foes nearby lose accuracy and perception.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 20,
        positionInSet: 6,
        enduranceCost: 0.26,
        rechargeTime: 4,
        castTime: 2.0,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 1,
            description: 'Self stealth (invisibility to enemies at range)'
          },
          {
            type: 'buff',
            target: 'self',
            value: 7.5,
            description: 'Self +7.5% Defense to all attacks'
          }
        ],
        allowedEnhancementTypes: ['endurance_reduction', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'nt_blinding_powder',
        name: 'Blinding Powder',
        powersetId: 'ninja_training',
        description: 'Throws a cloud of blinding powder that placates and reduces accuracy of all foes in a cone, causing them to lose track of you.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 24,
        positionInSet: 7,
        enduranceCost: 13.0,
        rechargeTime: 25,
        castTime: 1.5,
        range: 40,
        maxTargets: 10,
        effects: [
          {
            type: 'debuff',
            target: 'aoe',
            value: 25.0,
            duration: 15,
            description: 'Reduces accuracy of all foes in cone'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 10,
            description: 'Placates foes, causing them to ignore you'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'nt_golden_dragonfly',
        name: 'Golden Dragonfly',
        powersetId: 'ninja_training',
        description: 'A devastating leaping blade strike that deals extreme lethal damage to the target. This signature ninja technique requires precise timing.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 8,
        enduranceCost: 15.6,
        rechargeTime: 20,
        castTime: 2.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 156.2,
            description: 'Extreme lethal damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 20,
            duration: 10,
            description: 'Reduces target defense'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'nt_kuji_in_retsu',
        name: 'Kuji-In Retsu',
        powersetId: 'ninja_training',
        description: 'Channels ancient ninja meditation to unleash devastating ki energy. Deals massive lethal damage to the primary target and high damage to all nearby foes, with a chance to stun.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 35,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 180,
        castTime: 2.67,
        range: 7,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 132.6,
            description: 'Extreme lethal damage to primary target'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 86.4,
            description: 'High lethal damage to all nearby foes'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 8,
            description: 'Stuns all nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      }
    ]
  },

  // =============================================
  // PLANT MANIPULATION
  // =============================================
  {
    id: 'plant_manipulation',
    name: 'Plant Manipulation',
    type: 'secondary',
    archetypeId: 'blaster',
    description: 'Plant Manipulation harnesses the power of nature to attack foes with toxic thorns, entangling vines, and defensive plant barriers. This set combines toxic and smashing damage with immobilization, debuffs, and the powerful Wild Fortress self-buff.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'pm_thorn_burst',
        name: 'Thorn Burst',
        powersetId: 'plant_manipulation',
        description: 'Lashes out with toxic thorns at melee range, dealing moderate toxic damage to a single foe.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 5.72,
        rechargeTime: 4,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'toxic',
            value: 51.4,
            description: 'Moderate toxic damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pm_thorn_slash',
        name: 'Thorn Slash',
        powersetId: 'plant_manipulation',
        description: 'Slashes a foe with razor-sharp thorns, dealing moderate toxic and lethal damage with a chance of additional toxic damage over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 8,
        castTime: 1.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'toxic',
            value: 42.3,
            description: 'Moderate toxic damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 28.6,
            description: 'Moderate lethal damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'toxic',
            value: 8.4,
            duration: 8.4,
            description: 'Minor toxic damage over time'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pm_build_up',
        name: 'Build Up',
        powersetId: 'plant_manipulation',
        description: 'Channels the fury of nature to greatly increase damage and accuracy for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 5.2,
        rechargeTime: 90,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 80,
            duration: 10,
            description: '+80% DMG for 10s'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            duration: 10,
            description: '+20% ToHit for 10s'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pm_entangle',
        name: 'Entangle',
        powersetId: 'plant_manipulation',
        description: 'Summons entangling vines that immobilize a single foe and deal toxic damage over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 10,
        positionInSet: 4,
        enduranceCost: 10.4,
        rechargeTime: 16,
        castTime: 1.17,
        range: 60,
        maxTargets: 1,
        effects: [
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 14.9,
            description: 'Immobilizes target with entangling vines'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'toxic',
            value: 42.3,
            duration: 14.9,
            description: 'Moderate toxic damage over time'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'immobilize', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'pm_thorn_barrage',
        name: 'Thorn Barrage',
        powersetId: 'plant_manipulation',
        description: 'Fires a rapid barrage of toxic thorns at a foe, dealing high toxic and lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 16,
        positionInSet: 5,
        enduranceCost: 11.96,
        rechargeTime: 12,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'toxic',
            value: 52.8,
            description: 'High toxic damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 38.5,
            description: 'High lethal damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pm_wild_fortress',
        name: 'Wild Fortress',
        powersetId: 'plant_manipulation',
        description: 'Surrounds yourself with a fortress of living plants, granting significant resistance to smashing, lethal, and toxic damage, plus defense to all attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 20,
        positionInSet: 6,
        enduranceCost: 0,
        rechargeTime: 180,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'shield',
            target: 'self',
            value: 20.0,
            duration: 90,
            description: 'Self +20% Resistance to Smashing, Lethal, Toxic'
          },
          {
            type: 'buff',
            target: 'self',
            value: 10.0,
            duration: 90,
            description: 'Self +10% Defense to all attacks'
          }
        ],
        allowedEnhancementTypes: ['endurance_reduction', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'pm_vine_lash',
        name: 'Vine Lash',
        powersetId: 'plant_manipulation',
        description: 'Summons massive vines that lash out at all nearby foes, dealing high smashing and toxic damage and immobilizing them.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 24,
        positionInSet: 7,
        enduranceCost: 15.6,
        rechargeTime: 25,
        castTime: 2.0,
        range: 15,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 42.3,
            description: 'High smashing damage to nearby foes'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'toxic',
            value: 38.2,
            description: 'High toxic damage to nearby foes'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 8,
            description: 'Immobilizes all nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'immobilize'],
        maxSlots: 6
      },
      {
        id: 'pm_impale',
        name: 'Impale',
        powersetId: 'plant_manipulation',
        description: 'Summons a massive thorn spike from the ground beneath the target, dealing extreme lethal and toxic damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 8,
        enduranceCost: 14.35,
        rechargeTime: 16,
        castTime: 1.67,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 82.4,
            description: 'Extreme lethal damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'toxic',
            value: 62.56,
            description: 'High toxic damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 11.9,
            description: 'Immobilizes target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'immobilize'],
        maxSlots: 6
      },
      {
        id: 'pm_thorn_eruption',
        name: 'Thorn Eruption',
        powersetId: 'plant_manipulation',
        description: 'Causes a massive eruption of toxic thorns from the earth, dealing extreme smashing and toxic damage to all foes in a large area. Foes are knocked back and immobilized.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 35,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 180,
        castTime: 3.0,
        range: 25,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 105.8,
            description: 'Extreme smashing damage to all foes in area'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'toxic',
            value: 86.4,
            description: 'Extreme toxic damage to all foes in area'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 12,
            description: 'Immobilizes all foes in area'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'immobilize', 'knockback'],
        maxSlots: 6
      }
    ]
  },

  // =============================================
  // TACTICAL ARROW
  // =============================================
  {
    id: 'tactical_arrow',
    name: 'Tactical Arrow',
    type: 'secondary',
    archetypeId: 'blaster',
    description: 'Tactical Arrow uses specialized utility arrows to control the battlefield. This set features oil slick arrows, EMP arrows, glue arrows, and flash arrows, providing exceptional crowd control and debuffing alongside lethal arrow attacks.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'ta_trick_shot',
        name: 'Trick Shot',
        powersetId: 'tactical_arrow',
        description: 'A quick trick shot that ricochets an arrow into a foe at close range, dealing moderate lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 5.72,
        rechargeTime: 4,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 51.4,
            description: 'Moderate lethal damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'ta_glue_arrow',
        name: 'Glue Arrow',
        powersetId: 'tactical_arrow',
        description: 'Fires an arrow that splatters glue on impact, immobilizing the target and drastically slowing their movement and recharge.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 2,
        enduranceCost: 7.8,
        rechargeTime: 8,
        castTime: 1.17,
        range: 60,
        maxTargets: 1,
        effects: [
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 14.9,
            description: 'Immobilizes target'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 60,
            duration: 14.9,
            description: 'Drastically slows target movement and recharge'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'endurance_reduction', 'range', 'immobilize', 'slow'],
        maxSlots: 6
      },
      {
        id: 'ta_build_up',
        name: 'Build Up',
        powersetId: 'tactical_arrow',
        description: 'Focuses your tactical precision to greatly increase damage and accuracy for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 5.2,
        rechargeTime: 90,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 80,
            duration: 10,
            description: '+80% DMG for 10s'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            duration: 10,
            description: '+20% ToHit for 10s'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'ta_flash_arrow',
        name: 'Flash Arrow',
        powersetId: 'tactical_arrow',
        description: 'Fires a brilliant flash arrow that detonates in the midst of a group of foes, blinding and disorienting all enemies in the area.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 10,
        positionInSet: 4,
        enduranceCost: 10.4,
        rechargeTime: 20,
        castTime: 1.5,
        range: 80,
        maxTargets: 16,
        effects: [
          {
            type: 'debuff',
            target: 'aoe',
            value: 25.0,
            duration: 20,
            description: 'Reduces accuracy of all foes in area'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 6,
            description: 'Stuns foes in area'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'endurance_reduction', 'range', 'stun'],
        maxSlots: 6
      },
      {
        id: 'ta_poison_arrow',
        name: 'Poison Arrow',
        powersetId: 'tactical_arrow',
        description: 'Fires a poison-tipped arrow that deals moderate lethal damage and applies a toxic debuff that reduces the target\'s damage and resistance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 16,
        positionInSet: 5,
        enduranceCost: 11.96,
        rechargeTime: 12,
        castTime: 1.17,
        range: 60,
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
            damageType: 'toxic',
            value: 18.5,
            duration: 10,
            description: 'Moderate toxic damage over time'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 20,
            duration: 20,
            description: 'Reduces target damage and resistance'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'ta_agility',
        name: 'Agility',
        powersetId: 'tactical_arrow',
        description: 'Your tactical training grants heightened reflexes, providing increased defense to all attacks and improved movement speed.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 20,
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
            value: 10.0,
            description: 'Self +10% Defense to all attacks'
          },
          {
            type: 'movement',
            target: 'self',
            value: 30.0,
            description: 'Self +30% Run Speed'
          }
        ],
        allowedEnhancementTypes: ['endurance_reduction', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'ta_oil_slick_arrow',
        name: 'Oil Slick Arrow',
        powersetId: 'tactical_arrow',
        description: 'Fires an arrow that creates a large oil slick on the ground. Foes in the area slip and fall, and the slick can be ignited for massive fire damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 24,
        positionInSet: 7,
        enduranceCost: 15.6,
        rechargeTime: 30,
        castTime: 1.67,
        range: 60,
        maxTargets: 16,
        effects: [
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 30,
            description: 'Creates oil slick that knocks down foes'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 50,
            duration: 30,
            description: 'Slows movement of all foes in area'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'ta_emp_arrow',
        name: 'EMP Arrow',
        powersetId: 'tactical_arrow',
        description: 'Fires an electromagnetic pulse arrow that detonates in a targeted area, draining endurance from all foes and holding them briefly.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 8,
        enduranceCost: 16.12,
        rechargeTime: 25,
        castTime: 1.5,
        range: 80,
        maxTargets: 16,
        effects: [
          {
            type: 'debuff',
            target: 'aoe',
            value: 35.0,
            description: 'Drains endurance from all foes in area'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 8,
            description: 'Holds all foes in area'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'endurance_reduction', 'range', 'hold', 'endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'ta_overload',
        name: 'Overload',
        powersetId: 'tactical_arrow',
        description: 'Deploys all remaining tactical resources in an overwhelming barrage. Grants massive defense and resistance buffs while firing a volley of explosive arrows at all nearby foes for extreme lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 35,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 300,
        castTime: 3.0,
        range: 25,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 187.5,
            description: 'Extreme lethal damage to all nearby foes'
          },
          {
            type: 'buff',
            target: 'self',
            value: 30.0,
            duration: 30,
            description: 'Self +30% Defense to all attacks'
          },
          {
            type: 'shield',
            target: 'self',
            value: 25.0,
            duration: 30,
            description: 'Self +25% Resistance to all damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },

  // =============================================
  // ATOMIC MANIPULATION
  // =============================================
  {
    id: 'atomic_manipulation',
    name: 'Atomic Manipulation',
    type: 'secondary',
    archetypeId: 'blaster',
    description: 'Atomic Manipulation harnesses nuclear energy for devastating melee attacks and radiation debuffs. This set features energy and smashing melee strikes, radiation contamination effects, the powerful Positronic Fist, and the devastating Atom Smasher.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'am_electron_shackles',
        name: 'Electron Shackles',
        powersetId: 'atomic_manipulation',
        description: 'Strikes a foe with a burst of atomic energy at melee range, dealing moderate energy damage and reducing their defense.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 5.72,
        rechargeTime: 4,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 42.7,
            description: 'Moderate energy damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 5.0,
            duration: 10,
            description: 'Reduces target defense'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'am_neutron_bomb',
        name: 'Neutron Bomb',
        powersetId: 'atomic_manipulation',
        description: 'A focused melee strike infused with neutron radiation that deals moderate energy and smashing damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 10,
        castTime: 1.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 38.5,
            description: 'Moderate energy damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 33.4,
            description: 'Moderate smashing damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 10.0,
            duration: 15,
            description: 'Irradiates target, reducing defense'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'am_build_up',
        name: 'Build Up',
        powersetId: 'atomic_manipulation',
        description: 'Channels atomic energy to greatly increase damage and accuracy for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 5.2,
        rechargeTime: 90,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 80,
            duration: 10,
            description: '+80% DMG for 10s'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            duration: 10,
            description: '+20% ToHit for 10s'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'am_contamination',
        name: 'Contamination',
        powersetId: 'atomic_manipulation',
        description: 'Releases a burst of atomic radiation around you, dealing moderate energy damage to all nearby foes and debuffing their defense and damage resistance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 10,
        positionInSet: 4,
        enduranceCost: 13.0,
        rechargeTime: 20,
        castTime: 1.67,
        range: 15,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 38.2,
            description: 'Moderate energy damage to nearby foes'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 15.0,
            duration: 20,
            description: 'Reduces defense and damage resistance of nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'am_positronic_fist',
        name: 'Positronic Fist',
        powersetId: 'atomic_manipulation',
        description: 'Channels the power of positrons into a devastating melee strike that deals high energy and smashing damage with a chance to stun.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 16,
        positionInSet: 5,
        enduranceCost: 11.96,
        rechargeTime: 12,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 56.3,
            description: 'High energy damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 38.2,
            description: 'High smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 5,
            description: 'Chance to stun target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'am_beta_decay',
        name: 'Beta Decay',
        powersetId: 'atomic_manipulation',
        description: 'Surrounds yourself with a field of beta radiation that reduces the damage and accuracy of all nearby foes while boosting your own regeneration.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 20,
        positionInSet: 6,
        enduranceCost: 0.26,
        rechargeTime: 4,
        castTime: 1.17,
        range: 15,
        maxTargets: 10,
        effects: [
          {
            type: 'debuff',
            target: 'aoe',
            value: 15.0,
            description: 'Reduces damage and accuracy of nearby foes'
          },
          {
            type: 'heal',
            target: 'self',
            value: 5.0,
            description: 'Self regeneration per foe affected'
          }
        ],
        allowedEnhancementTypes: ['endurance_reduction', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'am_radioactive_cloud',
        name: 'Radioactive Cloud',
        powersetId: 'atomic_manipulation',
        description: 'Creates a cloud of intense radiation in a targeted area that deals energy damage over time and heavily debuffs the defense of all foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 24,
        positionInSet: 7,
        enduranceCost: 15.6,
        rechargeTime: 25,
        castTime: 2.03,
        range: 60,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 56.3,
            duration: 15,
            description: 'Moderate energy damage over time in area'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 25.0,
            duration: 15,
            description: 'Heavily reduces defense of all foes in area'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'am_nuclear_blast',
        name: 'Nuclear Blast',
        powersetId: 'atomic_manipulation',
        description: 'Unleashes a concentrated nuclear strike at melee range, dealing extreme energy and smashing damage with a devastating radiation debuff.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 8,
        enduranceCost: 16.12,
        rechargeTime: 20,
        castTime: 2.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 92.8,
            description: 'Extreme energy damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 62.56,
            description: 'High smashing damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 30.0,
            duration: 20,
            description: 'Severely reduces target defense and resistance'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'am_atom_smasher',
        name: 'Atom Smasher',
        powersetId: 'atomic_manipulation',
        description: 'Splits atoms in a devastating point-blank explosion that deals massive energy and smashing damage to all nearby foes. The atomic chain reaction irradiates all targets, severely reducing their defense and resistance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 35,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 180,
        castTime: 3.0,
        range: 20,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 118.7,
            description: 'Massive energy damage to all nearby foes'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 86.4,
            description: 'Extreme smashing damage to all nearby foes'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 35.0,
            duration: 30,
            description: 'Severely reduces defense and resistance of all targets'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'defense_debuff'],
        maxSlots: 6
      }
    ]
  },

  // =============================================
  // TEMPORAL MANIPULATION
  // =============================================
  {
    id: 'temporal_manipulation',
    name: 'Temporal Manipulation',
    type: 'secondary',
    archetypeId: 'blaster',
    description: 'Temporal Manipulation bends time itself to deliver devastating melee attacks and powerful temporal effects. This set features smashing and energy damage combined with time-slowing debuffs, Time Wall protection, Chronos buffs, and a powerful time stop hold.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'tm_time_strike',
        name: 'Time Strike',
        powersetId: 'temporal_manipulation',
        description: 'Strikes a foe with a temporally-charged melee attack, dealing moderate smashing damage and briefly slowing their recharge rate.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 5.72,
        rechargeTime: 4,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 42.7,
            description: 'Moderate smashing damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 20,
            duration: 8,
            description: 'Slows target recharge rate'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'slow'],
        maxSlots: 6
      },
      {
        id: 'tm_temporal_lunge',
        name: 'Temporal Lunge',
        powersetId: 'temporal_manipulation',
        description: 'A powerful time-displaced melee strike that deals moderate smashing and energy damage. The temporal distortion slows the target\'s movement and recharge.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 8,
        castTime: 1.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 38.2,
            description: 'Moderate smashing damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 33.4,
            description: 'Moderate energy damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 30,
            duration: 10,
            description: 'Slows target movement and recharge'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'slow'],
        maxSlots: 6
      },
      {
        id: 'tm_build_up',
        name: 'Build Up',
        powersetId: 'temporal_manipulation',
        description: 'Accelerates your personal timeline to greatly increase damage and accuracy for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 5.2,
        rechargeTime: 90,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 80,
            duration: 10,
            description: '+80% DMG for 10s'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            duration: 10,
            description: '+20% ToHit for 10s'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'tm_time_slow',
        name: 'Time Slow',
        powersetId: 'temporal_manipulation',
        description: 'Drastically slows the personal timeline of all nearby foes, reducing their movement speed, recharge rate, and attack speed.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 10,
        positionInSet: 4,
        enduranceCost: 11.96,
        rechargeTime: 20,
        castTime: 1.67,
        range: 15,
        maxTargets: 10,
        effects: [
          {
            type: 'debuff',
            target: 'aoe',
            value: 50,
            duration: 20,
            description: 'Drastically slows movement, recharge, and attack speed of nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'endurance_reduction', 'slow'],
        maxSlots: 6
      },
      {
        id: 'tm_temporal_strike',
        name: 'Temporal Strike',
        powersetId: 'temporal_manipulation',
        description: 'A devastating time-shifted punch that deals high smashing and energy damage. The temporal distortion has a chance to disorient the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 16,
        positionInSet: 5,
        enduranceCost: 11.96,
        rechargeTime: 12,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 52.8,
            description: 'High smashing damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 38.5,
            description: 'High energy damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 5,
            description: 'Chance to stun target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'tm_time_wall',
        name: 'Time Wall',
        powersetId: 'temporal_manipulation',
        description: 'Creates a temporal barrier around yourself that phases incoming attacks, granting significant defense to all attack types and resistance to control effects.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 20,
        positionInSet: 6,
        enduranceCost: 0,
        rechargeTime: 180,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 20.0,
            duration: 60,
            description: 'Self +20% Defense to all attacks'
          },
          {
            type: 'buff',
            target: 'self',
            value: 10.0,
            duration: 60,
            description: 'Self +Mez Protection (resistance to hold, stun, sleep, confuse)'
          }
        ],
        allowedEnhancementTypes: ['endurance_reduction', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'tm_chronos',
        name: 'Chronos',
        powersetId: 'temporal_manipulation',
        description: 'Accelerates your personal timeline, greatly increasing your recharge rate and movement speed for a duration.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 24,
        positionInSet: 7,
        enduranceCost: 13.0,
        rechargeTime: 30,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 75.0,
            duration: 30,
            description: 'Self +75% Recharge Rate'
          },
          {
            type: 'movement',
            target: 'self',
            value: 50.0,
            duration: 30,
            description: 'Self +50% Movement Speed'
          }
        ],
        allowedEnhancementTypes: ['endurance_reduction', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'tm_temporal_cage',
        name: 'Temporal Cage',
        powersetId: 'temporal_manipulation',
        description: 'Freezes a foe in a bubble of stopped time, holding them completely helpless. The temporal freeze deals moderate energy damage over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 8,
        enduranceCost: 14.35,
        rechargeTime: 20,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 17.88,
            description: 'Holds target frozen in time'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 32.1,
            duration: 17.88,
            description: 'Moderate energy damage over time while held'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'hold'],
        maxSlots: 6
      },
      {
        id: 'tm_time_stop',
        name: 'Time Stop',
        powersetId: 'temporal_manipulation',
        description: 'Unleashes a massive temporal distortion that stops time for all nearby foes. Deals extreme smashing and energy damage while creating a time fracture that heavily debuffs all targets.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 35,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 180,
        castTime: 3.0,
        range: 20,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 92.8,
            description: 'Extreme smashing damage to all nearby foes'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 86.4,
            description: 'Extreme energy damage to all nearby foes'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 10,
            description: 'Holds all nearby foes frozen in time'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 60,
            duration: 20,
            description: 'Drastically slows recharge and movement of all targets'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'hold', 'slow'],
        maxSlots: 6
      }
    ]
  }
];
