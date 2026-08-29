// Procedural Dungeon Chamber Layout #102
export interface DungeonSectorData_102 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_102: DungeonSectorData_102 = {
  sectorId: 'sector_chamber_102',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_102_1', x: 7, y: 16, level: 11 },
    { id: 'mob_102_2', x: 21, y: 12, level: 11 }
  ]
};
