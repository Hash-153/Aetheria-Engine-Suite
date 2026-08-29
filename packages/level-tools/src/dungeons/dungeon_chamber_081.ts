// Procedural Dungeon Chamber Layout #081
export interface DungeonSectorData_81 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_81: DungeonSectorData_81 = {
  sectorId: 'sector_chamber_081',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_81_1', x: 6, y: 10, level: 9 },
    { id: 'mob_81_2', x: 24, y: 11, level: 9 }
  ]
};
