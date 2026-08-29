// Procedural Dungeon Chamber Layout #103
export interface DungeonSectorData_103 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_103: DungeonSectorData_103 = {
  sectorId: 'sector_chamber_103',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_103_1', x: 8, y: 17, level: 11 },
    { id: 'mob_103_2', x: 22, y: 13, level: 11 }
  ]
};
