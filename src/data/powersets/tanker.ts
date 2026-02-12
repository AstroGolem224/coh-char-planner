import type { Powerset } from '../../types';

export const tankerPowersets: Powerset[] = [
  {
    id: 'invulnerability',
    name: 'Invulnerability',
    type: 'primary',
    archetypeId: 'tanker',
    description: 'Invulnerability grants you strong resistance to Smashing and Lethal damage, as well as some protection from other damage types. Your body becomes extremely tough and hard to injure.',
    icon: '/icons/powersets/invulnerability.svg',
    powers: [
      {
        id: 'resist_physical_damage',
        name: 'Resist Physical Damage',
        powersetId: 'invulnerability',
        description: 'You are naturally tough and inherently resistant to Smashing and Lethal damage. This power is always on and costs no endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'shield',
            target: 'self',
            damageType: 'smashing',
            value: 7.5,
            description: '7.5% resistance to Smashing damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'lethal',
            value: 7.5,
            description: '7.5% resistance to Lethal damage'
          }
        ],
        allowedEnhancementTypes: ['resistance'],
        maxSlots: 6
      },
      {
        id: 'temp_invulnerability',
        name: 'Temp Invulnerability',
        powersetId: 'invulnerability',
        description: 'When you activate this power, you become highly resistant to Smashing and Lethal damage for as long as you can pay the endurance cost.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 0.208,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'shield',
            target: 'self',
            damageType: 'smashing',
            value: 30,
            description: '30% resistance to Smashing damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'lethal',
            value: 30,
            description: '30% resistance to Lethal damage'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'dull_pain',
        name: 'Dull Pain',
        powersetId: 'invulnerability',
        description: 'You can activate this power to increase your maximum Hit Points for a short time. Also increases regeneration rate.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 10.4,
        rechargeTime: 360,
        castTime: 1.17,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'heal',
            target: 'self',
            value: 40,
            duration: 120,
            description: 'Increases maximum HP by 40% for 120 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            duration: 120,
            description: 'Increases regeneration rate for 120 seconds'
          }
        ],
        allowedEnhancementTypes: ['heal', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'unyielding',
        name: 'Unyielding',
        powersetId: 'invulnerability',
        description: 'When you activate this power, you become Unyielding. You gain resistance to all damage types except Toxic and Psionic, as well as protection from Hold, Immobilize, Disorient, and Knockback effects.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 0.312,
        rechargeTime: 10,
        castTime: 1.17,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'shield',
            target: 'self',
            damageType: 'smashing',
            value: 10,
            description: '10% resistance to Smashing damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'lethal',
            value: 10,
            description: '10% resistance to Lethal damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'fire',
            value: 10,
            description: '10% resistance to Fire damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'cold',
            value: 10,
            description: '10% resistance to Cold damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'energy',
            value: 10,
            description: '10% resistance to Energy damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'negative',
            value: 10,
            description: '10% resistance to Negative Energy damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 10.38,
            description: 'Protection from Hold, Immobilize, Stun, and Knockback'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'resist_energies',
        name: 'Resist Energies',
        powersetId: 'invulnerability',
        description: 'You gain resistance to Energy and Negative Energy damage. This power is always on and costs no endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'shield',
            target: 'self',
            damageType: 'energy',
            value: 7.5,
            description: '7.5% resistance to Energy damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'negative',
            value: 7.5,
            description: '7.5% resistance to Negative Energy damage'
          }
        ],
        allowedEnhancementTypes: ['resistance'],
        maxSlots: 6
      },
      {
        id: 'resist_elements',
        name: 'Resist Elements',
        powersetId: 'invulnerability',
        description: 'You are naturally resistant to Fire, Cold, and Toxic damage. This power is always on and costs no endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'shield',
            target: 'self',
            damageType: 'fire',
            value: 7.5,
            description: '7.5% resistance to Fire damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'cold',
            value: 7.5,
            description: '7.5% resistance to Cold damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'toxic',
            value: 7.5,
            description: '7.5% resistance to Toxic damage'
          }
        ],
        allowedEnhancementTypes: ['resistance'],
        maxSlots: 6
      },
      {
        id: 'invincibility',
        name: 'Invincibility',
        powersetId: 'invulnerability',
        description: 'While this power is active, you are incredibly hard to hit. Your defense increases for each nearby foe, up to a maximum of 10 enemies.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 0.208,
        rechargeTime: 10,
        castTime: 1.17,
        range: 8,
        maxTargets: 10,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 1.5,
            description: '1.5% defense per nearby enemy (up to 10 enemies)'
          },
          {
            type: 'buff',
            target: 'self',
            value: 2.5,
            description: '2.5% base defense to all attacks'
          }
        ],
        allowedEnhancementTypes: ['defense_buff', 'to_hit_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'tough_hide',
        name: 'Tough Hide',
        powersetId: 'invulnerability',
        description: 'Your skin is tough and thick. You gain a bonus to Defense against all attacks. This power is always on and costs no endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 5,
            description: '5% defense to all attack types'
          }
        ],
        allowedEnhancementTypes: ['defense_buff'],
        maxSlots: 6
      },
      {
        id: 'unstoppable',
        name: 'Unstoppable',
        powersetId: 'invulnerability',
        description: 'When you activate this power, you become extremely resistant to all damage types except Psionic. You also gain massive protection from Sleep, Hold, Immobilize, Knockback, and Disorient effects. After the duration expires, you are left exhausted and drained of endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 32,
        positionInSet: 9,
        enduranceCost: 25,
        rechargeTime: 1000,
        castTime: 2.03,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'shield',
            target: 'self',
            damageType: 'smashing',
            value: 70,
            duration: 180,
            description: '70% resistance to Smashing damage for 180 seconds'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'lethal',
            value: 70,
            duration: 180,
            description: '70% resistance to Lethal damage for 180 seconds'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'fire',
            value: 70,
            duration: 180,
            description: '70% resistance to Fire damage for 180 seconds'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'cold',
            value: 70,
            duration: 180,
            description: '70% resistance to Cold damage for 180 seconds'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'energy',
            value: 70,
            duration: 180,
            description: '70% resistance to Energy damage for 180 seconds'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'negative',
            value: 70,
            duration: 180,
            description: '70% resistance to Negative Energy damage for 180 seconds'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'toxic',
            value: 70,
            duration: 180,
            description: '70% resistance to Toxic damage for 180 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 100,
            duration: 180,
            description: 'Massive protection from status effects for 180 seconds'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'stone_armor',
    name: 'Stone Armor',
    type: 'primary',
    archetypeId: 'tanker',
    description: 'Stone Armor allows you to surround yourself with the power of the earth. You can create protective shells of rock, magma, and crystal that provide excellent resistance and defense.',
    icon: '/icons/powersets/stone_armor.svg',
    powers: [
      {
        id: 'rock_armor',
        name: 'Rock Armor',
        powersetId: 'stone_armor',
        description: 'When you activate this power, you are surrounded by a rock armor that provides excellent resistance to Smashing and Lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 0.208,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'shield',
            target: 'self',
            damageType: 'smashing',
            value: 30,
            description: '30% resistance to Smashing damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'lethal',
            value: 30,
            description: '30% resistance to Lethal damage'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'stone_skin',
        name: 'Stone Skin',
        powersetId: 'stone_armor',
        description: 'Your skin becomes as hard as stone, providing resistance to Smashing and Lethal damage. This power is always on and costs no endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 1,
        positionInSet: 2,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'shield',
            target: 'self',
            damageType: 'smashing',
            value: 7.5,
            description: '7.5% resistance to Smashing damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'lethal',
            value: 7.5,
            description: '7.5% resistance to Lethal damage'
          }
        ],
        allowedEnhancementTypes: ['resistance'],
        maxSlots: 6
      },
      {
        id: 'earths_embrace',
        name: "Earth's Embrace",
        powersetId: 'stone_armor',
        description: 'You can activate this power to increase your maximum Hit Points for a short time. Also increases regeneration rate dramatically.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 3,
        enduranceCost: 10.4,
        rechargeTime: 360,
        castTime: 1.17,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'heal',
            target: 'self',
            value: 40,
            duration: 120,
            description: 'Increases maximum HP by 40% for 120 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 200,
            duration: 120,
            description: 'Greatly increases regeneration rate for 120 seconds'
          }
        ],
        allowedEnhancementTypes: ['heal', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'mud_pots',
        name: 'Mud Pots',
        powersetId: 'stone_armor',
        description: 'While this power is active, you spawn a bubbling pool of mud around yourself that deals minor Fire damage and slows nearby foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 6,
        positionInSet: 4,
        enduranceCost: 0.312,
        rechargeTime: 10,
        castTime: 1.17,
        range: 8,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'fire',
            value: 5,
            description: 'Minor Fire damage over time to nearby foes'
          },
          {
            type: 'debuff',
            target: 'aoe',
            value: 20,
            description: '20% slow and -recharge to nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'endurance_reduction', 'slow'],
        maxSlots: 6
      },
      {
        id: 'rooted',
        name: 'Rooted',
        powersetId: 'stone_armor',
        description: 'While active, you are rooted in place but gain extreme regeneration and strong resistance to Immobilize, Hold, Sleep, Disorient, and Knockback effects. You also gain Toxic damage resistance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 8,
        positionInSet: 5,
        enduranceCost: 0.208,
        rechargeTime: 10,
        castTime: 1.17,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 300,
            description: 'Extreme regeneration boost'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'toxic',
            value: 30,
            description: '30% resistance to Toxic damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 10.38,
            description: 'Protection from Immobilize, Hold, Sleep, Stun, and Knockback'
          },
          {
            type: 'debuff',
            target: 'self',
            value: -100,
            description: 'Cannot move while active'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'heal', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'brimstone_armor',
        name: 'Brimstone Armor',
        powersetId: 'stone_armor',
        description: 'When you activate this power, you surround yourself with molten rock armor that provides excellent resistance to Fire damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 12,
        positionInSet: 6,
        enduranceCost: 0.208,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'shield',
            target: 'self',
            damageType: 'fire',
            value: 30,
            description: '30% resistance to Fire damage'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'crystal_armor',
        name: 'Crystal Armor',
        powersetId: 'stone_armor',
        description: 'When you activate this power, you surround yourself with crystal armor that provides excellent resistance to Energy and Negative Energy damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 18,
        positionInSet: 7,
        enduranceCost: 0.208,
        rechargeTime: 4,
        castTime: 1.17,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'shield',
            target: 'self',
            damageType: 'energy',
            value: 30,
            description: '30% resistance to Energy damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'negative',
            value: 30,
            description: '30% resistance to Negative Energy damage'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'minerals',
        name: 'Minerals',
        powersetId: 'stone_armor',
        description: 'You are naturally rich in minerals that protect you from Cold damage and Psionic damage. This power is always on and costs no endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 26,
        positionInSet: 8,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'shield',
            target: 'self',
            damageType: 'cold',
            value: 15,
            description: '15% resistance to Cold damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'psionic',
            value: 10,
            description: '10% resistance to Psionic damage'
          }
        ],
        allowedEnhancementTypes: ['resistance'],
        maxSlots: 6
      },
      {
        id: 'granite_armor',
        name: 'Granite Armor',
        powersetId: 'stone_armor',
        description: 'When you activate Granite Armor, you become a massive stone juggernaut. You gain incredible resistance to all damage types and excellent defense. However, your mobility, recharge, and damage output are severely reduced.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 32,
        positionInSet: 9,
        enduranceCost: 0.39,
        rechargeTime: 10,
        castTime: 2.03,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'shield',
            target: 'self',
            damageType: 'smashing',
            value: 40,
            description: '40% resistance to Smashing damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'lethal',
            value: 40,
            description: '40% resistance to Lethal damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'fire',
            value: 30,
            description: '30% resistance to Fire damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'cold',
            value: 30,
            description: '30% resistance to Cold damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'energy',
            value: 30,
            description: '30% resistance to Energy damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'negative',
            value: 30,
            description: '30% resistance to Negative Energy damage'
          },
          {
            type: 'shield',
            target: 'self',
            damageType: 'toxic',
            value: 30,
            description: '30% resistance to Toxic damage'
          },
          {
            type: 'buff',
            target: 'self',
            value: 15,
            description: '15% defense to all attack types'
          },
          {
            type: 'debuff',
            target: 'self',
            value: -65,
            description: '-65% movement speed, -30% recharge, -30% damage'
          }
        ],
        allowedEnhancementTypes: ['resistance', 'defense_buff', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'super_strength',
    name: 'Super Strength',
    type: 'secondary',
    archetypeId: 'tanker',
    description: 'Super Strength gives you the ability to perform tremendous feats of strength. Your powerful attacks deal devastating Smashing damage and can knock down or knock back foes.',
    icon: '/icons/powersets/super_strength.svg',
    powers: [
      {
        id: 'jab',
        name: 'Jab',
        powersetId: 'super_strength',
        description: 'A quick jab that deals minor Smashing damage. Very fast and has a chance to Disorient the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 4.37,
        rechargeTime: 2,
        castTime: 1.07,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 36.15,
            description: 'Minor Smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 20,
            duration: 8,
            description: '20% chance to Disorient target for 8 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'punch',
        name: 'Punch',
        powersetId: 'super_strength',
        description: 'A strong punch that deals moderate Smashing damage and has a chance to knock back the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 2,
        enduranceCost: 6.86,
        rechargeTime: 4,
        castTime: 1.2,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 61.33,
            description: 'Moderate Smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 40,
            description: '40% chance to knock back target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'haymaker',
        name: 'Haymaker',
        powersetId: 'super_strength',
        description: 'A slow but devastating haymaker. Deals high Smashing damage and has a greater chance to knock back the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 10.2,
        rechargeTime: 8,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 102.6,
            description: 'High Smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 60,
            description: '60% chance to knock back target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'hand_clap',
        name: 'Hand Clap',
        powersetId: 'super_strength',
        description: 'You can clap your hands together to create a powerful shockwave. This attack deals no damage but has a high chance to Disorient and knock back nearby foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 10,
        positionInSet: 4,
        enduranceCost: 13,
        rechargeTime: 30,
        castTime: 1.17,
        range: 15,
        maxTargets: 10,
        effects: [
          {
            type: 'control',
            target: 'aoe',
            value: 80,
            duration: 8,
            description: '80% chance to Disorient nearby foes for 8 seconds'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 100,
            description: 'Knock back nearby foes'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'endurance_reduction', 'stun', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'knockout_blow',
        name: 'Knockout Blow',
        powersetId: 'super_strength',
        description: 'A devastating uppercut that deals extreme Smashing damage and has a high chance to Hold and knock up the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 16,
        positionInSet: 5,
        enduranceCost: 15,
        rechargeTime: 25,
        castTime: 2.23,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 164.3,
            description: 'Extreme Smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 80,
            duration: 12,
            description: '80% chance to Hold target for 12 seconds'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 100,
            description: 'Knock up target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'hold', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'rage',
        name: 'Rage',
        powersetId: 'super_strength',
        description: 'When you activate Rage, your attack damage and chance to hit are greatly increased for a short time. When the effect wears off, you suffer a period of disorientation and weakness.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 20,
        positionInSet: 6,
        enduranceCost: 5.2,
        rechargeTime: 120,
        castTime: 1.17,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 80,
            duration: 120,
            description: '+80% damage for 120 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            duration: 120,
            description: '+20% to hit for 120 seconds'
          },
          {
            type: 'debuff',
            target: 'self',
            value: -100,
            duration: 10,
            description: 'After crash: -100% damage, -25% defense for 10 seconds'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'to_hit_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'hurl',
        name: 'Hurl',
        powersetId: 'super_strength',
        description: 'You can rip up a chunk of ground and hurl it at your target. This ranged attack deals high Smashing damage and can knock back the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 7,
        enduranceCost: 12.48,
        rechargeTime: 10,
        castTime: 2.5,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 102.6,
            description: 'High Smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 60,
            description: '60% chance to knock back target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'range', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'foot_stomp',
        name: 'Foot Stomp',
        powersetId: 'super_strength',
        description: 'Using your superior might, you can stomp the ground, causing a localized earthquake. This attack deals moderate Smashing damage to all nearby foes and can knock them down.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 35,
        positionInSet: 8,
        enduranceCost: 18.5,
        rechargeTime: 20,
        castTime: 2.1,
        range: 15,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 82.6,
            description: 'Moderate Smashing damage to all nearby foes'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 80,
            description: '80% chance to knock down targets'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'super_strength_tier9',
        name: 'Tier 9 Power',
        powersetId: 'super_strength',
        description: 'Tier 9 power slot available at level 38.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 38,
        positionInSet: 9,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 0,
        effects: [],
        allowedEnhancementTypes: [],
        maxSlots: 6
      }
    ]
  },
  {
    id: 'stone_melee',
    name: 'Stone Melee',
    type: 'secondary',
    archetypeId: 'tanker',
    description: 'Stone Melee allows you to pummel your foes with stone-encased fists and massive boulders. Your attacks deal devastating Smashing damage and can disorient or knock down enemies.',
    icon: '/icons/powersets/stone_melee.svg',
    powers: [
      {
        id: 'stone_fist',
        name: 'Stone Fist',
        powersetId: 'stone_melee',
        description: 'Your fists become as hard as stone, allowing you to deal moderate Smashing damage with a quick punch.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 1,
        positionInSet: 1,
        enduranceCost: 6.86,
        rechargeTime: 4,
        castTime: 1.2,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 61.33,
            description: 'Moderate Smashing damage'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'stone_mallet',
        name: 'Stone Mallet',
        powersetId: 'stone_melee',
        description: 'You summon a stone mallet to smash your foe. This attack deals high Smashing damage and can disorient the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 2,
        positionInSet: 2,
        enduranceCost: 10.2,
        rechargeTime: 8,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 102.6,
            description: 'High Smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 40,
            duration: 8,
            description: '40% chance to Disorient target for 8 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'heavy_mallet',
        name: 'Heavy Mallet',
        powersetId: 'stone_melee',
        description: 'You create a massive stone mallet and swing it in a wide arc. This attack deals superior Smashing damage and has a high chance to knock down the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 13.52,
        rechargeTime: 12,
        castTime: 2.0,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 133.4,
            description: 'Superior Smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 80,
            description: '80% chance to knock down target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'build_up',
        name: 'Build Up',
        powersetId: 'stone_melee',
        description: 'Greatly increases your damage and chance to hit for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 10,
        positionInSet: 4,
        enduranceCost: 5.2,
        rechargeTime: 90,
        castTime: 1.17,
        range: 0,
        maxTargets: 0,
        effects: [
          {
            type: 'buff',
            target: 'self',
            value: 80,
            duration: 10,
            description: '+80% damage for 10 seconds'
          },
          {
            type: 'buff',
            target: 'self',
            value: 20,
            duration: 10,
            description: '+20% to hit for 10 seconds'
          }
        ],
        allowedEnhancementTypes: ['recharge', 'to_hit_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'fault',
        name: 'Fault',
        powersetId: 'stone_melee',
        description: 'You create a localized earthquake that deals minor Smashing damage to all nearby foes and has a high chance to knock them down.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 16,
        positionInSet: 5,
        enduranceCost: 13,
        rechargeTime: 20,
        castTime: 2.1,
        range: 15,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 41.1,
            description: 'Minor Smashing damage to all nearby foes'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 80,
            description: '80% chance to knock down targets'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'hurl_boulder',
        name: 'Hurl Boulder',
        powersetId: 'stone_melee',
        description: 'You hurl a massive boulder at your target. This ranged attack deals high Smashing damage and can knock back the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 20,
        positionInSet: 6,
        enduranceCost: 12.48,
        rechargeTime: 10,
        castTime: 2.5,
        range: 80,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 102.6,
            description: 'High Smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 60,
            description: '60% chance to knock back target'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'range', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'tremor',
        name: 'Tremor',
        powersetId: 'stone_melee',
        description: 'You can cause a powerful tremor that damages and knocks down foes in a wide area around you.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 28,
        positionInSet: 7,
        enduranceCost: 18.5,
        rechargeTime: 20,
        castTime: 3.3,
        range: 15,
        maxTargets: 10,
        effects: [
          {
            type: 'damage',
            target: 'aoe',
            damageType: 'smashing',
            value: 82.6,
            description: 'Moderate Smashing damage to all nearby foes'
          },
          {
            type: 'control',
            target: 'aoe',
            value: 90,
            description: '90% chance to knock down targets'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'seismic_smash',
        name: 'Seismic Smash',
        powersetId: 'stone_melee',
        description: 'You create a seismic fissure beneath your target, dealing extreme Smashing damage and holding them in place.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 35,
        positionInSet: 8,
        enduranceCost: 15,
        rechargeTime: 20,
        castTime: 1.5,
        range: 7,
        maxTargets: 1,
        effects: [
          {
            type: 'damage',
            target: 'enemy',
            damageType: 'smashing',
            value: 164.3,
            description: 'Extreme Smashing damage'
          },
          {
            type: 'control',
            target: 'enemy',
            value: 100,
            duration: 12,
            description: 'Hold target for 12 seconds'
          }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'hold'],
        maxSlots: 6
      },
      {
        id: 'stone_melee_tier9',
        name: 'Tier 9 Power',
        powersetId: 'stone_melee',
        description: 'Tier 9 power slot available at level 38.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 38,
        positionInSet: 9,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 0,
        effects: [],
        allowedEnhancementTypes: [],
        maxSlots: 6
      }
    ]
  }
];
