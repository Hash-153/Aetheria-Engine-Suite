// Procedural Dungeon Chamber Layout #020
export interface DungeonSectorData_20 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_20: DungeonSectorData_20 = {
  sectorId: 'sector_chamber_020',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_20_1', x: 5, y: 9, level: 3 },
    { id: 'mob_20_2', x: 23, y: 10, level: 3 }
  ]
};
