import type { Powerset } from '../types';
import { archetypes, getArchetypeById } from './archetypes';

const allPowersets: Powerset[] = [];

const modules = import.meta.glob('./powersets/*.ts', { eager: true }) as Record<string, Record<string, Powerset[]>>;
for (const mod of Object.values(modules)) {
  for (const val of Object.values(mod)) {
    if (Array.isArray(val)) {
      allPowersets.push(...val);
    }
  }
}

export function getAllPowersets(): Powerset[] {
  return allPowersets;
}

export function getPowersetById(id: string): Powerset | undefined {
  return allPowersets.find((ps) => ps.id === id);
}

export function getPowersetsForArchetype(archetypeId: string, type: 'primary' | 'secondary'): Powerset[] {
  const at = getArchetypeById(archetypeId);
  if (!at) return [];
  const ids = type === 'primary' ? at.primaryPowersetIds : at.secondaryPowersetIds;
  return allPowersets.filter((ps) => ids.includes(ps.id));
}

export function getPoolPowersets(): Powerset[] {
  return allPowersets.filter((ps) => ps.type === 'pool');
}

export { archetypes, getArchetypeById };
