// Procedural Dungeon Chamber Layout #038
export interface DungeonSectorData_38 {
  sectorId: string;
  gridWidth: number;
  gridHeight: number;
  ambientColor: string;
  wallTiles: number[];
  floorTiles: number[];
  encounterSpawns: Array<{ id: string; x: number; y: number; level: number }>;
}

export const DUNGEON_SECTOR_38: DungeonSectorData_38 = {
  sectorId: 'sector_chamber_038',
  gridWidth: 32,
  gridHeight: 24,
  ambientColor: 'rgba(20, 30, 45, 1)',
  wallTiles: [1, 2, 3, 4],
  floorTiles: [10, 11, 12, 13],
  encounterSpawns: [
    { id: 'mob_38_1', x: 23, y: 12, level: 4 },
    { id: 'mob_38_2', x: 17, y: 18, level: 4 }
  ]
};
