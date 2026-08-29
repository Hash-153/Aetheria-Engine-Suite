// CyberRunner Cyber Sector Hazards #032
export interface CyberHazardBlock_32 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_32: CyberHazardBlock_32[] = [
  {
    blockId: 'hazard_32_A',
    x: 600,
    y: 220,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 89,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_32_B',
    x: 540,
    y: 156,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 99,
    cycleTime: 3.0
  }
];
