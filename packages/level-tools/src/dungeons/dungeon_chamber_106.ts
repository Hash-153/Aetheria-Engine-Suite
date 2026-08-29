// Procedural Dungeon Chamber Layout #106
export interface DungeonSectorData_106 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_106: DungeonSectorData_106 = {
  sectorId: 'sector_chamber_106',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_106_1', x: 11, y: 5, level: 11 },
    { id: 'mob_106_2', x: 25, y: 16, level: 11 }
  ]
};
