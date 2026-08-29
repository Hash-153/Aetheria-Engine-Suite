// Procedural Dungeon Chamber Layout #132
export interface DungeonSectorData_132 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_132: DungeonSectorData_132 = {
  sectorId: 'sector_chamber_132',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_132_1', x: 17, y: 16, level: 14 },
    { id: 'mob_132_2', x: 15, y: 12, level: 14 }
  ]
};
