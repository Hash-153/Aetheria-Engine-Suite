// Procedural Dungeon Chamber Layout #060
export interface DungeonSectorData_60 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_60: DungeonSectorData_60 = {
  sectorId: 'sector_chamber_060',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_60_1', x: 5, y: 4, level: 7 },
    { id: 'mob_60_2', x: 15, y: 10, level: 7 }
  ]
};
