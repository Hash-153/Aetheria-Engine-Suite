// Procedural Dungeon Chamber Layout #125
export interface DungeonSectorData_125 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_125: DungeonSectorData_125 = {
  sectorId: 'sector_chamber_125',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_125_1', x: 10, y: 9, level: 13 },
    { id: 'mob_125_2', x: 20, y: 15, level: 13 }
  ]
};
