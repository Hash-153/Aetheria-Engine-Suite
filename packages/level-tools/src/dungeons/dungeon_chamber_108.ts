// Procedural Dungeon Chamber Layout #108
export interface DungeonSectorData_108 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_108: DungeonSectorData_108 = {
  sectorId: 'sector_chamber_108',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_108_1', x: 13, y: 7, level: 11 },
    { id: 'mob_108_2', x: 15, y: 18, level: 11 }
  ]
};
