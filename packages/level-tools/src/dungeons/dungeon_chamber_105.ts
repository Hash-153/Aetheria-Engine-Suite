// Procedural Dungeon Chamber Layout #105
export interface DungeonSectorData_105 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_105: DungeonSectorData_105 = {
  sectorId: 'sector_chamber_105',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_105_1', x: 10, y: 4, level: 11 },
    { id: 'mob_105_2', x: 24, y: 15, level: 11 }
  ]
};
