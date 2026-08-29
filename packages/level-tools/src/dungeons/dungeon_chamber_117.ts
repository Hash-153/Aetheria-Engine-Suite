// Procedural Dungeon Chamber Layout #117
export interface DungeonSectorData_117 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_117: DungeonSectorData_117 = {
  sectorId: 'sector_chamber_117',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_117_1', x: 22, y: 16, level: 12 },
    { id: 'mob_117_2', x: 24, y: 17, level: 12 }
  ]
};
