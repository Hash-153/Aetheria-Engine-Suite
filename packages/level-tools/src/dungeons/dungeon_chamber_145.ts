// Procedural Dungeon Chamber Layout #145
export interface DungeonSectorData_145 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_145: DungeonSectorData_145 = {
  sectorId: 'sector_chamber_145',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_145_1', x: 10, y: 14, level: 15 },
    { id: 'mob_145_2', x: 16, y: 15, level: 15 }
  ]
};
