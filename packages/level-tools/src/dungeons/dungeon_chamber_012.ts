// Procedural Dungeon Chamber Layout #012
export interface DungeonSectorData_12 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_12: DungeonSectorData_12 = {
  sectorId: 'sector_chamber_012',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_12_1', x: 17, y: 16, level: 2 },
    { id: 'mob_12_2', x: 15, y: 12, level: 2 }
  ]
};
