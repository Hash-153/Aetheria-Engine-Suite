// Procedural Dungeon Chamber Layout #023
export interface DungeonSectorData_23 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_23: DungeonSectorData_23 = {
  sectorId: 'sector_chamber_023',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_23_1', x: 8, y: 12, level: 3 },
    { id: 'mob_23_2', x: 26, y: 13, level: 3 }
  ]
};
