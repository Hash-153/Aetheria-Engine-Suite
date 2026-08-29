// Procedural Dungeon Chamber Layout #065
export interface DungeonSectorData_65 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_65: DungeonSectorData_65 = {
  sectorId: 'sector_chamber_065',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_65_1', x: 10, y: 9, level: 7 },
    { id: 'mob_65_2', x: 20, y: 15, level: 7 }
  ]
};
