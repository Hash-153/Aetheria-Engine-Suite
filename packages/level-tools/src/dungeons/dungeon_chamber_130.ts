// Procedural Dungeon Chamber Layout #130
export interface DungeonSectorData_130 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_130: DungeonSectorData_130 = {
  sectorId: 'sector_chamber_130',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_130_1', x: 15, y: 14, level: 14 },
    { id: 'mob_130_2', x: 25, y: 10, level: 14 }
  ]
};
