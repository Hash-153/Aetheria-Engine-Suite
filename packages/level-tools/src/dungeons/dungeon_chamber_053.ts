// Procedural Dungeon Chamber Layout #053
export interface DungeonSectorData_53 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_53: DungeonSectorData_53 = {
  sectorId: 'sector_chamber_053',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_53_1', x: 18, y: 12, level: 6 },
    { id: 'mob_53_2', x: 20, y: 13, level: 6 }
  ]
};
