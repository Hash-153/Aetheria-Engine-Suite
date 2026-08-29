// Procedural Dungeon Chamber Layout #056
export interface DungeonSectorData_56 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_56: DungeonSectorData_56 = {
  sectorId: 'sector_chamber_056',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_56_1', x: 21, y: 15, level: 6 },
    { id: 'mob_56_2', x: 23, y: 16, level: 6 }
  ]
};
