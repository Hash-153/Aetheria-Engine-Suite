// Procedural Dungeon Chamber Layout #120
export interface DungeonSectorData_120 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_120: DungeonSectorData_120 = {
  sectorId: 'sector_chamber_120',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_120_1', x: 5, y: 4, level: 13 },
    { id: 'mob_120_2', x: 15, y: 10, level: 13 }
  ]
};
