// CyberRunner Cyber Sector Hazards #012
export interface CyberHazardBlock_12 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_12: CyberHazardBlock_12[] = [
  {
    blockId: 'hazard_12_A',
    x: 300,
    y: 320,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 49,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_12_B',
    x: 540,
    y: 246,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 59,
    cycleTime: 3.0
  }
];
