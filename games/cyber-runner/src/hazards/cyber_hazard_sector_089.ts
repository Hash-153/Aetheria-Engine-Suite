// CyberRunner Cyber Sector Hazards #089
export interface CyberHazardBlock_89 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_89: CyberHazardBlock_89[] = [
  {
    blockId: 'hazard_89_A',
    x: 255,
    y: 490,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 203,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_89_B',
    x: 480,
    y: 362,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 213,
    cycleTime: 3.5
  }
];
