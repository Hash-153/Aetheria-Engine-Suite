// Procedural Dungeon Chamber Layout #124
export interface DungeonSectorData_124 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_124: DungeonSectorData_124 = {
  sectorId: 'sector_chamber_124',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_124_1', x: 9, y: 8, level: 13 },
    { id: 'mob_124_2', x: 19, y: 14, level: 13 }
  ]
};
