// Procedural Dungeon Chamber Layout #006
export interface DungeonSectorData_6 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_6: DungeonSectorData_6 = {
  sectorId: 'sector_chamber_006',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_6_1', x: 11, y: 10, level: 1 },
    { id: 'mob_6_2', x: 21, y: 16, level: 1 }
  ]
};
