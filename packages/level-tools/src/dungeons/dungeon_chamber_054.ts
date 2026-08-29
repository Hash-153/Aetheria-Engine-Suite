// Procedural Dungeon Chamber Layout #054
export interface DungeonSectorData_54 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_54: DungeonSectorData_54 = {
  sectorId: 'sector_chamber_054',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_54_1', x: 19, y: 13, level: 6 },
    { id: 'mob_54_2', x: 21, y: 14, level: 6 }
  ]
};
