// Procedural Dungeon Chamber Layout #009
export interface DungeonSectorData_9 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_9: DungeonSectorData_9 = {
  sectorId: 'sector_chamber_009',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_9_1', x: 14, y: 13, level: 1 },
    { id: 'mob_9_2', x: 24, y: 19, level: 1 }
  ]
};
