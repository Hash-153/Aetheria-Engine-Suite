// Procedural Dungeon Chamber Layout #046
export interface DungeonSectorData_46 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_46: DungeonSectorData_46 = {
  sectorId: 'sector_chamber_046',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_46_1', x: 11, y: 5, level: 5 },
    { id: 'mob_46_2', x: 25, y: 16, level: 5 }
  ]
};
