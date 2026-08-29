// Procedural Dungeon Chamber Layout #028
export interface DungeonSectorData_28 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_28: DungeonSectorData_28 = {
  sectorId: 'sector_chamber_028',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_28_1', x: 13, y: 17, level: 3 },
    { id: 'mob_28_2', x: 19, y: 18, level: 3 }
  ]
};
