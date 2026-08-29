// Procedural Dungeon Chamber Layout #016
export interface DungeonSectorData_16 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_16: DungeonSectorData_16 = {
  sectorId: 'sector_chamber_016',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_16_1', x: 21, y: 5, level: 2 },
    { id: 'mob_16_2', x: 19, y: 16, level: 2 }
  ]
};
