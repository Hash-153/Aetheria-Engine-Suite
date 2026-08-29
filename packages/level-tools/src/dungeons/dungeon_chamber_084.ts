// Procedural Dungeon Chamber Layout #084
export interface DungeonSectorData_84 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_84: DungeonSectorData_84 = {
  sectorId: 'sector_chamber_084',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_84_1', x: 9, y: 13, level: 9 },
    { id: 'mob_84_2', x: 15, y: 14, level: 9 }
  ]
};
