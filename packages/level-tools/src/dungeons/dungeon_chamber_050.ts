// Procedural Dungeon Chamber Layout #050
export interface DungeonSectorData_50 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_50: DungeonSectorData_50 = {
  sectorId: 'sector_chamber_050',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_50_1', x: 15, y: 9, level: 6 },
    { id: 'mob_50_2', x: 17, y: 10, level: 6 }
  ]
};
