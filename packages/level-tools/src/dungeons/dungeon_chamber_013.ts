// Procedural Dungeon Chamber Layout #013
export interface DungeonSectorData_13 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_13: DungeonSectorData_13 = {
  sectorId: 'sector_chamber_013',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_13_1', x: 18, y: 17, level: 2 },
    { id: 'mob_13_2', x: 16, y: 13, level: 2 }
  ]
};
