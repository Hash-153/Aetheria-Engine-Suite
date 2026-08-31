// Procedural Dungeon Chamber Layout #002
export interface DungeonSectorData_2 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_2: DungeonSectorData_2 = {
  sectorId: 'sector_chamber_002',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_2_1', x: 7, y: 6, level: 1 },
    { id: 'mob_2_2', x: 17, y: 12, level: 1 }
  ]
};
