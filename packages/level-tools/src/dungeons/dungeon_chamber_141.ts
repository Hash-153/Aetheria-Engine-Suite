// Procedural Dungeon Chamber Layout #141
export interface DungeonSectorData_141 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_141: DungeonSectorData_141 = {
  sectorId: 'sector_chamber_141',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_141_1', x: 6, y: 10, level: 15 },
    { id: 'mob_141_2', x: 24, y: 11, level: 15 }
  ]
};
