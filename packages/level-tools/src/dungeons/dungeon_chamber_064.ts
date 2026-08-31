// Procedural Dungeon Chamber Layout #064
export interface DungeonSectorData_64 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_64: DungeonSectorData_64 = {
  sectorId: 'sector_chamber_064',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_64_1', x: 9, y: 8, level: 7 },
    { id: 'mob_64_2', x: 19, y: 14, level: 7 }
  ]
};
