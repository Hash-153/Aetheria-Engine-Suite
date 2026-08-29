// Procedural Dungeon Chamber Layout #150
export interface DungeonSectorData_150 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_150: DungeonSectorData_150 = {
  sectorId: 'sector_chamber_150',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_150_1', x: 15, y: 4, level: 16 },
    { id: 'mob_150_2', x: 21, y: 10, level: 16 }
  ]
};
