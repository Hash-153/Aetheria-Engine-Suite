// Procedural Dungeon Chamber Layout #104
export interface DungeonSectorData_104 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_104: DungeonSectorData_104 = {
  sectorId: 'sector_chamber_104',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_104_1', x: 9, y: 18, level: 11 },
    { id: 'mob_104_2', x: 23, y: 14, level: 11 }
  ]
};
