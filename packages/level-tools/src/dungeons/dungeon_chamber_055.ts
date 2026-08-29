// Procedural Dungeon Chamber Layout #055
export interface DungeonSectorData_55 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_55: DungeonSectorData_55 = {
  sectorId: 'sector_chamber_055',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_55_1', x: 20, y: 14, level: 6 },
    { id: 'mob_55_2', x: 22, y: 15, level: 6 }
  ]
};
