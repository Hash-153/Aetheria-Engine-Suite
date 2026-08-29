// Procedural Dungeon Chamber Layout #146
export interface DungeonSectorData_146 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_146: DungeonSectorData_146 = {
  sectorId: 'sector_chamber_146',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_146_1', x: 11, y: 15, level: 15 },
    { id: 'mob_146_2', x: 17, y: 16, level: 15 }
  ]
};
