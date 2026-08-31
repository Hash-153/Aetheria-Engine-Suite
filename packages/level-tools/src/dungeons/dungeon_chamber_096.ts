// Procedural Dungeon Chamber Layout #096
export interface DungeonSectorData_96 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_96: DungeonSectorData_96 = {
  sectorId: 'sector_chamber_096',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_96_1', x: 21, y: 10, level: 10 },
    { id: 'mob_96_2', x: 15, y: 16, level: 10 }
  ]
};
