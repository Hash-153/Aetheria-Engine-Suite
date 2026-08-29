// Procedural Dungeon Chamber Layout #090
export interface DungeonSectorData_90 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_90: DungeonSectorData_90 = {
  sectorId: 'sector_chamber_090',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_90_1', x: 15, y: 4, level: 10 },
    { id: 'mob_90_2', x: 21, y: 10, level: 10 }
  ]
};
