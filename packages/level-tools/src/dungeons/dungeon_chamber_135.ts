// Procedural Dungeon Chamber Layout #135
export interface DungeonSectorData_135 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_135: DungeonSectorData_135 = {
  sectorId: 'sector_chamber_135',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_135_1', x: 20, y: 4, level: 14 },
    { id: 'mob_135_2', x: 18, y: 15, level: 14 }
  ]
};
