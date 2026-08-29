// Procedural Dungeon Chamber Layout #001
export interface DungeonSectorData_1 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_1: DungeonSectorData_1 = {
  sectorId: 'sector_chamber_001',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_1_1', x: 6, y: 5, level: 1 },
    { id: 'mob_1_2', x: 16, y: 11, level: 1 }
  ]
};
