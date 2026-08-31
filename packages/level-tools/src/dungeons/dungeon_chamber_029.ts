// Procedural Dungeon Chamber Layout #029
export interface DungeonSectorData_29 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_29: DungeonSectorData_29 = {
  sectorId: 'sector_chamber_029',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_29_1', x: 14, y: 18, level: 3 },
    { id: 'mob_29_2', x: 20, y: 19, level: 3 }
  ]
};
