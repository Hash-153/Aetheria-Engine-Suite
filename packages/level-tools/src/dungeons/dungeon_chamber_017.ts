// Procedural Dungeon Chamber Layout #017
export interface DungeonSectorData_17 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_17: DungeonSectorData_17 = {
  sectorId: 'sector_chamber_017',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_17_1', x: 22, y: 6, level: 2 },
    { id: 'mob_17_2', x: 20, y: 17, level: 2 }
  ]
};
