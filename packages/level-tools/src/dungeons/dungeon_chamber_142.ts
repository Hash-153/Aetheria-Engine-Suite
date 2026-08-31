// Procedural Dungeon Chamber Layout #142
export interface DungeonSectorData_142 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_142: DungeonSectorData_142 = {
  sectorId: 'sector_chamber_142',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_142_1', x: 7, y: 11, level: 15 },
    { id: 'mob_142_2', x: 25, y: 12, level: 15 }
  ]
};
