import type { Powerset } from '../../types';

export const poolPowersets: Powerset[] = [
  // ── Leaping ──────────────────────────────────────────────────────────
  {
    id: 'pool_leaping',
    name: 'Leaping',
    type: 'pool',
    archetypeId: 'all',
    description: 'The Leaping power pool enhances your jumping abilities, offering high mobility and defensive options through acrobatic maneuvers.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'pool_leaping_combat_jumping',
        name: 'Combat Jumping',
        powersetId: 'pool_leaping',
        description: 'Toggle that grants a small defense bonus to melee, ranged, and AoE attacks while providing immobilization protection.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 1,
        enduranceCost: 0.26,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'buff', target: 'self', damageType: 'smashing', value: 2.5, description: '+2.5% Melee DEF' },
          { type: 'buff', target: 'self', damageType: 'lethal', value: 2.5, description: '+2.5% Ranged DEF' },
          { type: 'buff', target: 'self', damageType: 'fire', value: 2.5, description: '+2.5% AoE DEF' },
          { type: 'shield', target: 'self', value: 100, description: 'Immobilization protection' }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_leaping_kick',
        name: 'Kick',
        powersetId: 'pool_leaping',
        description: 'A basic kick attack that deals moderate smashing damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 2,
        enduranceCost: 5.2,
        rechargeTime: 6,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          { type: 'damage', target: 'enemy', damageType: 'smashing', value: 45.8, description: 'Moderate smashing damage' }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_leaping_super_jump',
        name: 'Super Jump',
        powersetId: 'pool_leaping',
        description: 'Toggle that allows you to leap tremendous distances in a single bound.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 0.39,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'movement', target: 'self', value: 100, description: 'Greatly increased jump height and distance' }
        ],
        allowedEnhancementTypes: ['jump', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_leaping_spring_attack',
        name: 'Spring Attack',
        powersetId: 'pool_leaping',
        description: 'Leap into the air and crash down on nearby foes, dealing smashing damage and knocking them down.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 4,
        enduranceCost: 13.0,
        rechargeTime: 20,
        castTime: 1.5,
        range: 0,
        maxTargets: 10,
        effects: [
          { type: 'damage', target: 'aoe', damageType: 'smashing', value: 62.5, description: 'Moderate PBAoE smashing damage' },
          { type: 'control', target: 'aoe', value: 0.8, description: 'Knockdown' }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'knockback'],
        maxSlots: 6
      },
      {
        id: 'pool_leaping_acrobatics',
        name: 'Acrobatics',
        powersetId: 'pool_leaping',
        description: 'Auto power that provides knockback protection and a small defense bonus.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 14,
        positionInSet: 5,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'shield', target: 'self', value: 100, description: 'Knockback protection' },
          { type: 'buff', target: 'self', damageType: 'smashing', value: 1.5, description: '+1.5% DEF all' }
        ],
        allowedEnhancementTypes: ['endurance_reduction'],
        maxSlots: 6
      }
    ]
  },

  // ── Speed ────────────────────────────────────────────────────────────
  {
    id: 'pool_speed',
    name: 'Speed',
    type: 'pool',
    archetypeId: 'all',
    description: 'The Speed power pool grants super-fast movement and the ability to hasten all your power recharge times.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'pool_speed_flurry',
        name: 'Flurry',
        powersetId: 'pool_speed',
        description: 'A rapid flurry of punches that deals minor smashing damage to a single target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 1,
        enduranceCost: 5.2,
        rechargeTime: 4,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          { type: 'damage', target: 'enemy', damageType: 'smashing', value: 30.4, description: 'Minor smashing damage' }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_speed_super_speed',
        name: 'Super Speed',
        powersetId: 'pool_speed',
        description: 'Toggle that allows you to run at incredible speeds, phasing past enemies.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 2,
        enduranceCost: 0.39,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'movement', target: 'self', value: 100, description: 'Greatly increased run speed' }
        ],
        allowedEnhancementTypes: ['run_speed', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_speed_hasten',
        name: 'Hasten',
        powersetId: 'pool_speed',
        description: 'Greatly increases your power recharge speed by 70% for 120 seconds.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 5.2,
        rechargeTime: 450,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'buff', target: 'self', value: 70, duration: 120, description: '+70% Recharge for 120s' }
        ],
        allowedEnhancementTypes: ['recharge'],
        maxSlots: 6
      },
      {
        id: 'pool_speed_speed_phase',
        name: 'Speed Phase',
        powersetId: 'pool_speed',
        description: 'Phase shifts you out of normal space, making you intangible but unable to affect others.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 4,
        enduranceCost: 10.0,
        rechargeTime: 30,
        castTime: 1.0,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'shield', target: 'self', value: 100, duration: 30, description: 'Phase shift — intangible for 30s' }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_speed_burnout',
        name: 'Burnout',
        powersetId: 'pool_speed',
        description: 'Instantly recharges all currently recharging powers at the cost of significant endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 5,
        enduranceCost: 25.0,
        rechargeTime: 600,
        castTime: 3.0,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'buff', target: 'self', value: 100, description: 'Recharges all powers instantly' }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },

  // ── Flight ───────────────────────────────────────────────────────────
  {
    id: 'pool_flight',
    name: 'Flight',
    type: 'pool',
    archetypeId: 'all',
    description: 'The Flight power pool grants the ability to fly and provides airborne defensive advantages.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'pool_flight_hover',
        name: 'Hover',
        powersetId: 'pool_flight',
        description: 'Toggle that grants slow flight and a small defense bonus to ranged and AoE attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 1,
        enduranceCost: 0.26,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'buff', target: 'self', damageType: 'energy', value: 2.5, description: '+2.5% Ranged DEF' },
          { type: 'buff', target: 'self', damageType: 'fire', value: 2.5, description: '+2.5% AoE DEF' },
          { type: 'movement', target: 'self', value: 30, description: 'Slow flight' }
        ],
        allowedEnhancementTypes: ['defense_buff', 'fly_speed', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_flight_air_superiority',
        name: 'Air Superiority',
        powersetId: 'pool_flight',
        description: 'A melee attack that deals moderate smashing damage and can knock flying targets out of the sky.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 2,
        enduranceCost: 5.2,
        rechargeTime: 8,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          { type: 'damage', target: 'enemy', damageType: 'smashing', value: 52.3, description: 'Moderate smashing damage' },
          { type: 'control', target: 'enemy', value: 1.0, description: '-Fly on target' }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_flight_fly',
        name: 'Fly',
        powersetId: 'pool_flight',
        description: 'Toggle that allows you to fly at high speed.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 0.39,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'movement', target: 'self', value: 100, description: 'Fast flight' }
        ],
        allowedEnhancementTypes: ['fly_speed', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_flight_afterburner',
        name: 'Afterburner',
        powersetId: 'pool_flight',
        description: 'Toggle that significantly boosts your fly speed beyond normal limits.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 14,
        positionInSet: 4,
        enduranceCost: 0.26,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'movement', target: 'self', value: 50, description: 'Additional fly speed boost' }
        ],
        allowedEnhancementTypes: ['fly_speed', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_flight_evasive_maneuvers',
        name: 'Evasive Maneuvers',
        powersetId: 'pool_flight',
        description: 'Auto power that grants a small defense bonus to all positions and additional fly speed.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 14,
        positionInSet: 5,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'buff', target: 'self', damageType: 'smashing', value: 1.5, description: '+1.5% DEF all' },
          { type: 'movement', target: 'self', value: 20, description: 'Additional fly speed' }
        ],
        allowedEnhancementTypes: ['defense_buff', 'fly_speed', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },

  // ── Fighting ─────────────────────────────────────────────────────────
  {
    id: 'pool_fighting',
    name: 'Fighting',
    type: 'pool',
    archetypeId: 'all',
    description: 'The Fighting power pool provides melee combat abilities and key defensive toggles that boost resistance and defense.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'pool_fighting_boxing',
        name: 'Boxing',
        powersetId: 'pool_fighting',
        description: 'A quick punch that deals minor smashing damage with a chance to stun the target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 1,
        enduranceCost: 5.2,
        rechargeTime: 4,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          { type: 'damage', target: 'enemy', damageType: 'smashing', value: 30.4, description: 'Minor smashing damage' },
          { type: 'control', target: 'enemy', value: 0.15, duration: 2, description: 'Chance for stun (15%)' }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction', 'stun'],
        maxSlots: 6
      },
      {
        id: 'pool_fighting_tough',
        name: 'Tough',
        powersetId: 'pool_fighting',
        description: 'Toggle that significantly increases your resistance to smashing and lethal damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 2,
        enduranceCost: 0.26,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'shield', target: 'self', damageType: 'smashing', value: 15, description: '+15% Smashing RES' },
          { type: 'shield', target: 'self', damageType: 'lethal', value: 15, description: '+15% Lethal RES' }
        ],
        allowedEnhancementTypes: ['resistance', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_fighting_weave',
        name: 'Weave',
        powersetId: 'pool_fighting',
        description: 'Toggle that grants a significant defense bonus to melee, ranged, and AoE attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 0.26,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'buff', target: 'self', damageType: 'smashing', value: 5, description: '+5% Melee DEF' },
          { type: 'buff', target: 'self', damageType: 'lethal', value: 5, description: '+5% Ranged DEF' },
          { type: 'buff', target: 'self', damageType: 'fire', value: 5, description: '+5% AoE DEF' }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_fighting_cross_punch',
        name: 'Cross Punch',
        powersetId: 'pool_fighting',
        description: 'A powerful cross punch that deals moderate AoE smashing damage to nearby foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 4,
        enduranceCost: 10.4,
        rechargeTime: 14,
        castTime: 1.17,
        range: 7,
        maxTargets: 5,
        effects: [
          { type: 'damage', target: 'aoe', damageType: 'smashing', value: 56.8, description: 'Moderate AoE smashing damage' }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_fighting_kick',
        name: 'Kick',
        powersetId: 'pool_fighting',
        description: 'A solid kick that deals moderate smashing damage to a single target.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 5,
        enduranceCost: 5.2,
        rechargeTime: 6,
        castTime: 1.0,
        range: 7,
        maxTargets: 1,
        effects: [
          { type: 'damage', target: 'enemy', damageType: 'smashing', value: 45.8, description: 'Moderate smashing damage' }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },

  // ── Leadership ───────────────────────────────────────────────────────
  {
    id: 'pool_leadership',
    name: 'Leadership',
    type: 'pool',
    archetypeId: 'all',
    description: 'The Leadership power pool provides team-wide aura buffs that boost defense, damage, and accuracy for you and nearby allies.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'pool_leadership_maneuvers',
        name: 'Maneuvers',
        powersetId: 'pool_leadership',
        description: 'Toggle aura that grants you and nearby allies a defense bonus to melee, ranged, and AoE attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 1,
        enduranceCost: 0.26,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 255,
        effects: [
          { type: 'buff', target: 'ally', damageType: 'smashing', value: 3.5, description: '+3.5% Melee DEF (self+allies)' },
          { type: 'buff', target: 'ally', damageType: 'lethal', value: 3.5, description: '+3.5% Ranged DEF (self+allies)' },
          { type: 'buff', target: 'ally', damageType: 'fire', value: 3.5, description: '+3.5% AoE DEF (self+allies)' }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_leadership_assault',
        name: 'Assault',
        powersetId: 'pool_leadership',
        description: 'Toggle aura that increases damage output for you and nearby allies by 10%.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 2,
        enduranceCost: 0.26,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 255,
        effects: [
          { type: 'buff', target: 'ally', value: 10, description: '+10% Damage (self+allies)' }
        ],
        allowedEnhancementTypes: ['endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_leadership_tactics',
        name: 'Tactics',
        powersetId: 'pool_leadership',
        description: 'Toggle aura that increases accuracy and perception for you and nearby allies.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 0.26,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 255,
        effects: [
          { type: 'buff', target: 'ally', value: 9, description: '+9% ToHit (self+allies)' },
          { type: 'buff', target: 'ally', value: 100, description: '+Perception (self+allies)' }
        ],
        allowedEnhancementTypes: ['to_hit_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_leadership_vengeance',
        name: 'Vengeance',
        powersetId: 'pool_leadership',
        description: 'Inspires your allies with a powerful buff by rallying near a defeated teammate.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 4,
        enduranceCost: 11.7,
        rechargeTime: 300,
        castTime: 2.0,
        range: 20,
        maxTargets: 255,
        effects: [
          { type: 'buff', target: 'ally', damageType: 'smashing', value: 10, duration: 120, description: '+10% DEF all to team for 120s' },
          { type: 'buff', target: 'ally', value: 10, duration: 120, description: '+10% ToHit to team for 120s' }
        ],
        allowedEnhancementTypes: ['defense_buff', 'to_hit_buff', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_leadership_victory_rush',
        name: 'Victory Rush',
        powersetId: 'pool_leadership',
        description: 'Auto power that increases your regeneration rate after defeating foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 14,
        positionInSet: 5,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'buff', target: 'self', value: 50, description: '+Regen when defeating foes' }
        ],
        allowedEnhancementTypes: ['heal'],
        maxSlots: 6
      }
    ]
  },

  // ── Concealment ──────────────────────────────────────────────────────
  {
    id: 'pool_concealment',
    name: 'Concealment',
    type: 'pool',
    archetypeId: 'all',
    description: 'The Concealment power pool provides stealth, invisibility, and defensive evasion abilities.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'pool_concealment_stealth',
        name: 'Stealth',
        powersetId: 'pool_concealment',
        description: 'Toggle that grants partial invisibility and a small defense bonus to melee and ranged attacks.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 1,
        enduranceCost: 0.26,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'buff', target: 'self', damageType: 'smashing', value: 2.5, description: '+2.5% Melee DEF' },
          { type: 'buff', target: 'self', damageType: 'lethal', value: 2.5, description: '+2.5% Ranged DEF' },
          { type: 'buff', target: 'self', value: 100, description: 'Stealth (partial invisibility)' }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_concealment_grant_invisibility',
        name: 'Grant Invisibility',
        powersetId: 'pool_concealment',
        description: 'Grants an ally stealth and a small defense bonus.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 2,
        enduranceCost: 7.8,
        rechargeTime: 6,
        castTime: 1.17,
        range: 60,
        maxTargets: 1,
        effects: [
          { type: 'buff', target: 'ally', damageType: 'smashing', value: 5, description: '+5% DEF all on ally' },
          { type: 'buff', target: 'ally', value: 100, description: 'Stealth on ally' }
        ],
        allowedEnhancementTypes: ['defense_buff', 'recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_concealment_invisibility',
        name: 'Invisibility',
        powersetId: 'pool_concealment',
        description: 'Toggle that makes you fully invisible and grants strong defense but prevents attacking.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 0.39,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'buff', target: 'self', damageType: 'smashing', value: 5, description: '+5% DEF all' },
          { type: 'buff', target: 'self', value: 100, description: 'Full invisibility (cannot attack)' }
        ],
        allowedEnhancementTypes: ['defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_concealment_phase_shift',
        name: 'Phase Shift',
        powersetId: 'pool_concealment',
        description: 'Makes you intangible for 30 seconds, immune to all damage but unable to affect others.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 4,
        enduranceCost: 10.0,
        rechargeTime: 120,
        castTime: 1.0,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'shield', target: 'self', value: 100, duration: 30, description: 'Intangible for 30s' }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_concealment_misdirection',
        name: 'Misdirection',
        powersetId: 'pool_concealment',
        description: 'Placates the target, causing them to forget about you and stop attacking.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 5,
        enduranceCost: 7.8,
        rechargeTime: 60,
        castTime: 1.17,
        range: 60,
        maxTargets: 1,
        effects: [
          { type: 'control', target: 'enemy', value: 1.0, duration: 10, description: 'Placate target' }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },

  // ── Medicine ─────────────────────────────────────────────────────────
  {
    id: 'pool_medicine',
    name: 'Medicine',
    type: 'pool',
    archetypeId: 'all',
    description: 'The Medicine power pool provides healing, mez protection, and resurrection abilities through medical expertise.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'pool_medicine_aid_other',
        name: 'Aid Other',
        powersetId: 'pool_medicine',
        description: 'Heals a single ally for a significant amount; interruptible.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 1,
        enduranceCost: 9.1,
        rechargeTime: 8,
        castTime: 2.37,
        range: 60,
        maxTargets: 1,
        effects: [
          { type: 'heal', target: 'ally', value: 185.4, description: 'Heal ally (interruptible)' }
        ],
        allowedEnhancementTypes: ['heal', 'recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_medicine_stimulant',
        name: 'Stimulant',
        powersetId: 'pool_medicine',
        description: 'Protects an ally from mez effects (hold, stun, sleep, immobilize) for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 2,
        enduranceCost: 7.8,
        rechargeTime: 30,
        castTime: 1.17,
        range: 60,
        maxTargets: 1,
        effects: [
          { type: 'shield', target: 'ally', value: 100, duration: 60, description: 'Mez protection on ally for 60s' }
        ],
        allowedEnhancementTypes: ['recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_medicine_aid_self',
        name: 'Aid Self',
        powersetId: 'pool_medicine',
        description: 'Heals yourself for a significant amount; interruptible.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 9.1,
        rechargeTime: 20,
        castTime: 2.37,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'heal', target: 'self', value: 185.4, description: 'Self heal (interruptible)' }
        ],
        allowedEnhancementTypes: ['heal', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'pool_medicine_injection',
        name: 'Injection',
        powersetId: 'pool_medicine',
        description: 'Resurrects a defeated ally with some health and endurance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 4,
        enduranceCost: 15.6,
        rechargeTime: 180,
        castTime: 3.0,
        range: 20,
        maxTargets: 1,
        effects: [
          { type: 'heal', target: 'ally', value: 50, description: 'Resurrect ally with ~50% HP' }
        ],
        allowedEnhancementTypes: ['heal', 'recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_medicine_field_medic',
        name: 'Field Medic',
        powersetId: 'pool_medicine',
        description: 'Auto power that makes your Aid Other and Aid Self powers uninterruptible.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 14,
        positionInSet: 5,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'buff', target: 'self', value: 100, description: 'Heals become uninterruptible' }
        ],
        allowedEnhancementTypes: [],
        maxSlots: 6
      }
    ]
  },

  // ── Teleportation ────────────────────────────────────────────────────
  {
    id: 'pool_teleportation',
    name: 'Teleportation',
    type: 'pool',
    archetypeId: 'all',
    description: 'The Teleportation power pool allows instant travel by teleporting yourself, allies, or foes across distances.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'pool_teleportation_teleport',
        name: 'Teleport',
        powersetId: 'pool_teleportation',
        description: 'Instantly teleport yourself to a target location within range.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 1,
        enduranceCost: 10.4,
        rechargeTime: 2,
        castTime: 1.0,
        range: 200,
        maxTargets: 1,
        effects: [
          { type: 'movement', target: 'self', value: 100, description: 'Teleport to target location' }
        ],
        allowedEnhancementTypes: ['range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_teleportation_recall_friend',
        name: 'Recall Friend',
        powersetId: 'pool_teleportation',
        description: 'Teleports a single ally to your location.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 2,
        enduranceCost: 10.4,
        rechargeTime: 30,
        castTime: 2.0,
        range: 500,
        maxTargets: 1,
        effects: [
          { type: 'movement', target: 'ally', value: 100, description: 'Teleport ally to your location' }
        ],
        allowedEnhancementTypes: ['recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_teleportation_teleport_foe',
        name: 'Teleport Foe',
        powersetId: 'pool_teleportation',
        description: 'Teleports a single enemy to your location.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 13.0,
        rechargeTime: 20,
        castTime: 1.17,
        range: 200,
        maxTargets: 1,
        effects: [
          { type: 'movement', target: 'enemy', value: 100, description: 'Teleport enemy to your location' }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_teleportation_team_teleport',
        name: 'Team Teleport',
        powersetId: 'pool_teleportation',
        description: 'Teleports your entire team to a target location.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 4,
        enduranceCost: 20.8,
        rechargeTime: 60,
        castTime: 2.0,
        range: 200,
        maxTargets: 8,
        effects: [
          { type: 'movement', target: 'ally', value: 100, description: 'Teleport entire team to location' }
        ],
        allowedEnhancementTypes: ['recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_teleportation_long_range_teleport',
        name: 'Long Range Teleport',
        powersetId: 'pool_teleportation',
        description: 'Teleport yourself to a different zone or extremely distant location.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 5,
        enduranceCost: 15.6,
        rechargeTime: 120,
        castTime: 3.0,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'movement', target: 'self', value: 100, description: 'Teleport to another zone' }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },

  // ── Presence ─────────────────────────────────────────────────────────
  {
    id: 'pool_presence',
    name: 'Presence',
    type: 'pool',
    archetypeId: 'all',
    description: 'The Presence power pool provides intimidation-based powers including taunts, fears, and placation.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'pool_presence_provoke',
        name: 'Provoke',
        powersetId: 'pool_presence',
        description: 'Taunts a single target, forcing them to attack you.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 1,
        enduranceCost: 5.2,
        rechargeTime: 10,
        castTime: 1.17,
        range: 60,
        maxTargets: 1,
        effects: [
          { type: 'control', target: 'enemy', value: 1.0, duration: 10, description: 'Taunt target for 10s' }
        ],
        allowedEnhancementTypes: ['taunt', 'recharge', 'range'],
        maxSlots: 6
      },
      {
        id: 'pool_presence_intimidate',
        name: 'Intimidate',
        powersetId: 'pool_presence',
        description: 'Terrifies a single target, causing them to cower in fear.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 2,
        enduranceCost: 7.8,
        rechargeTime: 16,
        castTime: 1.17,
        range: 60,
        maxTargets: 1,
        effects: [
          { type: 'control', target: 'enemy', value: 1.0, duration: 10, description: 'Fear single target for 10s' }
        ],
        allowedEnhancementTypes: ['accuracy', 'fear', 'recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_presence_invoke_panic',
        name: 'Invoke Panic',
        powersetId: 'pool_presence',
        description: 'Terrorizes all nearby enemies in a large area, causing them to flee in fear.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 13.0,
        rechargeTime: 60,
        castTime: 2.0,
        range: 0,
        maxTargets: 10,
        effects: [
          { type: 'control', target: 'aoe', value: 1.0, duration: 10, description: 'AoE fear for 10s' }
        ],
        allowedEnhancementTypes: ['accuracy', 'fear', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_presence_unrelenting',
        name: 'Unrelenting',
        powersetId: 'pool_presence',
        description: 'If defeated, automatically revives you with a self-buff that increases damage and defense.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 4,
        enduranceCost: 0,
        rechargeTime: 600,
        castTime: 1.0,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'heal', target: 'self', value: 50, description: 'Self-rez with 50% HP' },
          { type: 'buff', target: 'self', value: 20, duration: 60, description: '+20% DMG for 60s after rez' },
          { type: 'buff', target: 'self', damageType: 'smashing', value: 15, duration: 60, description: '+15% DEF all for 60s after rez' }
        ],
        allowedEnhancementTypes: ['heal', 'recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_presence_pacify',
        name: 'Pacify',
        powersetId: 'pool_presence',
        description: 'Placates a single target, causing them to forget about you and stop attacking.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 5,
        enduranceCost: 7.8,
        rechargeTime: 60,
        castTime: 1.17,
        range: 60,
        maxTargets: 1,
        effects: [
          { type: 'control', target: 'enemy', value: 1.0, duration: 10, description: 'Placate target' }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },

  // ── Sorcery ──────────────────────────────────────────────────────────
  {
    id: 'pool_sorcery',
    name: 'Sorcery',
    type: 'pool',
    archetypeId: 'all',
    description: 'The Sorcery power pool channels arcane forces for flight, protection, attacks, and ally support.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'pool_sorcery_mystic_flight',
        name: 'Mystic Flight',
        powersetId: 'pool_sorcery',
        description: 'Toggle that grants flight, a built-in teleport, and a small defense bonus.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 1,
        enduranceCost: 0.26,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'movement', target: 'self', value: 100, description: 'Flight with built-in teleport' },
          { type: 'buff', target: 'self', damageType: 'smashing', value: 1.5, description: '+1.5% DEF all' }
        ],
        allowedEnhancementTypes: ['fly_speed', 'defense_buff', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_sorcery_spirit_ward',
        name: 'Spirit Ward',
        powersetId: 'pool_sorcery',
        description: 'Places an absorb shield on an ally that absorbs incoming damage.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 2,
        enduranceCost: 9.1,
        rechargeTime: 15,
        castTime: 1.17,
        range: 60,
        maxTargets: 1,
        effects: [
          { type: 'shield', target: 'ally', value: 150, duration: 30, description: 'Absorb shield on ally (~150 HP)' }
        ],
        allowedEnhancementTypes: ['heal', 'recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_sorcery_arcane_bolt',
        name: 'Arcane Bolt',
        powersetId: 'pool_sorcery',
        description: 'Fires a bolt of arcane energy that deals moderate energy damage; damage scales up as your health drops.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 8.53,
        rechargeTime: 8,
        castTime: 1.0,
        range: 80,
        maxTargets: 1,
        effects: [
          { type: 'damage', target: 'enemy', damageType: 'energy', value: 62.5, description: 'Moderate energy damage (scales with missing HP)' }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_sorcery_rune_of_protection',
        name: 'Rune of Protection',
        powersetId: 'pool_sorcery',
        description: 'Inscribes a protective rune on yourself, granting 25% resistance to all damage for 90 seconds.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 4,
        enduranceCost: 13.0,
        rechargeTime: 300,
        castTime: 2.0,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'shield', target: 'self', damageType: 'smashing', value: 25, duration: 90, description: '+25% Smashing RES for 90s' },
          { type: 'shield', target: 'self', damageType: 'lethal', value: 25, duration: 90, description: '+25% Lethal RES for 90s' },
          { type: 'shield', target: 'self', damageType: 'fire', value: 25, duration: 90, description: '+25% Fire RES for 90s' },
          { type: 'shield', target: 'self', damageType: 'cold', value: 25, duration: 90, description: '+25% Cold RES for 90s' },
          { type: 'shield', target: 'self', damageType: 'energy', value: 25, duration: 90, description: '+25% Energy RES for 90s' },
          { type: 'shield', target: 'self', damageType: 'negative', value: 25, duration: 90, description: '+25% Negative RES for 90s' },
          { type: 'shield', target: 'self', damageType: 'toxic', value: 25, duration: 90, description: '+25% Toxic RES for 90s' },
          { type: 'shield', target: 'self', damageType: 'psionic', value: 25, duration: 90, description: '+25% Psionic RES for 90s' }
        ],
        allowedEnhancementTypes: ['resistance', 'recharge'],
        maxSlots: 6
      },
      {
        id: 'pool_sorcery_enflame',
        name: 'Enflame',
        powersetId: 'pool_sorcery',
        description: 'Envelops an ally in arcane flames, creating a damage aura around them.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 5,
        enduranceCost: 13.0,
        rechargeTime: 60,
        castTime: 1.17,
        range: 60,
        maxTargets: 1,
        effects: [
          { type: 'damage', target: 'ally', damageType: 'fire', value: 15, duration: 30, description: 'Fire damage aura on ally for 30s' }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  },

  // ── Force of Will ────────────────────────────────────────────────────
  {
    id: 'pool_force_of_will',
    name: 'Force of Will',
    type: 'pool',
    archetypeId: 'all',
    description: 'The Force of Will power pool channels sheer willpower into offensive and defensive abilities.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'pool_force_of_will_mighty_leap',
        name: 'Mighty Leap',
        powersetId: 'pool_force_of_will',
        description: 'Teleport via a massive leap and deal smashing damage in an AoE upon landing.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 1,
        enduranceCost: 10.4,
        rechargeTime: 10,
        castTime: 1.0,
        range: 120,
        maxTargets: 10,
        effects: [
          { type: 'movement', target: 'self', value: 100, description: 'Leap to target location' },
          { type: 'damage', target: 'aoe', damageType: 'smashing', value: 40.2, description: 'Smashing damage AoE on landing' }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'jump', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_force_of_will_wall_of_force',
        name: 'Wall of Force',
        powersetId: 'pool_force_of_will',
        description: 'Projects a cone of psychic force that deals energy damage and knocks back foes.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 2,
        enduranceCost: 8.53,
        rechargeTime: 10,
        castTime: 1.0,
        range: 40,
        maxTargets: 5,
        effects: [
          { type: 'damage', target: 'aoe', damageType: 'energy', value: 42.6, description: 'Cone energy damage' },
          { type: 'control', target: 'aoe', value: 1.0, description: 'Knockback' }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'knockback', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_force_of_will_weaken_resolve',
        name: 'Weaken Resolve',
        powersetId: 'pool_force_of_will',
        description: 'Weakens a target\'s defenses, reducing their damage resistance.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 7.8,
        rechargeTime: 20,
        castTime: 1.17,
        range: 60,
        maxTargets: 1,
        effects: [
          { type: 'debuff', target: 'enemy', value: -20, duration: 15, description: '-20% RES on target for 15s' }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_force_of_will_unleash_potential',
        name: 'Unleash Potential',
        powersetId: 'pool_force_of_will',
        description: 'Channels your willpower to greatly boost your damage and accuracy for a short time.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 4,
        enduranceCost: 13.0,
        rechargeTime: 300,
        castTime: 2.0,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'buff', target: 'self', value: 30, duration: 60, description: '+30% DMG for 60s' },
          { type: 'buff', target: 'self', value: 15, duration: 60, description: '+15% ToHit for 60s' }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_force_of_will_unrelenting',
        name: 'Unrelenting',
        powersetId: 'pool_force_of_will',
        description: 'Auto power that provides scaling regeneration that increases as your health drops.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'auto',
        availableAtLevel: 14,
        positionInSet: 5,
        enduranceCost: 0,
        rechargeTime: 0,
        castTime: 0,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'heal', target: 'self', value: 100, description: 'Scaling +Regen as HP drops' }
        ],
        allowedEnhancementTypes: ['heal'],
        maxSlots: 6
      }
    ]
  },

  // ── Experimentation ──────────────────────────────────────────────────
  {
    id: 'pool_experimentation',
    name: 'Experimentation',
    type: 'pool',
    archetypeId: 'all',
    description: 'The Experimentation power pool uses scientific compounds for healing, speed, toxic attacks, and powerful self-buffs.',
    icon: '/icons/powers/placeholder.svg',
    powers: [
      {
        id: 'pool_experimentation_experimental_injection',
        name: 'Experimental Injection',
        powersetId: 'pool_experimentation',
        description: 'Heals an ally and grants them a small damage boost.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 1,
        enduranceCost: 9.1,
        rechargeTime: 8,
        castTime: 1.17,
        range: 60,
        maxTargets: 1,
        effects: [
          { type: 'heal', target: 'ally', value: 130.0, description: 'Heal ally' },
          { type: 'buff', target: 'ally', value: 5, duration: 30, description: '+5% DMG on ally for 30s' }
        ],
        allowedEnhancementTypes: ['heal', 'recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_experimentation_speed_of_sound',
        name: 'Speed of Sound',
        powersetId: 'pool_experimentation',
        description: 'Toggle that grants super speed and includes a built-in teleport ability.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'toggle',
        availableAtLevel: 4,
        positionInSet: 2,
        enduranceCost: 0.39,
        rechargeTime: 2,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'movement', target: 'self', value: 100, description: 'Super speed with built-in teleport' }
        ],
        allowedEnhancementTypes: ['run_speed', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_experimentation_toxic_dart',
        name: 'Toxic Dart',
        powersetId: 'pool_experimentation',
        description: 'Fires a toxic dart that deals minor toxic damage over time and reduces target regeneration.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 4,
        positionInSet: 3,
        enduranceCost: 5.2,
        rechargeTime: 6,
        castTime: 1.0,
        range: 80,
        maxTargets: 1,
        effects: [
          { type: 'damage', target: 'enemy', damageType: 'toxic', value: 8.5, duration: 16, description: 'Minor toxic DoT over 16s' },
          { type: 'debuff', target: 'enemy', value: -500, duration: 16, description: '-Regen on target for 16s' }
        ],
        allowedEnhancementTypes: ['accuracy', 'damage', 'recharge', 'range', 'slow', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_experimentation_corrosive_vial',
        name: 'Corrosive Vial',
        powersetId: 'pool_experimentation',
        description: 'Throws a vial of corrosive acid at a target area, reducing resistance of all enemies hit.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 4,
        enduranceCost: 13.0,
        rechargeTime: 30,
        castTime: 1.17,
        range: 80,
        maxTargets: 10,
        effects: [
          { type: 'debuff', target: 'aoe', value: -20, duration: 15, description: '-20% RES on enemies in area for 15s' }
        ],
        allowedEnhancementTypes: ['accuracy', 'recharge', 'range', 'endurance_reduction'],
        maxSlots: 6
      },
      {
        id: 'pool_experimentation_adrenal_booster',
        name: 'Adrenal Booster',
        powersetId: 'pool_experimentation',
        description: 'Injects yourself with a powerful stimulant that increases recharge and recovery for 90 seconds.',
        icon: '/icons/powers/placeholder.svg',
        powerType: 'click',
        availableAtLevel: 14,
        positionInSet: 5,
        enduranceCost: 13.0,
        rechargeTime: 300,
        castTime: 1.17,
        range: 0,
        maxTargets: 1,
        effects: [
          { type: 'buff', target: 'self', value: 50, duration: 90, description: '+50% Recharge for 90s' },
          { type: 'buff', target: 'self', value: 30, duration: 90, description: '+30% Recovery for 90s' }
        ],
        allowedEnhancementTypes: ['recharge', 'endurance_reduction'],
        maxSlots: 6
      }
    ]
  }
];
