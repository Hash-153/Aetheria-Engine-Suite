// Procedural Dungeon Chamber Layout #131
export interface DungeonSectorData_131 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_131: DungeonSectorData_131 = {
  sectorId: 'sector_chamber_131',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_131_1', x: 16, y: 15, level: 14 },
    { id: 'mob_131_2', x: 26, y: 11, level: 14 }
  ]
};
