// Procedural Dungeon Chamber Layout #031
export interface DungeonSectorData_31 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_31: DungeonSectorData_31 = {
  sectorId: 'sector_chamber_031',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_31_1', x: 16, y: 5, level: 4 },
    { id: 'mob_31_2', x: 22, y: 11, level: 4 }
  ]
};
