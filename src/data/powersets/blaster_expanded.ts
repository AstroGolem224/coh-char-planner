import type { Powerset } from '../../types';

export const blasterExpandedPowersets: Powerset[] = [
  // =============================================
  // PRIMARY POWERSETS
  // =============================================
  {
    id: 'energy_blast_blaster',
    name: 'Energy Blast',
    archetypeId: 'blaster',
    type: 'primary',
    description: 'Energy Blast powers deal moderate energy damage and have strong knockback effects. This set can keep enemies at bay while dealing solid damage at range.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'energy_blast_blaster_power_bolt',
        name: 'Power Bolt',
        powersetId: 'energy_blast_blaster',
        description: 'A quick, short-range bolt of energy that deals minor energy damage. Has a small chance to knock the target back.',
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
            damageType: 'energy',
            value: 40.95,
            description: 'Minor energy damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'energy_blast_blaster_power_blast',
        name: 'Power Blast',
        powersetId: 'energy_blast_blaster',
        description: 'Sends a focused blast of energy at a targeted foe, dealing moderate energy damage with a chance to knock the target back.',
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
            damageType: 'energy',
            value: 62.56,
            description: 'Moderate energy damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'energy_blast_blaster_energy_torrent',
        name: 'Energy Torrent',
        powersetId: 'energy_blast_blaster',
        description: 'Releases a sweeping cone of energy that damages and knocks back all foes caught in the area.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 12.74,
        rechargeTime: 12,
        castTime: 2.07,
        range: 40,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 51.6,
            description: 'Moderate energy damage in cone'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'energy_blast_blaster_power_burst',
        name: 'Power Burst',
        powersetId: 'energy_blast_blaster',
        description: 'A devastating short-range energy burst that deals superior damage with a high chance to knock the target back.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 14.35,
        rechargeTime: 10,
        castTime: 1.67,
        range: 20,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 100.32,
            description: 'Superior energy damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'energy_blast_blaster_sniper_blast',
        name: 'Sniper Blast',
        powersetId: 'energy_blast_blaster',
        description: 'A long-range sniper attack that requires time to charge but deals extreme energy damage to a single target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 14.35,
        rechargeTime: 12,
        castTime: 4.33,
        range: 150,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 164.6,
            description: 'Extreme energy damage at long range'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'energy_blast_blaster_aim',
        name: 'Aim',
        powersetId: 'energy_blast_blaster',
        description: 'Greatly increases accuracy and damage for a short time. Slightly increases range of all attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
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
        id: 'energy_blast_blaster_explosive_blast',
        name: 'Explosive Blast',
        powersetId: 'energy_blast_blaster',
        description: 'Launches an explosive ball of energy that detonates on impact, dealing high energy damage to all foes in the area and knocking them back.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 15.18,
        rechargeTime: 16,
        castTime: 1.67,
        range: 80,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 68.5,
            description: 'High energy damage in targeted area'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'energy_blast_blaster_focused_power_bolt',
        name: 'Focused Power Bolt',
        powersetId: 'energy_blast_blaster',
        description: 'An intensely focused bolt of energy that deals extreme damage to a single target and knocks them back.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 14.35,
        rechargeTime: 16,
        castTime: 1.5,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 132.6,
            description: 'Extreme energy damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'energy_blast_blaster_nova',
        name: 'Nova',
        powersetId: 'energy_blast_blaster',
        description: 'Releases all stored energy in a devastating point-blank explosion, dealing massive damage to all nearby foes and knocking them back.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
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
            damageType: 'energy',
            value: 226.3,
            description: 'Massive energy damage to all nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'electric_blast',
    name: 'Electrical Blast',
    archetypeId: 'blaster',
    type: 'primary',
    description: 'Electrical Blast powers deal energy damage and drain endurance from foes. Many attacks also have a chance to hold targets with electrical shock. This set excels at sapping enemy power.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'electric_blast_charged_bolts',
        name: 'Charged Bolts',
        powersetId: 'electric_blast',
        description: 'Hurls small bolts of electricity at a targeted foe, dealing minor energy damage and draining some endurance.',
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
            damageType: 'energy',
            value: 38.44,
            description: 'Minor energy damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 3.9,
            description: 'Drains target endurance'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'electric_blast_lightning_bolt',
        name: 'Lightning Bolt',
        powersetId: 'electric_blast',
        description: 'Fires a bolt of lightning at a targeted foe, dealing moderate energy damage and draining endurance.',
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
            damageType: 'energy',
            value: 62.56,
            description: 'Moderate energy damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 6.24,
            description: 'Drains target endurance'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'electric_blast_ball_lightning',
        name: 'Ball Lightning',
        powersetId: 'electric_blast',
        description: 'Launches a crackling ball of lightning that explodes on impact, dealing moderate energy damage to all foes in the area and draining their endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 15.18,
        rechargeTime: 16,
        castTime: 1.67,
        range: 80,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 51.6,
            description: 'Moderate energy damage in targeted area'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 4.68,
            description: 'Drains endurance from all targets'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'electric_blast_aim',
        name: 'Aim',
        powersetId: 'electric_blast',
        description: 'Greatly increases accuracy and damage for a short time. Slightly increases range of all attacks.',
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
        id: 'electric_blast_zapping_bolt',
        name: 'Zapping Bolt',
        powersetId: 'electric_blast',
        description: 'A powerful close-range electrical bolt that deals high energy damage and has a strong chance to hold the target briefly.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 14.35,
        rechargeTime: 10,
        castTime: 1.0,
        range: 40,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 100.32,
            description: 'High energy damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 7.8,
            description: 'Drains significant target endurance'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'electric_blast_short_circuit',
        name: 'Short Circuit',
        powersetId: 'electric_blast',
        description: 'A devastating point-blank area attack that deals moderate energy damage and severely drains endurance from all nearby foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 18.72,
        rechargeTime: 20,
        castTime: 2.67,
        range: 20,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 56.3,
            description: 'Moderate energy damage to nearby foes'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 25.0,
            description: 'Severely drains endurance from all targets'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'electric_blast_tesla_cage',
        name: 'Tesla Cage',
        powersetId: 'electric_blast',
        description: 'Encases a single foe in a cage of electricity, holding them helpless while dealing energy damage over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 13.0,
        rechargeTime: 16,
        castTime: 1.5,
        range: 60,
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
            damageType: 'energy',
            value: 45.12,
            duration: 12,
            description: 'Energy damage over time while held'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 9.36,
            description: 'Drains target endurance'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'hold', 'damage', 'recharge', 'endurance_reduction', 'range', 'endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'electric_blast_sniper_blast',
        name: 'Voltaic Sentinel',
        powersetId: 'electric_blast',
        description: 'Creates a stationary sentinel of pure electricity that repeatedly blasts nearby foes with bolts of lightning.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 16.12,
        rechargeTime: 60,
        castTime: 2.03,
        range: 60,
        maxTargets: 1,
        effects: [
          {
            type: 'pet',
            target: 'pet',
            value: 1,
            duration: 60,
            description: 'Creates a Voltaic Sentinel that attacks nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'electric_blast_thunderous_blast',
        name: 'Thunderous Blast',
        powersetId: 'electric_blast',
        description: 'Unleashes a massive electrical discharge that deals extreme energy damage to all nearby foes and drains their endurance completely.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
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
            damageType: 'energy',
            value: 213.4,
            description: 'Extreme energy damage to all nearby foes'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 50.0,
            description: 'Severely drains all endurance from targets'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'endurance_modification'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'archery',
    name: 'Archery',
    archetypeId: 'blaster',
    type: 'primary',
    description: 'Archery is a fast-firing ranged powerset that uses trick arrows and precision shots. Archery powers have fast animation times and good damage, allowing for rapid attacks. Many powers deal lethal damage.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'archery_snap_shot',
        name: 'Snap Shot',
        powersetId: 'archery',
        description: 'A quick shot that deals minor lethal damage. Fast to execute but low damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 2,
        castTime: 0.83,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 32.1,
            description: 'Minor lethal damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'archery_aimed_shot',
        name: 'Aimed Shot',
        powersetId: 'archery',
        description: 'A carefully aimed arrow that deals moderate lethal damage with improved accuracy.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 6,
        castTime: 1.33,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 62.56,
            description: 'Moderate lethal damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'archery_fistful_of_arrows',
        name: 'Fistful of Arrows',
        powersetId: 'archery',
        description: 'Fires a spread of arrows in a cone, striking all foes in the area for moderate lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 15.18,
        rechargeTime: 16,
        castTime: 2.0,
        range: 40,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 51.6,
            description: 'Moderate lethal damage in cone'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'archery_blazing_arrow',
        name: 'Blazing Arrow',
        powersetId: 'archery',
        description: 'Fires a flaming arrow that deals moderate lethal damage and additional fire damage over time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 10.4,
        rechargeTime: 8,
        castTime: 1.17,
        range: 80,
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
            damageType: 'fire',
            value: 20.5,
            duration: 4.2,
            description: 'Minor fire damage over time'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'archery_aim',
        name: 'Aim',
        powersetId: 'archery',
        description: 'Greatly increases accuracy and damage for a short time. Slightly increases range of all attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
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
        id: 'archery_explosive_arrow',
        name: 'Explosive Arrow',
        powersetId: 'archery',
        description: 'Fires an arrow with an explosive warhead that detonates on impact, dealing high lethal and fire damage to all foes in the area.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 15.18,
        rechargeTime: 16,
        castTime: 1.67,
        range: 80,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 37.8,
            description: 'Moderate lethal damage in area'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 37.8,
            description: 'Moderate fire damage in area'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'archery_stunning_shot',
        name: 'Stunning Shot',
        powersetId: 'archery',
        description: 'Fires a blunt arrow that stuns the target on impact, leaving them dazed and unable to act for a time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 10.4,
        rechargeTime: 20,
        castTime: 1.5,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 42.3,
            description: 'Minor lethal damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 10,
            description: 'Stuns target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'stun'],
        maxSlots: 6
      },
      {
        id: 'archery_ranged_shot',
        name: 'Ranged Shot',
        powersetId: 'archery',
        description: 'A long-range sniper shot that requires time to draw but deals extreme lethal damage to a single target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 14.35,
        rechargeTime: 12,
        castTime: 4.33,
        range: 150,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 164.6,
            description: 'Extreme lethal damage at long range'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'archery_rain_of_arrows',
        name: 'Rain of Arrows',
        powersetId: 'archery',
        description: 'Launches a massive volley of arrows into the sky, raining down on a targeted area. Deals extreme lethal damage to all foes in the area.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 360,
        castTime: 2.67,
        range: 80,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 218.5,
            description: 'Extreme lethal damage to all foes in targeted area'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'assault_rifle',
    name: 'Assault Rifle',
    archetypeId: 'blaster',
    type: 'primary',
    description: 'Assault Rifle uses military-grade weapons to deal lethal and fire damage. This powerset features a variety of ammunition types including standard rounds, incendiary rounds, and explosive shells for versatile combat.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'assault_rifle_burst',
        name: 'Burst',
        powersetId: 'assault_rifle',
        description: 'Fires a quick three-round burst at a targeted foe, dealing minor lethal damage.',
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
            damageType: 'lethal',
            value: 40.95,
            description: 'Minor lethal damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'assault_rifle_slug',
        name: 'Slug',
        powersetId: 'assault_rifle',
        description: 'Fires a single heavy slug at a targeted foe, dealing moderate lethal damage with a chance to knock the target back.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 6,
        castTime: 1.17,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 62.56,
            description: 'Moderate lethal damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'assault_rifle_buckshot',
        name: 'Buckshot',
        powersetId: 'assault_rifle',
        description: 'Fires a spread of buckshot in a cone, dealing moderate lethal damage to all foes in the area.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 12.74,
        rechargeTime: 12,
        castTime: 1.67,
        range: 40,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 46.8,
            description: 'Moderate lethal damage in cone'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'assault_rifle_m30_grenade',
        name: 'M30 Grenade',
        powersetId: 'assault_rifle',
        description: 'Launches an M30 grenade at a targeted location that explodes on impact, dealing high lethal and fire damage to all foes in the area.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 15.18,
        rechargeTime: 16,
        castTime: 1.67,
        range: 80,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 38.5,
            description: 'Moderate lethal damage in area'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 38.5,
            description: 'Moderate fire damage in area'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'assault_rifle_aim',
        name: 'Aim',
        powersetId: 'assault_rifle',
        description: 'Greatly increases accuracy and damage for a short time. Slightly increases range of all attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
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
        id: 'assault_rifle_flamethrower',
        name: 'Flamethrower',
        powersetId: 'assault_rifle',
        description: 'Activates the under-barrel flamethrower attachment, spraying a cone of fire that deals high fire damage over time.',
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
        id: 'assault_rifle_beanbag',
        name: 'Beanbag',
        powersetId: 'assault_rifle',
        description: 'Fires a beanbag round that deals minor smashing damage and stuns the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 10.4,
        rechargeTime: 20,
        castTime: 1.0,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 32.5,
            description: 'Minor smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 10,
            description: 'Stuns target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'stun'],
        maxSlots: 6
      },
      {
        id: 'assault_rifle_sniper_rifle',
        name: 'Sniper Rifle',
        powersetId: 'assault_rifle',
        description: 'Switches to sniper mode for a devastating long-range shot that deals extreme lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 14.35,
        rechargeTime: 12,
        castTime: 4.33,
        range: 150,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'lethal',
            value: 164.6,
            description: 'Extreme lethal damage at long range'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'assault_rifle_full_auto',
        name: 'Full Auto',
        powersetId: 'assault_rifle',
        description: 'Unloads the full magazine in a sustained burst of automatic fire, sweeping a cone of extreme lethal damage through all foes in the area.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 360,
        castTime: 4.0,
        range: 80,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 234.7,
            description: 'Extreme lethal damage in cone over sustained burst'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'knockback'],
        maxSlots: 6
      }
    ]
  },

  // =============================================
  // SECONDARY POWERSETS
  // =============================================
  {
    id: 'energy_manipulation',
    name: 'Energy Manipulation',
    archetypeId: 'blaster',
    type: 'secondary',
    description: 'Energy Manipulation provides strong melee attacks with knockback effects and self-buffs. This set focuses on close-range energy damage combined with powerful build-up abilities.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'energy_manipulation_power_thrust',
        name: 'Power Thrust',
        powersetId: 'energy_manipulation',
        description: 'A quick melee energy strike that deals minor energy damage and knocks the target back.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 7.8,
        rechargeTime: 6,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 42.7,
            description: 'Minor energy damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'energy_manipulation_energy_punch',
        name: 'Energy Punch',
        powersetId: 'energy_manipulation',
        description: 'A strong melee energy punch that deals moderate energy and smashing damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
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
            damageType: 'energy',
            value: 40.0,
            description: 'Moderate energy damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 32.0,
            description: 'Moderate smashing damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'energy_manipulation_bone_smasher',
        name: 'Bone Smasher',
        powersetId: 'energy_manipulation',
        description: 'A devastating melee attack that deals high smashing and energy damage with a chance to stun.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 10.4,
        rechargeTime: 11,
        castTime: 1.67,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 51.3,
            description: 'High smashing damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 51.3,
            description: 'High energy damage'
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
        id: 'energy_manipulation_build_up',
        name: 'Build Up',
        powersetId: 'energy_manipulation',
        description: 'Greatly increases damage and accuracy for a short time.',
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
        id: 'energy_manipulation_stun',
        name: 'Stun',
        powersetId: 'energy_manipulation',
        description: 'A powerful melee attack that deals minor smashing damage and stuns the target for an extended duration.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 10.4,
        rechargeTime: 20,
        castTime: 1.17,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 35.6,
            description: 'Minor smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 12,
            description: 'Stuns target for an extended duration'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'energy_manipulation_conserve_power',
        name: 'Conserve Power',
        powersetId: 'energy_manipulation',
        description: 'Drastically reduces the endurance cost of all powers for a period of time.',
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
            value: 75.0,
            duration: 90,
            description: 'Reduces endurance cost of all powers by 75%'
          }
        ],
        allowedEnhancementTypes: ['recharge'],
        maxSlots: 6
      },
      {
        id: 'energy_manipulation_boost_range',
        name: 'Boost Range',
        powersetId: 'energy_manipulation',
        description: 'Temporarily increases the range of all your attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 5.2,
        rechargeTime: 60,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 75.0,
            duration: 30,
            description: 'Self +75% Range to all attacks'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'energy_manipulation_total_focus',
        name: 'Total Focus',
        powersetId: 'energy_manipulation',
        description: 'Channels all energy into a single devastating melee strike that deals extreme energy and smashing damage and stuns the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 18.5,
        rechargeTime: 20,
        castTime: 3.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 105.8,
            description: 'Extreme energy damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 105.8,
            description: 'Extreme smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 8,
            description: 'Stuns target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'energy_manipulation_power_boost',
        name: 'Power Boost',
        powersetId: 'energy_manipulation',
        description: 'Greatly enhances the magnitude and duration of all secondary effects of your powers for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 5.2,
        rechargeTime: 120,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 100.0,
            duration: 10,
            description: 'Doubles the magnitude of all secondary effects (holds, stuns, knockback, etc.)'
          }
        ],
        allowedEnhancementTypes: ['recharge'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'electricity_manipulation',
    name: 'Electricity Manipulation',
    archetypeId: 'blaster',
    type: 'secondary',
    description: 'Electricity Manipulation provides melee attacks that drain endurance from foes, self-recovery abilities, and electrical shields. This set excels at sustaining combat through endurance drain and recovery.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'electricity_manipulation_charged_brawl',
        name: 'Charged Brawl',
        powersetId: 'electricity_manipulation',
        description: 'A quick melee attack that deals minor energy and smashing damage while draining the target\'s endurance.',
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
            damageType: 'energy',
            value: 25.3,
            description: 'Minor energy damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 18.6,
            description: 'Minor smashing damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 5.2,
            description: 'Drains target endurance'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'electricity_manipulation_havoc_punch',
        name: 'Havoc Punch',
        powersetId: 'electricity_manipulation',
        description: 'A strong electrical melee attack that deals moderate energy and smashing damage and drains endurance from the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
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
            damageType: 'energy',
            value: 38.5,
            description: 'Moderate energy damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 31.2,
            description: 'Moderate smashing damage'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 7.8,
            description: 'Drains target endurance'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'electricity_manipulation_lightning_clap',
        name: 'Lightning Clap',
        powersetId: 'electricity_manipulation',
        description: 'A thunderous clap of electricity that stuns all nearby foes and deals minor energy damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
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
            value: 22.4,
            description: 'Minor energy damage to nearby foes'
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
      },
      {
        id: 'electricity_manipulation_build_up',
        name: 'Build Up',
        powersetId: 'electricity_manipulation',
        description: 'Greatly increases damage and accuracy for a short time.',
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
        id: 'electricity_manipulation_lightning_field',
        name: 'Lightning Field',
        powersetId: 'electricity_manipulation',
        description: 'While active, you emit a field of electricity that continuously damages all nearby foes and drains their endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 0.52,
        rechargeTime: 10,
        castTime: 1.17,
        range: 8,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 7.15,
            description: 'Minor energy damage to nearby foes every 2 seconds'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 2.5,
            description: 'Drains endurance from nearby foes every 2 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'endurance_reduction', 'endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'electricity_manipulation_power_sink',
        name: 'Power Sink',
        powersetId: 'electricity_manipulation',
        description: 'Drains endurance from all nearby foes and transfers it to yourself. The more foes affected, the more endurance you recover.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 0,
        rechargeTime: 120,
        castTime: 2.03,
        range: 20,
        maxTargets: 16,
        effects: [
          {
            type: 'debuff',
            target: 'aoe',
            value: 30.0,
            description: 'Drains significant endurance from all nearby foes'
          },
          {
            type: 'buff',
            target: 'self',
            value: 15.0,
            description: 'Recovers endurance per foe affected'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'electricity_manipulation_thunder_strike',
        name: 'Thunder Strike',
        powersetId: 'electricity_manipulation',
        description: 'A massive electrical melee strike that deals extreme energy and smashing damage to the primary target and stuns nearby foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 18.5,
        rechargeTime: 20,
        castTime: 2.33,
        range: 7,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 75.6,
            description: 'High energy damage to primary target'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 38.2,
            description: 'Moderate energy damage to nearby foes'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 6,
            description: 'Stuns nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'electricity_manipulation_shocking_grasp',
        name: 'Shocking Grasp',
        powersetId: 'electricity_manipulation',
        description: 'Grabs a foe with an electrified hand, dealing high energy damage and holding them in place while draining their endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 13.0,
        rechargeTime: 16,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 82.4,
            description: 'High energy damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 10,
            description: 'Holds target in place'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 15.6,
            description: 'Drains significant target endurance'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'hold', 'endurance_modification'],
        maxSlots: 6
      },
      {
        id: 'electricity_manipulation_force_of_thunder',
        name: 'Force of Thunder',
        powersetId: 'electricity_manipulation',
        description: 'Releases a massive point-blank electrical explosion that deals extreme energy damage to all nearby foes, drains their endurance, and has a high chance to stun them.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 300,
        castTime: 3.0,
        range: 20,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 187.5,
            description: 'Extreme energy damage to all nearby foes'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 40.0,
            description: 'Severely drains endurance from all targets'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 10,
            description: 'Stuns all nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun', 'endurance_modification'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'devices',
    name: 'Devices',
    archetypeId: 'blaster',
    type: 'secondary',
    description: 'Devices provides a variety of gadgets and traps for tactical combat. Rather than direct melee attacks, Devices offers utility through caltrops, trip mines, smoke grenades, and targeting drones for a more strategic playstyle.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'devices_web_grenade',
        name: 'Web Grenade',
        powersetId: 'devices',
        description: 'Launches a web grenade that immobilizes a single foe, preventing movement and reducing their attack speed.',
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
            type: 'debuff',
            target: 'enemy',
            value: 20,
            duration: 14.9,
            description: 'Slows target attack speed and fly speed'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'immobilize', 'recharge', 'endurance_reduction', 'range', 'slow'],
        maxSlots: 6
      },
      {
        id: 'devices_caltrops',
        name: 'Caltrops',
        powersetId: 'devices',
        description: 'Scatters a patch of caltrops on the ground that slows and damages foes that walk over them.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 7.8,
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
        id: 'devices_taser',
        name: 'Taser',
        powersetId: 'devices',
        description: 'Fires a taser dart that stuns the target and deals minor energy damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 10.4,
        rechargeTime: 20,
        castTime: 1.17,
        range: 20,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 28.3,
            description: 'Minor energy damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 12,
            description: 'Stuns target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'stun'],
        maxSlots: 6
      },
      {
        id: 'devices_targeting_drone',
        name: 'Targeting Drone',
        powersetId: 'devices',
        description: 'Deploys a small targeting drone that follows you and provides a constant accuracy and perception bonus.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 0.26,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 37.5,
            description: 'Self +37.5% To Hit'
          },
          {
            type: 'buff',
            target: 'self',
            value: 500,
            description: 'Self +500% Perception range'
          }
        ],
        allowedEnhancementTypes: ['endurance_reduction', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'devices_smoke_grenade',
        name: 'Smoke Grenade',
        powersetId: 'devices',
        description: 'Launches a smoke grenade that obscures the vision of all foes in the area, reducing their accuracy and perception.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 9.36,
        rechargeTime: 30,
        castTime: 1.17,
        range: 80,
        maxTargets: 16,
        effects: [
          {
            type: 'debuff',
            target: 'aoe',
            value: 22.5,
            duration: 30,
            description: 'Reduces accuracy and perception of all foes in area'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'to_hit_debuff', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'devices_cloaking_device',
        name: 'Cloaking Device',
        powersetId: 'devices',
        description: 'Activates a personal cloaking device that makes you nearly invisible and grants a defense bonus.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 12,
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
            value: 5.0,
            description: 'Self +5% Defense to all'
          }
        ],
        allowedEnhancementTypes: ['endurance_reduction', 'defense_buff'],
        maxSlots: 6
      },
      {
        id: 'devices_trip_mine',
        name: 'Trip Mine',
        powersetId: 'devices',
        description: 'Places a proximity mine that detonates when enemies approach, dealing extreme lethal and fire damage in the area. Requires you to be stationary while placing.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 15.6,
        rechargeTime: 20,
        castTime: 4.0,
        range: 3,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 118.7,
            description: 'Extreme lethal damage in area'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 52.3,
            description: 'High fire damage in area'
          }
        ],
        allowedEnhancementTypes: ['damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'devices_time_bomb',
        name: 'Time Bomb',
        powersetId: 'devices',
        description: 'Places a powerful time bomb that detonates after a short delay, dealing massive lethal and fire damage to all foes in a large area.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 20.8,
        rechargeTime: 120,
        castTime: 5.0,
        range: 3,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'lethal',
            value: 156.2,
            description: 'Massive lethal damage in large area'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 78.1,
            description: 'Extreme fire damage in large area'
          }
        ],
        allowedEnhancementTypes: ['damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'devices_gun_drone',
        name: 'Gun Drone',
        powersetId: 'devices',
        description: 'Deploys an automated gun drone that attacks nearby foes with rapid-fire lethal damage. The drone lasts for a limited time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 16.12,
        rechargeTime: 300,
        castTime: 2.5,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'pet',
            target: 'pet',
            value: 1,
            duration: 120,
            description: 'Deploys a Gun Drone that attacks nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'mental_manipulation',
    name: 'Mental Manipulation',
    archetypeId: 'blaster',
    type: 'secondary',
    description: 'Mental Manipulation provides psionic melee attacks, self-buffs, and enemy debuffs. This set uses telekinetic and psychic strikes along with powerful drain abilities that can sap enemy resistance and boost your own performance.',
    icon: '/icons/powersets/placeholder.svg',
    powers: [
      {
        id: 'mental_manipulation_mind_probe',
        name: 'Mind Probe',
        powersetId: 'mental_manipulation',
        description: 'A melee psionic attack that deals moderate psionic damage by reaching into the target\'s mind.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 8.53,
        rechargeTime: 8,
        castTime: 1.33,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'psionic',
            value: 71.6,
            description: 'Moderate psionic damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'mental_manipulation_telekinetic_thrust',
        name: 'Telekinetic Thrust',
        powersetId: 'mental_manipulation',
        description: 'A telekinetic melee strike that deals minor psionic and smashing damage and knocks the target back.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 7.8,
        rechargeTime: 6,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'psionic',
            value: 25.7,
            description: 'Minor psionic damage'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 25.7,
            description: 'Minor smashing damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'mental_manipulation_drain_psyche',
        name: 'Drain Psyche',
        powersetId: 'mental_manipulation',
        description: 'Drains the life force and mental energy from all nearby foes, boosting your regeneration and recovery rates dramatically.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 13.0,
        rechargeTime: 180,
        castTime: 2.03,
        range: 10,
        maxTargets: 10,
        effects: [
          {
            type: 'debuff',
            target: 'aoe',
            value: 30.0,
            duration: 30,
            description: 'Reduces regeneration and recovery of nearby foes'
          },
          {
            type: 'buff',
            target: 'self',
            value: 500.0,
            duration: 30,
            description: 'Massively boosts self regeneration and recovery per foe hit'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'endurance_reduction', 'heal'],
        maxSlots: 6
      },
      {
        id: 'mental_manipulation_build_up',
        name: 'Build Up',
        powersetId: 'mental_manipulation',
        description: 'Greatly increases damage and accuracy for a short time.',
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
        id: 'mental_manipulation_concentration',
        name: 'Concentration',
        powersetId: 'mental_manipulation',
        description: 'Focuses your mind to improve your accuracy and resistance to control effects for an extended duration.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 5.2,
        rechargeTime: 120,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 25.0,
            duration: 60,
            description: 'Self +25% To Hit for extended duration'
          },
          {
            type: 'buff',
            target: 'self',
            value: 10.0,
            duration: 60,
            description: 'Self +Mez Protection (resistance to hold, stun, sleep, confuse)'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'to_hit_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'mental_manipulation_psychic_shockwave',
        name: 'Psychic Shockwave',
        powersetId: 'mental_manipulation',
        description: 'Unleashes a devastating psionic shockwave that deals high psionic damage to all nearby foes and has a chance to stun them.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 18.5,
        rechargeTime: 20,
        castTime: 2.0,
        range: 15,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'psionic',
            value: 86.4,
            description: 'High psionic damage to nearby foes'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            duration: 6,
            description: 'Chance to stun nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'mental_manipulation_scare',
        name: 'Scare',
        powersetId: 'mental_manipulation',
        description: 'Projects terrifying psionic images into a single foe\'s mind, causing them to flee in fear.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 10.4,
        rechargeTime: 20,
        castTime: 1.5,
        range: 60,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'psionic',
            value: 32.1,
            description: 'Minor psionic damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 16,
            description: 'Causes target to flee in terror'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'fear'],
        maxSlots: 6
      },
      {
        id: 'mental_manipulation_world_of_confusion',
        name: 'World of Confusion',
        powersetId: 'mental_manipulation',
        description: 'While active, you emit a psionic aura that confuses all nearby foes, causing them to attack each other.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 0.52,
        rechargeTime: 10,
        castTime: 1.17,
        range: 10,
        maxTargets: 10,
        effects: [
          {
            type: 'control',
            target: 'aoe',
            value: 1,
            description: 'Confuses nearby foes, causing them to attack each other'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'confuse', 'endurance_reduction', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'mental_manipulation_psychic_focus',
        name: 'Psychic Focus',
        powersetId: 'mental_manipulation',
        description: 'Focuses all psychic energy into your psionic attacks, greatly increasing the damage, accuracy, and secondary effects of all your powers for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 9,
        enduranceCost: 5.2,
        rechargeTime: 120,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 100.0,
            duration: 10,
            description: 'Doubles the magnitude of all secondary effects (holds, stuns, confuse, fear, etc.)'
          },
          {
            type: 'buff',
            target: 'self',
            value: 50.0,
            duration: 10,
            description: 'Self +50% Damage'
          }
        ],
        allowedEnhancementTypes: ['recharge'],
        maxSlots: 6
      }
    ]
  }
];
