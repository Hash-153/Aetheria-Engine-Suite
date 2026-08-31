// Procedural Dungeon Chamber Layout #034
export interface DungeonSectorData_34 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_34: DungeonSectorData_34 = {
  sectorId: 'sector_chamber_034',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_34_1', x: 19, y: 8, level: 4 },
    { id: 'mob_34_2', x: 25, y: 14, level: 4 }
  ]
};
