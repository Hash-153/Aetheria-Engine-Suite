// Procedural Dungeon Chamber Layout #121
export interface DungeonSectorData_121 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_121: DungeonSectorData_121 = {
  sectorId: 'sector_chamber_121',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_121_1', x: 6, y: 5, level: 13 },
    { id: 'mob_121_2', x: 16, y: 11, level: 13 }
  ]
};
