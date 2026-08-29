// Procedural Dungeon Chamber Layout #051
export interface DungeonSectorData_51 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_51: DungeonSectorData_51 = {
  sectorId: 'sector_chamber_051',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_51_1', x: 16, y: 10, level: 6 },
    { id: 'mob_51_2', x: 18, y: 11, level: 6 }
  ]
};
