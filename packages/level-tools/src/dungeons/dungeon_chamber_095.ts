// Procedural Dungeon Chamber Layout #095
export interface DungeonSectorData_95 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_95: DungeonSectorData_95 = {
  sectorId: 'sector_chamber_095',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_95_1', x: 20, y: 9, level: 10 },
    { id: 'mob_95_2', x: 26, y: 15, level: 10 }
  ]
};
