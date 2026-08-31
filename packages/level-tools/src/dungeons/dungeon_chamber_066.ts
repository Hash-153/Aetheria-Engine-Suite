// Procedural Dungeon Chamber Layout #066
export interface DungeonSectorData_66 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_66: DungeonSectorData_66 = {
  sectorId: 'sector_chamber_066',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_66_1', x: 11, y: 10, level: 7 },
    { id: 'mob_66_2', x: 21, y: 16, level: 7 }
  ]
};
