// CyberRunner Cyber Sector Hazards #053
export interface CyberHazardBlock_53 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_53: CyberHazardBlock_53[] = [
  {
    blockId: 'hazard_53_A',
    x: 315,
    y: 430,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 131,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_53_B',
    x: 560,
    y: 324,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 141,
    cycleTime: 3.5
  }
];
