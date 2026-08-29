// Procedural Dungeon Chamber Layout #033
export interface DungeonSectorData_33 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_33: DungeonSectorData_33 = {
  sectorId: 'sector_chamber_033',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_33_1', x: 18, y: 7, level: 4 },
    { id: 'mob_33_2', x: 24, y: 13, level: 4 }
  ]
};
