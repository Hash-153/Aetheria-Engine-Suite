// Procedural Dungeon Chamber Layout #137
export interface DungeonSectorData_137 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_137: DungeonSectorData_137 = {
  sectorId: 'sector_chamber_137',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_137_1', x: 22, y: 6, level: 14 },
    { id: 'mob_137_2', x: 20, y: 17, level: 14 }
  ]
};
