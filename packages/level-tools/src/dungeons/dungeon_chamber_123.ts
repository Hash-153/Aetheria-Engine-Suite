// Procedural Dungeon Chamber Layout #123
export interface DungeonSectorData_123 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_123: DungeonSectorData_123 = {
  sectorId: 'sector_chamber_123',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_123_1', x: 8, y: 7, level: 13 },
    { id: 'mob_123_2', x: 18, y: 13, level: 13 }
  ]
};
