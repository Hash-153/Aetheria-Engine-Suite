// Procedural Dungeon Chamber Layout #133
export interface DungeonSectorData_133 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_133: DungeonSectorData_133 = {
  sectorId: 'sector_chamber_133',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_133_1', x: 18, y: 17, level: 14 },
    { id: 'mob_133_2', x: 16, y: 13, level: 14 }
  ]
};
