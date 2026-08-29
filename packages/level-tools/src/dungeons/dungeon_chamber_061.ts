// Procedural Dungeon Chamber Layout #061
export interface DungeonSectorData_61 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_61: DungeonSectorData_61 = {
  sectorId: 'sector_chamber_061',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_61_1', x: 6, y: 5, level: 7 },
    { id: 'mob_61_2', x: 16, y: 11, level: 7 }
  ]
};
