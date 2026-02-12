export type ArchetypeRole = 'melee' | 'ranged' | 'tank' | 'control' | 'support' | 'hybrid';
export type Alignment = 'hero' | 'villain' | 'both';

export interface Archetype {
  id: string;
  name: string;
  description: string;
  role: ArchetypeRole;
  alignment: Alignment;
  icon: string;
  accentColor: string;
  baseHitPoints: number;
  hitPointsCap: number;
  damageModifier: number;
  resistanceCap: number;
  primaryCategory: string;
  secondaryCategory: string;
  inherentPower: string;
  primaryPowersetIds: string[];
  secondaryPowersetIds: string[];
}
