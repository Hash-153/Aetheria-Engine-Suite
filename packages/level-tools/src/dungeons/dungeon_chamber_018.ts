// Procedural Dungeon Chamber Layout #018
export interface DungeonSectorData_18 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_18: DungeonSectorData_18 = {
  sectorId: 'sector_chamber_018',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_18_1', x: 23, y: 7, level: 2 },
    { id: 'mob_18_2', x: 21, y: 18, level: 2 }
  ]
};
