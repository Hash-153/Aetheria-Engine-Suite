// Procedural Dungeon Chamber Layout #052
export interface DungeonSectorData_52 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_52: DungeonSectorData_52 = {
  sectorId: 'sector_chamber_052',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_52_1', x: 17, y: 11, level: 6 },
    { id: 'mob_52_2', x: 19, y: 12, level: 6 }
  ]
};
