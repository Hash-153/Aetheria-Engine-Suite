// Procedural Dungeon Chamber Layout #026
export interface DungeonSectorData_26 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_26: DungeonSectorData_26 = {
  sectorId: 'sector_chamber_026',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_26_1', x: 11, y: 15, level: 3 },
    { id: 'mob_26_2', x: 17, y: 16, level: 3 }
  ]
};
