// Procedural Dungeon Chamber Layout #091
export interface DungeonSectorData_91 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_91: DungeonSectorData_91 = {
  sectorId: 'sector_chamber_091',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_91_1', x: 16, y: 5, level: 10 },
    { id: 'mob_91_2', x: 22, y: 11, level: 10 }
  ]
};
