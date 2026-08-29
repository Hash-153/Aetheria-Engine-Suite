// Procedural Dungeon Chamber Layout #075
export interface DungeonSectorData_75 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_75: DungeonSectorData_75 = {
  sectorId: 'sector_chamber_075',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_75_1', x: 20, y: 4, level: 8 },
    { id: 'mob_75_2', x: 18, y: 15, level: 8 }
  ]
};
