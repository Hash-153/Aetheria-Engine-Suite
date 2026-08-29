// Procedural Dungeon Chamber Layout #030
export interface DungeonSectorData_30 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_30: DungeonSectorData_30 = {
  sectorId: 'sector_chamber_030',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_30_1', x: 15, y: 4, level: 4 },
    { id: 'mob_30_2', x: 21, y: 10, level: 4 }
  ]
};
