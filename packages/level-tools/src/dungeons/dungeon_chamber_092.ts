// Procedural Dungeon Chamber Layout #092
export interface DungeonSectorData_92 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_92: DungeonSectorData_92 = {
  sectorId: 'sector_chamber_092',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_92_1', x: 17, y: 6, level: 10 },
    { id: 'mob_92_2', x: 23, y: 12, level: 10 }
  ]
};
