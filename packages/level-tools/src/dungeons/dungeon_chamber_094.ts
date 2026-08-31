// Procedural Dungeon Chamber Layout #094
export interface DungeonSectorData_94 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_94: DungeonSectorData_94 = {
  sectorId: 'sector_chamber_094',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_94_1', x: 19, y: 8, level: 10 },
    { id: 'mob_94_2', x: 25, y: 14, level: 10 }
  ]
};
