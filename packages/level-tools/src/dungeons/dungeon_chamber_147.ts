// Procedural Dungeon Chamber Layout #147
export interface DungeonSectorData_147 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_147: DungeonSectorData_147 = {
  sectorId: 'sector_chamber_147',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_147_1', x: 12, y: 16, level: 15 },
    { id: 'mob_147_2', x: 18, y: 17, level: 15 }
  ]
};
