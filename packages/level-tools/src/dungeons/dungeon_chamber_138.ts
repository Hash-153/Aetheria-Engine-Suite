// Procedural Dungeon Chamber Layout #138
export interface DungeonSectorData_138 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_138: DungeonSectorData_138 = {
  sectorId: 'sector_chamber_138',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_138_1', x: 23, y: 7, level: 14 },
    { id: 'mob_138_2', x: 21, y: 18, level: 14 }
  ]
};
