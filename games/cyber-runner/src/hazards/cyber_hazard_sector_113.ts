// CyberRunner Cyber Sector Hazards #113
export interface CyberHazardBlock_113 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_113: CyberHazardBlock_113[] = [
  {
    blockId: 'hazard_113_A',
    x: 615,
    y: 430,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 251,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_113_B',
    x: 560,
    y: 304,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 261,
    cycleTime: 3.5
  }
];
