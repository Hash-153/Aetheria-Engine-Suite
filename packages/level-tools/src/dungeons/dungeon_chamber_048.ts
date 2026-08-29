// Procedural Dungeon Chamber Layout #048
export interface DungeonSectorData_48 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_48: DungeonSectorData_48 = {
  sectorId: 'sector_chamber_048',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_48_1', x: 13, y: 7, level: 5 },
    { id: 'mob_48_2', x: 15, y: 18, level: 5 }
  ]
};
