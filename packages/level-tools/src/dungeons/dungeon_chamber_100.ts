// Procedural Dungeon Chamber Layout #100
export interface DungeonSectorData_100 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_100: DungeonSectorData_100 = {
  sectorId: 'sector_chamber_100',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_100_1', x: 5, y: 14, level: 11 },
    { id: 'mob_100_2', x: 19, y: 10, level: 11 }
  ]
};
