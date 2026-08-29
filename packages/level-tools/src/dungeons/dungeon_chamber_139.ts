// Procedural Dungeon Chamber Layout #139
export interface DungeonSectorData_139 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_139: DungeonSectorData_139 = {
  sectorId: 'sector_chamber_139',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_139_1', x: 24, y: 8, level: 14 },
    { id: 'mob_139_2', x: 22, y: 19, level: 14 }
  ]
};
