// Procedural Dungeon Chamber Layout #127
export interface DungeonSectorData_127 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_127: DungeonSectorData_127 = {
  sectorId: 'sector_chamber_127',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_127_1', x: 12, y: 11, level: 13 },
    { id: 'mob_127_2', x: 22, y: 17, level: 13 }
  ]
};
