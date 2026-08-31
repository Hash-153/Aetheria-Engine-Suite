// Procedural Dungeon Chamber Layout #008
export interface DungeonSectorData_8 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_8: DungeonSectorData_8 = {
  sectorId: 'sector_chamber_008',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_8_1', x: 13, y: 12, level: 1 },
    { id: 'mob_8_2', x: 23, y: 18, level: 1 }
  ]
};
