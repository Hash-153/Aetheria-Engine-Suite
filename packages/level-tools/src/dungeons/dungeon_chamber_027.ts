// Procedural Dungeon Chamber Layout #027
export interface DungeonSectorData_27 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_27: DungeonSectorData_27 = {
  sectorId: 'sector_chamber_027',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_27_1', x: 12, y: 16, level: 3 },
    { id: 'mob_27_2', x: 18, y: 17, level: 3 }
  ]
};
