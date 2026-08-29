// Procedural Dungeon Chamber Layout #087
export interface DungeonSectorData_87 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_87: DungeonSectorData_87 = {
  sectorId: 'sector_chamber_087',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_87_1', x: 12, y: 16, level: 9 },
    { id: 'mob_87_2', x: 18, y: 17, level: 9 }
  ]
};
