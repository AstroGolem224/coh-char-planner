export interface SlottedEnhancement {
  enhancementId: string;
  slotIndex: number;
  level: number;
  boosted?: number;
}

export interface PowerPick {
  powerId: string;
  powersetId: string;
  levelPicked: number;
  slottedEnhancements: SlottedEnhancement[];
  isActive?: boolean;
}

export interface SlotAssignment {
  grantedAtLevel: number;
  assignedToPowerId: string;
  slotIndex: number;
}

export interface Build {
  id: string;
  name: string;
  archetypeId: string;
  primaryPowersetId: string;
  secondaryPowersetId: string;
  poolPowersetIds: string[];
  epicPowersetId?: string;
  powerPicks: PowerPick[];
  slotAssignments: SlotAssignment[];
  level: number;
  notes: string;
  createdAt: string;
  updatedAt: string;
  version: number;
}
