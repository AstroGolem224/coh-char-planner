import type { EnhancementCategory } from './powerset';

export type EnhancementOrigin = 'training' | 'dual' | 'single' | 'invention' | 'set';
export type EnhancementRarity = 'common' | 'uncommon' | 'rare' | 'very_rare' | 'pvp' | 'ato' | 'winter';

export interface Enhancement {
  id: string;
  name: string;
  origin: EnhancementOrigin;
  rarity?: EnhancementRarity;
  icon: string;
  categories: EnhancementCategory[];
  bonusPercentage: number;
  level?: number;
  setId?: string;
}

export interface SetBonus {
  requiredCount: number;
  effects: { stat: string; value: number }[];
  description: string;
}

export interface EnhancementSet {
  id: string;
  name: string;
  rarity: EnhancementRarity;
  applicableTo: EnhancementCategory;
  enhancements: Enhancement[];
  setBonuses: SetBonus[];
}
