// Procedural Dungeon Chamber Layout #086
export interface DungeonSectorData_86 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_86: DungeonSectorData_86 = {
  sectorId: 'sector_chamber_086',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_86_1', x: 11, y: 15, level: 9 },
    { id: 'mob_86_2', x: 17, y: 16, level: 9 }
  ]
};
