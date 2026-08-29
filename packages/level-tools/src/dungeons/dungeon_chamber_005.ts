// Procedural Dungeon Chamber Layout #005
export interface DungeonSectorData_5 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_5: DungeonSectorData_5 = {
  sectorId: 'sector_chamber_005',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_5_1', x: 10, y: 9, level: 1 },
    { id: 'mob_5_2', x: 20, y: 15, level: 1 }
  ]
};
