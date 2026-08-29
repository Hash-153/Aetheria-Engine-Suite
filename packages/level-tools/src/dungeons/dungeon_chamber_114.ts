// Procedural Dungeon Chamber Layout #114
export interface DungeonSectorData_114 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_114: DungeonSectorData_114 = {
  sectorId: 'sector_chamber_114',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_114_1', x: 19, y: 13, level: 12 },
    { id: 'mob_114_2', x: 21, y: 14, level: 12 }
  ]
};
