// Procedural Dungeon Chamber Layout #126
export interface DungeonSectorData_126 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_126: DungeonSectorData_126 = {
  sectorId: 'sector_chamber_126',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_126_1', x: 11, y: 10, level: 13 },
    { id: 'mob_126_2', x: 21, y: 16, level: 13 }
  ]
};
