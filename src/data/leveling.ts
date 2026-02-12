export interface LevelEntry {
  level: number;
  powerPick: boolean;
  slotsGranted: number;
}

// Power pick levels: 1,1,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,35,38,41,44,47,49
// At level 1, you get 2 power picks (primary T1 + secondary T1)
export const POWER_PICK_LEVELS = [1, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 35, 38, 41, 44, 47, 49];

export const levelTable: LevelEntry[] = [
  { level: 1, powerPick: true, slotsGranted: 0 },
  { level: 2, powerPick: true, slotsGranted: 1 },
  { level: 3, powerPick: false, slotsGranted: 2 },
  { level: 4, powerPick: true, slotsGranted: 1 },
  { level: 5, powerPick: false, slotsGranted: 2 },
  { level: 6, powerPick: true, slotsGranted: 1 },
  { level: 7, powerPick: false, slotsGranted: 2 },
  { level: 8, powerPick: true, slotsGranted: 1 },
  { level: 9, powerPick: false, slotsGranted: 2 },
  { level: 10, powerPick: true, slotsGranted: 1 },
  { level: 11, powerPick: false, slotsGranted: 2 },
  { level: 12, powerPick: true, slotsGranted: 1 },
  { level: 13, powerPick: false, slotsGranted: 2 },
  { level: 14, powerPick: true, slotsGranted: 1 },
  { level: 15, powerPick: false, slotsGranted: 2 },
  { level: 16, powerPick: true, slotsGranted: 1 },
  { level: 17, powerPick: false, slotsGranted: 2 },
  { level: 18, powerPick: true, slotsGranted: 1 },
  { level: 19, powerPick: false, slotsGranted: 2 },
  { level: 20, powerPick: true, slotsGranted: 1 },
  { level: 21, powerPick: false, slotsGranted: 2 },
  { level: 22, powerPick: true, slotsGranted: 1 },
  { level: 23, powerPick: false, slotsGranted: 2 },
  { level: 24, powerPick: true, slotsGranted: 1 },
  { level: 25, powerPick: false, slotsGranted: 2 },
  { level: 26, powerPick: true, slotsGranted: 1 },
  { level: 27, powerPick: false, slotsGranted: 3 },
  { level: 28, powerPick: true, slotsGranted: 1 },
  { level: 29, powerPick: false, slotsGranted: 3 },
  { level: 30, powerPick: true, slotsGranted: 1 },
  { level: 31, powerPick: false, slotsGranted: 3 },
  { level: 32, powerPick: true, slotsGranted: 1 },
  { level: 33, powerPick: false, slotsGranted: 3 },
  { level: 34, powerPick: false, slotsGranted: 3 },
  { level: 35, powerPick: true, slotsGranted: 1 },
  { level: 36, powerPick: false, slotsGranted: 3 },
  { level: 37, powerPick: false, slotsGranted: 3 },
  { level: 38, powerPick: true, slotsGranted: 1 },
  { level: 39, powerPick: false, slotsGranted: 3 },
  { level: 40, powerPick: false, slotsGranted: 3 },
  { level: 41, powerPick: true, slotsGranted: 1 },
  { level: 42, powerPick: false, slotsGranted: 3 },
  { level: 43, powerPick: false, slotsGranted: 3 },
  { level: 44, powerPick: true, slotsGranted: 1 },
  { level: 45, powerPick: false, slotsGranted: 3 },
  { level: 46, powerPick: false, slotsGranted: 3 },
  { level: 47, powerPick: true, slotsGranted: 1 },
  { level: 48, powerPick: false, slotsGranted: 3 },
  { level: 49, powerPick: true, slotsGranted: 1 },
  { level: 50, powerPick: false, slotsGranted: 3 },
];

export function getTotalSlotsAtLevel(level: number): number {
  return levelTable
    .filter((entry) => entry.level <= level)
    .reduce((sum, entry) => sum + entry.slotsGranted, 0);
}
