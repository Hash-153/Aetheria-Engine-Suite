// Procedural Dungeon Chamber Layout #021
export interface DungeonSectorData_21 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_21: DungeonSectorData_21 = {
  sectorId: 'sector_chamber_021',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_21_1', x: 6, y: 10, level: 3 },
    { id: 'mob_21_2', x: 24, y: 11, level: 3 }
  ]
};
