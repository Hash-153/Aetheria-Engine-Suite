// Procedural Dungeon Chamber Layout #025
export interface DungeonSectorData_25 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_25: DungeonSectorData_25 = {
  sectorId: 'sector_chamber_025',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_25_1', x: 10, y: 14, level: 3 },
    { id: 'mob_25_2', x: 16, y: 15, level: 3 }
  ]
};
