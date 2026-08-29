// CyberRunner Cyber Sector Hazards #021
export interface CyberHazardBlock_21 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_21: CyberHazardBlock_21[] = [
  {
    blockId: 'hazard_21_A',
    x: 435,
    y: 410,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 67,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_21_B',
    x: 320,
    y: 318,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 77,
    cycleTime: 3.5
  }
];
