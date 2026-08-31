// Procedural Dungeon Chamber Layout #041
export interface DungeonSectorData_41 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_41: DungeonSectorData_41 = {
  sectorId: 'sector_chamber_041',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_41_1', x: 6, y: 15, level: 5 },
    { id: 'mob_41_2', x: 20, y: 11, level: 5 }
  ]
};
