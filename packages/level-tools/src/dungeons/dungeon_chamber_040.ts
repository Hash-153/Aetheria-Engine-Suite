// Procedural Dungeon Chamber Layout #040
export interface DungeonSectorData_40 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_40: DungeonSectorData_40 = {
  sectorId: 'sector_chamber_040',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_40_1', x: 5, y: 14, level: 5 },
    { id: 'mob_40_2', x: 19, y: 10, level: 5 }
  ]
};
