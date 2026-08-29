// Procedural Dungeon Chamber Layout #134
export interface DungeonSectorData_134 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_134: DungeonSectorData_134 = {
  sectorId: 'sector_chamber_134',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_134_1', x: 19, y: 18, level: 14 },
    { id: 'mob_134_2', x: 17, y: 14, level: 14 }
  ]
};
