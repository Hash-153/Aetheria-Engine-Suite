// CyberRunner Cyber Sector Hazards #052
export interface CyberHazardBlock_52 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_52: CyberHazardBlock_52[] = [
  {
    blockId: 'hazard_52_A',
    x: 300,
    y: 420,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 129,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_52_B',
    x: 540,
    y: 316,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 139,
    cycleTime: 3.0
  }
];
