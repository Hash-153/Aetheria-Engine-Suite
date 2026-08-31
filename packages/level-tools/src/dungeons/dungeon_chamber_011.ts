// Procedural Dungeon Chamber Layout #011
export interface DungeonSectorData_11 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_11: DungeonSectorData_11 = {
  sectorId: 'sector_chamber_011',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_11_1', x: 16, y: 15, level: 2 },
    { id: 'mob_11_2', x: 26, y: 11, level: 2 }
  ]
};
