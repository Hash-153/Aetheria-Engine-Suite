// Procedural Dungeon Chamber Layout #115
export interface DungeonSectorData_115 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_115: DungeonSectorData_115 = {
  sectorId: 'sector_chamber_115',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_115_1', x: 20, y: 14, level: 12 },
    { id: 'mob_115_2', x: 22, y: 15, level: 12 }
  ]
};
