import type { Powerset } from '../../types';

export const blasterBlastMissing: Powerset[] = [
  // =============================================
  // SONIC ATTACK
  // =============================================
  {
    id: 'sonic_attack',
    name: 'Sonic Attack',
    type: 'primary',
    archetypeId: 'blaster',
    description: 'Sonic Attack powers use focused sound waves to deal energy damage and weaken enemy resistance. The -resistance debuffs make foes more vulnerable to all subsequent damage, benefiting the entire team.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'sa_shriek',
        name: 'Shriek',
        powersetId: 'sonic_attack',
        description: 'A quick, short-range sonic shriek that deals minor energy damage and reduces the target\'s damage resistance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 3,
        castTime: 1.0,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 38.44,
            description: 'Minor Energy DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 7.5,
            duration: 8,
            description: '-7.5% Resistance for 8s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'sa_scream',
        name: 'Scream',
        powersetId: 'sonic_attack',
        description: 'A focused sonic scream that deals moderate energy damage over time and reduces the target\'s damage resistance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 6,
        castTime: 1.5,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 71.4,
            description: 'Moderate Energy DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 12.5,
            duration: 10,
            description: '-12.5% Resistance for 10s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'sa_howl',
        name: 'Howl',
        powersetId: 'sonic_attack',
        description: 'Unleashes a deafening howl in a cone, dealing moderate energy damage and reducing the resistance of all affected foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 12.74,
        rechargeTime: 12,
        castTime: 1.5,
        range: 60,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 51.6,
            description: 'Moderate Energy DMG in cone'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 12.5,
            duration: 10,
            description: '-12.5% Resistance for 10s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'sa_aim',
        name: 'Aim',
        powersetId: 'sonic_attack',
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
        allowedEnhancementTypes: ['recharge', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'sa_shout',
        name: 'Shout',
        powersetId: 'sonic_attack',
        description: 'A long-range focused sonic shout that deals high energy damage at extreme distance. Requires time to build up.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 14.35,
        rechargeTime: 12,
        castTime: 2.67,
        range: 150,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 164.6,
            description: 'High Energy DMG at long range'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 15.0,
            duration: 12,
            description: '-15% Resistance for 12s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'sa_amplify',
        name: 'Amplify',
        powersetId: 'sonic_attack',
        description: 'Amplifies your sonic powers, greatly increasing the damage and resistance debuff strength of all sonic attacks for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 5.2,
        rechargeTime: 120,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 50,
            duration: 15,
            description: '+50% DMG for 15s'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            duration: 15,
            description: 'Doubles -Resistance debuff strength for 15s'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'sa_siren_song',
        name: 'Siren\'s Song',
        powersetId: 'sonic_attack',
        description: 'Emits a cone of devastating sonic waves that deal significant energy damage and reduce resistance of all foes caught in the area.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 15.18,
        rechargeTime: 16,
        castTime: 2.0,
        range: 60,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 75.6,
            description: 'Significant Energy DMG in cone'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 15.0,
            duration: 12,
            description: '-15% Resistance for 12s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'sa_screech',
        name: 'Screech',
        powersetId: 'sonic_attack',
        description: 'An intense, focused screech that deals extreme energy damage to a single target and severely reduces their damage resistance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 14.35,
        rechargeTime: 12,
        castTime: 1.5,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 132.6,
            description: 'Extreme Energy DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 20.0,
            duration: 15,
            description: '-20% Resistance for 15s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'sa_dreadful_wail',
        name: 'Dreadful Wail',
        powersetId: 'sonic_attack',
        description: 'Unleashes a devastating wail that deals massive energy damage to all nearby foes, severely reducing their resistance and leaving them stunned.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 32,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 145,
        castTime: 3.0,
        range: 25,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 226.3,
            description: 'Devastating Energy DMG to all nearby foes'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 25.0,
            duration: 20,
            description: '-25% Resistance for 20s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },

  // =============================================
  // PSYCHIC BLAST
  // =============================================
  {
    id: 'psychic_blast',
    name: 'Psychic Blast',
    type: 'primary',
    archetypeId: 'blaster',
    description: 'Psychic Blast powers deal psionic damage that bypasses most physical defenses. Many attacks also slow enemy recharge rates, reducing their ability to use powers effectively.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'pb_psionic_dart',
        name: 'Psionic Dart',
        powersetId: 'psychic_blast',
        description: 'A quick psionic projectile that deals minor psionic damage and slows the target\'s recharge rate.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 3,
        castTime: 1.0,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'psionic',
            value: 38.44,
            description: 'Minor Psionic DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 15,
            duration: 6,
            description: '-15% Recharge for 6s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'pb_mental_blast',
        name: 'Mental Blast',
        powersetId: 'psychic_blast',
        description: 'A focused psionic blast that deals moderate psionic damage and slows the target\'s recharge rate.',
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
            damageType: 'psionic',
            value: 62.56,
            description: 'Moderate Psionic DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 20,
            duration: 8,
            description: '-20% Recharge for 8s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'pb_psychic_scream',
        name: 'Psychic Scream',
        powersetId: 'psychic_blast',
        description: 'A psionic scream that deals moderate psionic damage to all foes in a cone and slows their recharge rates.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 12.74,
        rechargeTime: 16,
        castTime: 2.0,
        range: 60,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'psionic',
            value: 51.6,
            description: 'Moderate Psionic DMG in cone'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 20,
            duration: 10,
            description: '-20% Recharge for 10s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'pb_aim',
        name: 'Aim',
        powersetId: 'psychic_blast',
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
        allowedEnhancementTypes: ['recharge', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'pb_psionic_lance',
        name: 'Psionic Lance',
        powersetId: 'psychic_blast',
        description: 'A long-range focused psionic lance that deals high psionic damage at extreme distance. Requires intense mental focus.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 14.35,
        rechargeTime: 12,
        castTime: 2.67,
        range: 150,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'psionic',
            value: 164.6,
            description: 'High Psionic DMG at long range'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 25,
            duration: 12,
            description: '-25% Recharge for 12s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'pb_scramble_thoughts',
        name: 'Scramble Thoughts',
        powersetId: 'psychic_blast',
        description: 'Scrambles a single target\'s thoughts, dealing minor psionic damage, stunning them, and severely reducing their recharge rate.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 10.4,
        rechargeTime: 20,
        castTime: 1.17,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'psionic',
            value: 32.1,
            description: 'Minor Psionic DMG'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 1,
            duration: 10,
            description: 'Stuns target for 10s'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 40,
            duration: 15,
            description: '-40% Recharge for 15s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'stun'],
        maxSlots: 6
      },
      {
        id: 'pb_telekinetic_blast',
        name: 'Telekinetic Blast',
        powersetId: 'psychic_blast',
        description: 'A powerful telekinetic blast that deals significant psionic damage to all foes in a targeted area and slows their recharge rates.',
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
            damageType: 'psionic',
            value: 75.6,
            description: 'Significant Psionic DMG in area'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 25,
            duration: 12,
            description: '-25% Recharge for 12s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'pb_will_domination',
        name: 'Will Domination',
        powersetId: 'psychic_blast',
        description: 'Overwhelms a single target\'s will, dealing extreme psionic damage and severely slowing their recharge rate.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 14.35,
        rechargeTime: 12,
        castTime: 1.5,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'psionic',
            value: 132.6,
            description: 'Extreme Psionic DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 30,
            duration: 15,
            description: '-30% Recharge for 15s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'pb_psychic_wail',
        name: 'Psychic Wail',
        powersetId: 'psychic_blast',
        description: 'Unleashes a devastating psychic wail that deals massive psionic damage to all nearby foes and severely cripples their recharge rates.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 32,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 145,
        castTime: 3.0,
        range: 25,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'psionic',
            value: 226.3,
            description: 'Devastating Psionic DMG to all nearby foes'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 40,
            duration: 20,
            description: '-40% Recharge for 20s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },

  // =============================================
  // RADIATION BLAST
  // =============================================
  {
    id: 'radiation_blast',
    name: 'Radiation Blast',
    type: 'primary',
    archetypeId: 'blaster',
    description: 'Radiation Blast powers deal a mix of energy and smashing damage while reducing enemy defense. The -defense debuffs make subsequent attacks from the entire team more likely to hit, making this set highly team-friendly.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'rb_neutrino_bolt',
        name: 'Neutrino Bolt',
        powersetId: 'radiation_blast',
        description: 'A quick bolt of radioactive energy that deals minor energy damage and reduces the target\'s defense.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 3,
        castTime: 1.0,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 30.5,
            description: 'Minor Energy DMG'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 10.2,
            description: 'Minor Smashing DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 3.75,
            duration: 8,
            description: '-3.75% Defense for 8s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'rb_x_ray_beam',
        name: 'X-Ray Beam',
        powersetId: 'radiation_blast',
        description: 'A concentrated beam of radiation that deals moderate energy and smashing damage while reducing the target\'s defense.',
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
            damageType: 'energy',
            value: 49.5,
            description: 'Moderate Energy DMG'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 16.5,
            description: 'Minor Smashing DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 5.0,
            duration: 10,
            description: '-5% Defense for 10s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'rb_irradiate',
        name: 'Irradiate',
        powersetId: 'radiation_blast',
        description: 'Irradiates all foes in a targeted area with intense radiation, dealing moderate energy and smashing damage and reducing their defense.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 12.74,
        rechargeTime: 16,
        castTime: 2.07,
        range: 80,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 38.7,
            description: 'Moderate Energy DMG in area'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 12.9,
            description: 'Minor Smashing DMG in area'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 5.0,
            duration: 10,
            description: '-5% Defense for 10s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'rb_aim',
        name: 'Aim',
        powersetId: 'radiation_blast',
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
        allowedEnhancementTypes: ['recharge', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'rb_cosmic_burst',
        name: 'Cosmic Burst',
        powersetId: 'radiation_blast',
        description: 'A long-range concentrated burst of cosmic radiation that deals high energy and smashing damage. Requires time to charge.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 14.35,
        rechargeTime: 12,
        castTime: 2.67,
        range: 150,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 123.5,
            description: 'High Energy DMG at long range'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 41.1,
            description: 'Moderate Smashing DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 7.5,
            duration: 12,
            description: '-7.5% Defense for 12s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'rb_electron_haze',
        name: 'Electron Haze',
        powersetId: 'radiation_blast',
        description: 'Releases a broad cone of radioactive particles that deals moderate energy damage and severely reduces the defense of all affected foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 12.74,
        rechargeTime: 14,
        castTime: 1.67,
        range: 60,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 48.6,
            description: 'Moderate Energy DMG in cone'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 16.2,
            description: 'Minor Smashing DMG in cone'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 7.5,
            duration: 12,
            description: '-7.5% Defense for 12s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'rb_proton_volley',
        name: 'Proton Volley',
        powersetId: 'radiation_blast',
        description: 'Fires a concentrated volley of proton particles in a wide area, dealing significant energy and smashing damage to all foes.',
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
            value: 56.7,
            description: 'Significant Energy DMG in area'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 18.9,
            description: 'Moderate Smashing DMG in area'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 7.5,
            duration: 12,
            description: '-7.5% Defense for 12s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'rb_atomic_blast',
        name: 'Atomic Blast',
        powersetId: 'radiation_blast',
        description: 'A devastating concentrated beam of atomic energy that deals extreme energy and smashing damage to a single target.',
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
            value: 99.5,
            description: 'Extreme Energy DMG'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 33.1,
            description: 'High Smashing DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 10.0,
            duration: 15,
            description: '-10% Defense for 15s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'rb_nuclear_blast',
        name: 'Nuclear Blast',
        powersetId: 'radiation_blast',
        description: 'Releases a massive nuclear detonation that deals devastating energy and smashing damage to all foes in the area and obliterates their defenses.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 32,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 145,
        castTime: 3.0,
        range: 25,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 169.7,
            description: 'Devastating Energy DMG to all nearby foes'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 56.6,
            description: 'Extreme Smashing DMG to all nearby foes'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 15.0,
            duration: 20,
            description: '-15% Defense for 20s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'defense_debuff'],
        maxSlots: 6
      }
    ]
  },

  // =============================================
  // DARK BLAST (BLASTER)
  // =============================================
  {
    id: 'dark_blast_blaster',
    name: 'Dark Blast',
    type: 'primary',
    archetypeId: 'blaster',
    description: 'Dark Blast powers channel negative energy to deal damage and reduce enemy accuracy. The -tohit debuffs provide a strong survivability benefit by making foes less likely to hit you and your teammates.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'dbb_dark_blast',
        name: 'Dark Blast',
        powersetId: 'dark_blast_blaster',
        description: 'A quick bolt of dark energy that deals minor negative energy damage and reduces the target\'s chance to hit.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 3,
        castTime: 1.0,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'negative',
            value: 30.5,
            description: 'Minor Negative Energy DMG'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 10.2,
            description: 'Minor Smashing DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 3.75,
            duration: 8,
            description: '-3.75% ToHit for 8s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'to_hit_debuff'],
        maxSlots: 6
      },
      {
        id: 'dbb_gloom',
        name: 'Gloom',
        powersetId: 'dark_blast_blaster',
        description: 'A concentrated beam of darkness that deals moderate negative energy and smashing damage over time, reducing the target\'s accuracy.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 6,
        castTime: 1.5,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'negative',
            value: 53.4,
            description: 'Moderate Negative Energy DMG'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 17.8,
            description: 'Minor Smashing DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 5.0,
            duration: 10,
            description: '-5% ToHit for 10s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'to_hit_debuff'],
        maxSlots: 6
      },
      {
        id: 'dbb_tenebrous_tentacles',
        name: 'Tenebrous Tentacles',
        powersetId: 'dark_blast_blaster',
        description: 'Summons dark tentacles that lash out in a cone, dealing moderate negative energy and smashing damage while immobilizing and blinding foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 12.74,
        rechargeTime: 16,
        castTime: 2.07,
        range: 60,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'negative',
            value: 38.7,
            description: 'Moderate Negative Energy DMG in cone'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 12.9,
            description: 'Minor Smashing DMG in cone'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 5.0,
            duration: 10,
            description: '-5% ToHit for 10s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'to_hit_debuff', 'immobilize'],
        maxSlots: 6
      },
      {
        id: 'dbb_aim',
        name: 'Aim',
        powersetId: 'dark_blast_blaster',
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
        allowedEnhancementTypes: ['recharge', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'dbb_moonbeam',
        name: 'Moonbeam',
        powersetId: 'dark_blast_blaster',
        description: 'A long-range focused beam of dark energy that deals high negative energy and smashing damage at extreme distance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 14.35,
        rechargeTime: 12,
        castTime: 2.67,
        range: 150,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'negative',
            value: 123.5,
            description: 'High Negative Energy DMG at long range'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 41.1,
            description: 'Moderate Smashing DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 7.5,
            duration: 12,
            description: '-7.5% ToHit for 12s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'to_hit_debuff'],
        maxSlots: 6
      },
      {
        id: 'dbb_life_drain',
        name: 'Life Drain',
        powersetId: 'dark_blast_blaster',
        description: 'Drains the life force from a single foe, dealing moderate negative energy damage and healing yourself for a portion of the damage dealt.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 10.4,
        rechargeTime: 16,
        castTime: 1.5,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'negative',
            value: 62.56,
            description: 'Moderate Negative Energy DMG'
          },
          {
            type: 'heal',
            target: 'self',
            value: 50.0,
            description: 'Self heal for portion of damage dealt'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 5.0,
            duration: 12,
            description: '-5% ToHit for 12s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'heal', 'to_hit_debuff'],
        maxSlots: 6
      },
      {
        id: 'dbb_abyssal_gaze',
        name: 'Abyssal Gaze',
        powersetId: 'dark_blast_blaster',
        description: 'Unleashes a wide cone of dark energy that deals significant negative energy and smashing damage, reducing the accuracy of all affected foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 15.18,
        rechargeTime: 20,
        castTime: 2.0,
        range: 60,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'negative',
            value: 56.7,
            description: 'Significant Negative Energy DMG in cone'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 18.9,
            description: 'Moderate Smashing DMG in cone'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 7.5,
            duration: 12,
            description: '-7.5% ToHit for 12s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'to_hit_debuff'],
        maxSlots: 6
      },
      {
        id: 'dbb_torrent_of_darkness',
        name: 'Torrent of Darkness',
        powersetId: 'dark_blast_blaster',
        description: 'A devastating torrent of dark energy that deals extreme negative energy and smashing damage to a single target, severely reducing their accuracy.',
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
            damageType: 'negative',
            value: 99.5,
            description: 'Extreme Negative Energy DMG'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 33.1,
            description: 'High Smashing DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 10.0,
            duration: 15,
            description: '-10% ToHit for 15s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'to_hit_debuff'],
        maxSlots: 6
      },
      {
        id: 'dbb_blackstar',
        name: 'Blackstar',
        powersetId: 'dark_blast_blaster',
        description: 'Channels a massive explosion of negative energy that deals devastating damage to all nearby foes, drastically reducing their accuracy and leaving them disoriented.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 32,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 145,
        castTime: 3.0,
        range: 25,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'negative',
            value: 169.7,
            description: 'Devastating Negative Energy DMG to all nearby foes'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 56.6,
            description: 'Extreme Smashing DMG to all nearby foes'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 15.0,
            duration: 20,
            description: '-15% ToHit for 20s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'to_hit_debuff'],
        maxSlots: 6
      }
    ]
  },

  // =============================================
  // WATER BLAST
  // =============================================
  {
    id: 'water_blast',
    name: 'Water Blast',
    type: 'primary',
    archetypeId: 'blaster',
    description: 'Water Blast powers deal a mix of smashing and cold damage while reducing enemy defense. Many attacks also feature knockback effects, keeping enemies off balance. Water attacks can build up Tidal Power for enhanced damage.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'wb_aqua_bolt',
        name: 'Aqua Bolt',
        powersetId: 'water_blast',
        description: 'A quick jet of pressurized water that deals minor smashing and cold damage and reduces the target\'s defense.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 3,
        castTime: 1.0,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 25.5,
            description: 'Minor Smashing DMG'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'cold',
            value: 15.3,
            description: 'Minor Cold DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 3.75,
            duration: 8,
            description: '-3.75% Defense for 8s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'wb_hydro_blast',
        name: 'Hydro Blast',
        powersetId: 'water_blast',
        description: 'A powerful stream of water that deals moderate smashing and cold damage with a chance to knock the target back.',
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
            damageType: 'smashing',
            value: 42.0,
            description: 'Moderate Smashing DMG'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'cold',
            value: 25.2,
            description: 'Moderate Cold DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 5.0,
            duration: 10,
            description: '-5% Defense for 10s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'wb_water_burst',
        name: 'Water Burst',
        powersetId: 'water_blast',
        description: 'Releases a burst of water that damages all foes in a targeted area, dealing moderate smashing and cold damage with knockback.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 12.74,
        rechargeTime: 16,
        castTime: 1.67,
        range: 80,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 30.96,
            description: 'Moderate Smashing DMG in area'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'cold',
            value: 20.64,
            description: 'Moderate Cold DMG in area'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 5.0,
            duration: 10,
            description: '-5% Defense for 10s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'wb_aim',
        name: 'Aim',
        powersetId: 'water_blast',
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
        allowedEnhancementTypes: ['recharge', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'wb_dehydrate',
        name: 'Dehydrate',
        powersetId: 'water_blast',
        description: 'A long-range concentrated stream of water that deals high smashing and cold damage. Requires time to build pressure.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 14.35,
        rechargeTime: 12,
        castTime: 2.67,
        range: 150,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 98.8,
            description: 'High Smashing DMG at long range'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'cold',
            value: 65.8,
            description: 'High Cold DMG at long range'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 7.5,
            duration: 12,
            description: '-7.5% Defense for 12s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff'],
        maxSlots: 6
      },
      {
        id: 'wb_tidal_forces',
        name: 'Tidal Forces',
        powersetId: 'water_blast',
        description: 'Channels the power of the tides, greatly increasing the critical hit chance and damage of all your water attacks for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 5.2,
        rechargeTime: 120,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 60,
            duration: 15,
            description: '+60% Critical Hit chance for 15s'
          },
          {
            type: 'buff',
            target: 'self',
            value: 30,
            duration: 15,
            description: '+30% DMG for 15s'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'wb_whirlpool',
        name: 'Whirlpool',
        powersetId: 'water_blast',
        description: 'Creates a powerful whirlpool at a targeted location that deals significant smashing and cold damage over time and reduces the defense of all foes caught within.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 15.18,
        rechargeTime: 20,
        castTime: 2.0,
        range: 80,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 45.4,
            description: 'Significant Smashing DMG in area'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'cold',
            value: 30.2,
            description: 'Significant Cold DMG in area'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 7.5,
            duration: 12,
            description: '-7.5% Defense for 12s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'wb_geyser',
        name: 'Geyser',
        powersetId: 'water_blast',
        description: 'A massive geyser erupts beneath a single target, dealing extreme smashing and cold damage and launching them into the air.',
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
            damageType: 'smashing',
            value: 79.6,
            description: 'Extreme Smashing DMG'
          },
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'cold',
            value: 53.0,
            description: 'Extreme Cold DMG'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 10.0,
            duration: 15,
            description: '-10% Defense for 15s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range', 'defense_debuff', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'wb_steam_spray',
        name: 'Steam Spray',
        powersetId: 'water_blast',
        description: 'Unleashes a devastating blast of superheated steam that deals massive smashing and cold damage to all nearby foes, knocking them back and obliterating their defenses.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 32,
        positionInSet: 9,
        enduranceCost: 18.72,
        rechargeTime: 120,
        castTime: 3.0,
        range: 25,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 135.8,
            description: 'Devastating Smashing DMG to all nearby foes'
          },
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'cold',
            value: 90.5,
            description: 'Devastating Cold DMG to all nearby foes'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 15.0,
            duration: 20,
            description: '-15% Defense for 20s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'defense_debuff', 'knockback'],
        maxSlots: 6
      }
    ]
  },

  // =============================================
  // BEAM RIFLE
  // =============================================
  {
    id: 'beam_rifle',
    name: 'Beam Rifle',
    type: 'primary',
    archetypeId: 'blaster',
    description: 'Beam Rifle uses advanced directed-energy weapons to deal energy damage. The signature Disintegrate mechanic causes a target to take additional damage from all subsequent beam attacks, making this set excel at focused single-target destruction.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'br_single_shot',
        name: 'Single Shot',
        powersetId: 'beam_rifle',
        description: 'A quick, focused beam shot that deals minor energy damage. Fast to fire with a short recharge.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 3,
        castTime: 1.0,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 40.95,
            description: 'Minor Energy DMG'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'br_charged_shot',
        name: 'Charged Shot',
        powersetId: 'beam_rifle',
        description: 'A charged energy beam that deals moderate energy damage. Holds briefly for a focused shot.',
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
            damageType: 'energy',
            value: 71.4,
            description: 'Moderate Energy DMG'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'br_cutting_beam',
        name: 'Cutting Beam',
        powersetId: 'beam_rifle',
        description: 'Sweeps a cutting beam across a cone of foes, dealing moderate energy damage to all targets in the area.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 12.74,
        rechargeTime: 12,
        castTime: 1.67,
        range: 60,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 51.6,
            description: 'Moderate Energy DMG in cone'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'br_aim',
        name: 'Aim',
        powersetId: 'beam_rifle',
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
        allowedEnhancementTypes: ['recharge', 'to_hit_buff'],
        maxSlots: 6
      },
      {
        id: 'br_lancer_shot',
        name: 'Lancer Shot',
        powersetId: 'beam_rifle',
        description: 'A long-range precision beam that deals high energy damage. Requires a brief charging period for maximum focus.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 14.35,
        rechargeTime: 12,
        castTime: 2.67,
        range: 150,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 164.6,
            description: 'High Energy DMG at long range'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'br_disintegrate',
        name: 'Disintegrate',
        powersetId: 'beam_rifle',
        description: 'A sustained beam that begins to disintegrate the target, dealing moderate energy damage over time. The disintegration effect causes the target to take significantly increased damage from all subsequent beam attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 10.4,
        rechargeTime: 16,
        castTime: 1.5,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 56.3,
            duration: 8,
            description: 'Moderate Energy DMG over time'
          },
          {
            type: 'debuff',
            target: 'enemy',
            value: 30,
            duration: 15,
            description: 'Disintegrate: +30% DMG from all beam attacks for 15s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'br_penetrating_ray',
        name: 'Penetrating Ray',
        powersetId: 'beam_rifle',
        description: 'A penetrating beam that passes through multiple foes in a narrow cone, dealing significant energy damage to all targets hit.',
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
            value: 75.6,
            description: 'Significant Energy DMG in narrow cone'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'br_overcharge',
        name: 'Overcharge',
        powersetId: 'beam_rifle',
        description: 'Overcharges the beam rifle to fire a devastating blast of energy at a single target, dealing extreme energy damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 14.35,
        rechargeTime: 10,
        castTime: 1.5,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'energy',
            value: 132.6,
            description: 'Extreme Energy DMG'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'range'],
        maxSlots: 6
      },
      {
        id: 'br_refractor_beam',
        name: 'Refractor Beam',
        powersetId: 'beam_rifle',
        description: 'Fires a massive beam that refracts off the primary target and chains to all nearby foes, dealing devastating energy damage. Disintegrated targets take even more damage and spread the effect.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 32,
        positionInSet: 9,
        enduranceCost: 20.8,
        rechargeTime: 120,
        castTime: 3.0,
        range: 0,
        maxTargets: 16,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'energy',
            value: 226.3,
            description: 'Devastating Energy DMG to all nearby foes'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 30,
            duration: 15,
            description: 'Spreads Disintegrate to all targets for 15s'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  }
];
