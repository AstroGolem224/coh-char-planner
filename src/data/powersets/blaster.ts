import type { Powerset } from '../../types';

export const blasterPowersets: Powerset[] = [
  {
    id: 'fire_blast',
    name: 'Fire Blast',
    type: 'primary',
    archetypeId: 'blaster',
    description: 'Fire Blast is a long-range offensive powerset. Fire Blast powers deal good damage and have moderate recharge times. Many of the powers also deal damage over time.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'fire_blast_flare',
        name: 'Flare',
        powersetId: 'fire_blast',
        description: 'A quick, short-range attack that deals minor fire damage. Flare can potentially set the target ablaze.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 2,
        castTime: 1.0,
        range: 40,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 36.15,
            description: 'Minor fire damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 3.01,
            duration: 2.1,
            description: 'Minor fire damage over time'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'fire_blast_fire_blast',
        name: 'Fire Blast',
        powersetId: 'fire_blast',
        description: 'Sends a blast of fire at a targeted foe that deals moderate damage and may set the target ablaze.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 8,
        castTime: 1.17,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 62.56,
            description: 'Moderate fire damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 5.21,
            duration: 2.1,
            description: 'Minor fire damage over time'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'fire_blast_fire_ball',
        name: 'Fire Ball',
        powersetId: 'fire_blast',
        description: 'Hurls an exploding fireball that consumes a targeted foe and all nearby enemies. Anyone caught within the blast radius is burned and may catch on fire.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 15.18,
        rechargeTime: 16,
        castTime: 1.0,
        range: 80,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 51.6,
            description: 'Moderate fire damage to target and nearby enemies'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 4.3,
            duration: 2.1,
            description: 'Minor fire damage over time'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'fire_blast_rain_of_fire',
        name: 'Rain of Fire',
        powersetId: 'fire_blast',
        description: 'Summons a rain of fire over a targeted location, burning foes within a large area. Deals moderate damage over time to all affected targets.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 15.6,
        rechargeTime: 60,
        castTime: 2.03,
        range: 60,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 92.5,
            duration: 15,
            description: 'Moderate fire damage over time in targeted area'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'fire_blast_blaze',
        name: 'Blaze',
        powersetId: 'fire_blast',
        description: 'A short-range but very devastating attack. Blaze deals superior fire damage to its target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 14.35,
        rechargeTime: 10,
        castTime: 1.0,
        range: 20,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 132.6,
            description: 'Superior fire damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'fire_blast_fire_breath',
        name: 'Fire Breath',
        powersetId: 'fire_blast',
        description: 'Breathes a cone of fire that burns all foes within its narrow arc. Deals good damage over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 15.18,
        rechargeTime: 16,
        castTime: 2.67,
        range: 40,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 79.27,
            duration: 2.8,
            description: 'High fire damage over time in cone'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'fire_blast_blazing_bolt',
        name: 'Blazing Bolt',
        powersetId: 'fire_blast',
        description: 'A slow, but devastating attack. Blazing Bolt requires time to charge up, but deals extreme fire damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 14.35,
        rechargeTime: 12,
        castTime: 4.33,
        range: 100,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 164.6,
            description: 'Extreme fire damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'fire_blast_aim',
        name: 'Aim',
        powersetId: 'fire_blast',
        description: 'Greatly increases accuracy and damage for a short time. Slightly increases range of all attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 5.2,
        rechargeTime: 90,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 42.5,
            duration: 10,
            description: 'Self +42.5% To Hit'
          },
          {
            type: 'buff',
            target: 'self',
            value: 62.5,
            duration: 10,
            description: 'Self +62.5% Damage'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'fire_blast_inferno',
        name: 'Inferno',
        powersetId: 'fire_blast',
        description: 'Unleashes a massive fiery explosion. Inferno deals massive damage to all nearby foes, although nearby allies may be burned as well.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 32,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 360,
        castTime: 3.0,
        range: 25,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 226.3,
            description: 'Extreme fire damage to all nearby foes'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 18.86,
            duration: 2.1,
            description: 'Extreme fire damage over time'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'ice_blast',
    name: 'Ice Blast',
    type: 'primary',
    archetypeId: 'blaster',
    description: 'Ice Blast powers deal good damage and have additional slowing and hold effects. The slowing effects can reduce enemy movement speed and recharge rates.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'ice_blast_ice_bolt',
        name: 'Ice Bolt',
        powersetId: 'ice_blast',
        description: 'Sends a bolt of ice at a targeted foe that deals minor cold damage and slows the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 4,
        castTime: 1.0,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'cold',
            value: 41.71,
            description: 'Minor cold damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 30,
            duration: 4,
            description: 'Slows target movement and recharge'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'slow'],
        maxSlots: 6
      },
      {
        id: 'ice_blast_ice_blast',
        name: 'Ice Blast',
        powersetId: 'ice_blast',
        description: 'Sends a blast of ice at a targeted foe that deals moderate cold damage and slows the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 8,
        castTime: 1.17,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'cold',
            value: 72.2,
            description: 'Moderate cold damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 30,
            duration: 4,
            description: 'Slows target movement and recharge'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'slow'],
        maxSlots: 6
      },
      {
        id: 'ice_blast_frost_breath',
        name: 'Frost Breath',
        powersetId: 'ice_blast',
        description: 'Unleashes a cone of frosty breath that deals good cold damage over time and slows the attack rate of all affected targets.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 15.18,
        rechargeTime: 16,
        castTime: 2.67,
        range: 40,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'cold',
            value: 91.67,
            duration: 2.8,
            description: 'High cold damage over time in cone'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 30,
            duration: 8,
            description: 'Slows targets movement and recharge'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'slow'],
        maxSlots: 6
      },
      {
        id: 'ice_blast_ice_storm',
        name: 'Ice Storm',
        powersetId: 'ice_blast',
        description: 'Summons a storm of ice over a targeted location. Ice Storm deals moderate cold damage over time and slows all affected targets.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 15.6,
        rechargeTime: 60,
        castTime: 2.03,
        range: 60,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'cold',
            value: 68.5,
            duration: 15,
            description: 'Moderate cold damage over time in targeted area'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 24.0,
            duration: 15,
            description: 'Minor lethal damage over time from ice shards'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 30,
            duration: 15,
            description: 'Slows targets movement and recharge'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'slow'],
        maxSlots: 6
      },
      {
        id: 'ice_blast_freeze_ray',
        name: 'Freeze Ray',
        powersetId: 'ice_blast',
        description: 'Encases a single foe in a block of ice, holding them in place. Deals minor cold damage over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 10.4,
        rechargeTime: 10,
        castTime: 1.2,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 12,
            description: 'Holds target in place'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'cold',
            value: 15.5,
            duration: 12,
            description: 'Minor cold damage over time'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'hold', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'ice_blast_bitter_ice_blast',
        name: 'Bitter Ice Blast',
        powersetId: 'ice_blast',
        description: 'A slower yet more powerful version of Ice Blast. Deals superior cold damage and slows the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 14.35,
        rechargeTime: 12,
        castTime: 2.5,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'cold',
            value: 126.5,
            description: 'Superior cold damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 40,
            duration: 10,
            description: 'Significantly slows target movement and recharge'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'slow'],
        maxSlots: 6
      },
      {
        id: 'ice_blast_aim',
        name: 'Aim',
        powersetId: 'ice_blast',
        description: 'Greatly increases accuracy and damage for a short time. Slightly increases range of all attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 5.2,
        rechargeTime: 90,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 42.5,
            duration: 10,
            description: 'Self +42.5% To Hit'
          },
          {
            type: 'buff',
            target: 'self',
            value: 62.5,
            duration: 10,
            description: 'Self +62.5% Damage'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'ice_blast_bitter_freeze_ray',
        name: 'Bitter Freeze Ray',
        powersetId: 'ice_blast',
        description: 'A more powerful version of Freeze Ray. Encases a single foe in a block of ice, holding them in place. Deals moderate cold damage over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 15.6,
        rechargeTime: 20,
        castTime: 1.87,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 17.88,
            description: 'Holds target in place'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'cold',
            value: 28.5,
            duration: 17.88,
            description: 'Moderate cold damage over time'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'hold', 'recharge', 'endurance_reduction', 'range', 'damage'],
        maxSlots: 6
      },
      {
        id: 'ice_blast_blizzard',
        name: 'Blizzard',
        powersetId: 'ice_blast',
        description: 'Summons a massive blizzard over a targeted location. Blizzard deals extreme cold damage over time to all foes in the area and significantly slows them.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 32,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 360,
        castTime: 2.03,
        range: 60,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'cold',
            value: 187.5,
            duration: 15,
            description: 'Extreme cold damage over time in targeted area'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 62.5,
            duration: 15,
            description: 'High lethal damage over time from ice shards'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 50,
            duration: 15,
            description: 'Significantly slows targets movement and recharge'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'slow'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'fire_manipulation',
    name: 'Fire Manipulation',
    type: 'secondary',
    archetypeId: 'blaster',
    description: 'Fire Manipulation provides strong melee attacks and utility powers. This set focuses on close-range damage and area control with burning patches.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'fire_manipulation_ring_of_fire',
        name: 'Ring of Fire',
        powersetId: 'fire_manipulation',
        description: 'Immobilizes a single foe in a ring of fire, preventing movement while dealing fire damage over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 7.8,
        rechargeTime: 4,
        castTime: 1.17,
        range: 70,
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
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 50.42,
            duration: 14.9,
            description: 'Moderate fire damage over time'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'immobilize', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'fire_manipulation_fire_sword',
        name: 'Fire Sword',
        powersetId: 'fire_manipulation',
        description: 'Summons a sword of pure fire and slashes a foe. Deals high fire and lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 8,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'fire',
            value: 45.0,
            description: 'High fire damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 45.0,
            description: 'High lethal damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'fire_manipulation_combustion',
        name: 'Combustion',
        powersetId: 'fire_manipulation',
        description: 'Ignites all foes around you, dealing fire damage over time to all nearby enemies.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 13.0,
        rechargeTime: 15,
        castTime: 2.0,
        range: 8,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 75.6,
            duration: 2.1,
            description: 'High fire damage over time to nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'fire_manipulation_consume',
        name: 'Consume',
        powersetId: 'fire_manipulation',
        description: 'Drains the essence of all nearby foes to restore your health and endurance. The more foes affected, the more you recover.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 10,
        positionInSet: 4,
        enduranceCost: 15.6,
        rechargeTime: 180,
        castTime: 2.03,
        range: 10,
        maxTargets: 10,
        effects: [
          {
            type: 'heal',
            target: 'self',
            value: 15.0,
            description: 'Self heal per target hit'
          },
          {
            type: 'buff',
            target: 'self',
            value: 10.0,
            description: 'Self endurance recovery per target hit'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'heal', 'endurance_modification', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'fire_manipulation_fire_sword_circle',
        name: 'Fire Sword Circle',
        powersetId: 'fire_manipulation',
        description: 'Swings a fiery sword in a wide arc, hitting multiple foes in melee range. Deals extreme fire and lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 16,
        positionInSet: 5,
        enduranceCost: 18.5,
        rechargeTime: 20,
        castTime: 2.0,
        range: 10,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 56.6,
            description: 'Extreme fire damage'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 56.6,
            description: 'Extreme lethal damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'fire_manipulation_build_up',
        name: 'Build Up',
        powersetId: 'fire_manipulation',
        description: 'Greatly increases damage and accuracy for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 20,
        positionInSet: 6,
        enduranceCost: 5.2,
        rechargeTime: 90,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 80.0,
            duration: 10,
            description: 'Self +80% Damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20.0,
            duration: 10,
            description: 'Self +20% To Hit'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'fire_manipulation_blazing_aura',
        name: 'Blazing Aura',
        powersetId: 'fire_manipulation',
        description: 'While active, you emit an aura of fire that continuously damages all nearby foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 28,
        positionInSet: 7,
        enduranceCost: 0.52,
        rechargeTime: 10,
        castTime: 1.17,
        range: 8,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 7.15,
            description: 'Minor fire damage to nearby foes every 2 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'fire_manipulation_hot_feet',
        name: 'Hot Feet',
        powersetId: 'fire_manipulation',
        description: 'Superheats the ground beneath your feet, causing all nearby foes to flee in terror while taking damage over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 35,
        positionInSet: 8,
        enduranceCost: 0.78,
        rechargeTime: 10,
        castTime: 1.17,
        range: 15,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 5.4,
            description: 'Minor fire damage to nearby foes every 2 seconds'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            description: 'Causes foes to flee in terror'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 50,
            description: 'Significantly slows movement speed'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'endurance_reduction', 'slow', 'fear'],
        maxSlots: 6
      },
      {
        id: 'fire_manipulation_rise_of_the_phoenix',
        name: 'Rise of the Phoenix',
        powersetId: 'fire_manipulation',
        description: 'When you are defeated, you can self-resurrect in a massive burst of flame that deals extreme fire damage to all nearby foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 38,
        positionInSet: 9,
        enduranceCost: 0,
        rechargeTime: 300,
        castTime: 3.0,
        range: 25,
        maxTargets: 16,
        effects: [
          {
            type: 'heal',
            target: 'self',
            value: 100,
            description: 'Self resurrect with full health'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 187.5,
            description: 'Extreme fire damage to all nearby foes'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 8,
            description: 'Stuns all nearby foes'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'damage', 'accuracy', 'stun'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'ice_manipulation',
    name: 'Ice Manipulation',
    type: 'secondary',
    archetypeId: 'blaster',
    description: 'Ice Manipulation provides melee attacks with slowing effects, defensive abilities, and control powers. This set excels at slowing and controlling enemies while providing some survivability.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'ice_manipulation_chilblain',
        name: 'Chilblain',
        powersetId: 'ice_manipulation',
        description: 'Immobilizes a single foe in a block of ice, preventing movement while dealing cold damage over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 7.8,
        rechargeTime: 4,
        castTime: 1.17,
        range: 70,
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
            type: 'damage',
            target: 'enemy',
            damageType: 'cold',
            value: 50.42,
            duration: 14.9,
            description: 'Moderate cold damage over time'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 30,
            duration: 14.9,
            description: 'Slows target recharge'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'immobilize', 'damage', 'recharge', 'endurance_reduction', 'range', 'slow'],
        maxSlots: 6
      },
      {
        id: 'ice_manipulation_ice_sword',
        name: 'Ice Sword',
        powersetId: 'ice_manipulation',
        description: 'Summons a sword of crystalline ice and slashes a foe. Deals high cold and lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 6,
        castTime: 1.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'cold',
            value: 40.0,
            description: 'High cold damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 40.0,
            description: 'High lethal damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 30,
            duration: 6,
            description: 'Slows target movement and recharge'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'slow'],
        maxSlots: 6
      },
      {
        id: 'ice_manipulation_frozen_fists',
        name: 'Frozen Fists',
        powersetId: 'ice_manipulation',
        description: 'A quick melee attack that coats your fists in ice. Deals moderate smashing and cold damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 5.2,
        rechargeTime: 3,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 31.05,
            description: 'Moderate smashing damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'cold',
            value: 27.82,
            description: 'Moderate cold damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 20,
            duration: 4,
            description: 'Slows target recharge'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'slow'],
        maxSlots: 6
      },
      {
        id: 'ice_manipulation_build_up',
        name: 'Build Up',
        powersetId: 'ice_manipulation',
        description: 'Greatly increases damage and accuracy for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 10,
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
            value: 80.0,
            duration: 10,
            description: 'Self +80% Damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20.0,
            duration: 10,
            description: 'Self +20% To Hit'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'ice_manipulation_shiver',
        name: 'Shiver',
        powersetId: 'ice_manipulation',
        description: 'Emits a cone of ice that dramatically slows all affected foes in the area.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 16,
        positionInSet: 5,
        enduranceCost: 13.0,
        rechargeTime: 15,
        castTime: 1.17,
        range: 50,
        maxTargets: 10,
        effects: [
          {
            type: 'debuff',
            target: 'aoe',
            value: 60,
            duration: 30,
            description: 'Significantly slows target movement and recharge in cone'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'slow', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'ice_manipulation_ice_patch',
        name: 'Ice Patch',
        powersetId: 'ice_manipulation',
        description: 'Creates a patch of ice on the ground. Any foes that walk on it will slip and fall.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 20,
        positionInSet: 6,
        enduranceCost: 7.8,
        rechargeTime: 20,
        castTime: 1.17,
        range: 60,
        maxTargets: 16,
        effects: [
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 30,
            description: 'Creates slippery ice patch that knocks down foes'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'ice_manipulation_frozen_armor',
        name: 'Frozen Armor',
        powersetId: 'ice_manipulation',
        description: 'Encases yourself in ice, granting resistance to smashing, lethal, and cold damage, plus defense against all attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 28,
        positionInSet: 7,
        enduranceCost: 0.21,
        rechargeTime: 3,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'shield',
            target: 'self',
            value: 15.0,
            description: 'Self +15% Resistance to Smashing, Lethal, Cold'
          },
          {
            type: 'buff',
            target: 'self',
            value: 7.5,
            description: 'Self +7.5% Defense to all'
          }
        ],
        allowedEnhancementTypes: ['endurance_reduction', 'defense_buff', 'resistance'],
        maxSlots: 6
      },
      {
        id: 'ice_manipulation_icicles',
        name: 'Icicles',
        powersetId: 'ice_manipulation',
        description: 'While active, you emit sharp icicles that continuously damage all nearby foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 35,
        positionInSet: 8,
        enduranceCost: 0.52,
        rechargeTime: 10,
        castTime: 1.17,
        range: 8,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 6.85,
            description: 'Minor lethal damage to nearby foes every 2 seconds'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 10,
            description: 'Slows target recharge'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'endurance_reduction', 'slow'],
        maxSlots: 6
      },
      {
        id: 'ice_manipulation_bitter_freeze_ray',
        name: 'Bitter Freeze Ray',
        powersetId: 'ice_manipulation',
        description: 'Encases a single foe in a massive block of ice, holding them in place. Deals moderate cold damage over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 38,
        positionInSet: 9,
        enduranceCost: 15.6,
        rechargeTime: 20,
        castTime: 1.87,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 17.88,
            description: 'Holds target in place'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'cold',
            value: 28.5,
            duration: 17.88,
            description: 'Moderate cold damage over time'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'hold', 'recharge', 'endurance_reduction', 'range', 'damage'],
        maxSlots: 6
      }
    ]
  }
];
