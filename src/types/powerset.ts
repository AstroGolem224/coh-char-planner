export type PowersetType = 'primary' | 'secondary' | 'pool' | 'epic';
export type PowerType = 'toggle' | 'click' | 'auto' | 'passive';
export type DamageType = 'smashing' | 'lethal' | 'fire' | 'cold' | 'energy' | 'negative' | 'toxic' | 'psionic';
export type EffectType = 'damage' | 'heal' | 'buff' | 'debuff' | 'control' | 'pet' | 'movement' | 'shield';

export type EnhancementCategory =
  | 'accuracy' | 'damage' | 'recharge' | 'endurance_reduction'
  | 'range' | 'defense_buff' | 'defense_debuff' | 'resistance'
  | 'heal' | 'hold' | 'immobilize' | 'stun' | 'slow'
  | 'knockback' | 'taunt' | 'to_hit_buff' | 'to_hit_debuff'
  | 'run_speed' | 'fly_speed' | 'jump' | 'fear' | 'confuse'
  | 'sleep' | 'endurance_modification';

export interface PowerEffect {
  type: EffectType;
  target: 'self' | 'ally' | 'enemy' | 'aoe' | 'pet';
  damageType?: DamageType;
  value: number;
  duration?: number;
  description: string;
}

export interface Power {
  id: string;
  name: string;
  powersetId: string;
  description: string;
  icon: string;
  powerType: PowerType;
  availableAtLevel: number;
  positionInSet: number;
  enduranceCost: number;
  rechargeTime: number;
  castTime: number;
  range: number;
  maxTargets: number;
  effects: PowerEffect[];
  allowedEnhancementTypes: EnhancementCategory[];
  maxSlots: number;
}

export interface Powerset {
  id: string;
  name: string;
  type: PowersetType;
  archetypeId: string;
  description: string;
  icon: string;
  powers: Power[];
}
