// Procedural Dungeon Chamber Layout #024
export interface DungeonSectorData_24 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_24: DungeonSectorData_24 = {
  sectorId: 'sector_chamber_024',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_24_1', x: 9, y: 13, level: 3 },
    { id: 'mob_24_2', x: 15, y: 14, level: 3 }
  ]
};
