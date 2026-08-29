// CyberRunner Cyber Sector Hazards #013
export interface CyberHazardBlock_13 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_13: CyberHazardBlock_13[] = [
  {
    blockId: 'hazard_13_A',
    x: 315,
    y: 330,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 51,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_13_B',
    x: 560,
    y: 254,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 61,
    cycleTime: 3.5
  }
];
