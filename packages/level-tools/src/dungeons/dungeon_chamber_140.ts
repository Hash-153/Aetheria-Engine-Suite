// Procedural Dungeon Chamber Layout #140
export interface DungeonSectorData_140 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_140: DungeonSectorData_140 = {
  sectorId: 'sector_chamber_140',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_140_1', x: 5, y: 9, level: 15 },
    { id: 'mob_140_2', x: 23, y: 10, level: 15 }
  ]
};
