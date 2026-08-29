// Procedural Dungeon Chamber Layout #042
export interface DungeonSectorData_42 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_42: DungeonSectorData_42 = {
  sectorId: 'sector_chamber_042',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_42_1', x: 7, y: 16, level: 5 },
    { id: 'mob_42_2', x: 21, y: 12, level: 5 }
  ]
};
