// Procedural Dungeon Chamber Layout #063
export interface DungeonSectorData_63 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_63: DungeonSectorData_63 = {
  sectorId: 'sector_chamber_063',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_63_1', x: 8, y: 7, level: 7 },
    { id: 'mob_63_2', x: 18, y: 13, level: 7 }
  ]
};
