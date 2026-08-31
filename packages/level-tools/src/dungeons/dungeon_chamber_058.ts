// Procedural Dungeon Chamber Layout #058
export interface DungeonSectorData_58 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_58: DungeonSectorData_58 = {
  sectorId: 'sector_chamber_058',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_58_1', x: 23, y: 17, level: 6 },
    { id: 'mob_58_2', x: 25, y: 18, level: 6 }
  ]
};
