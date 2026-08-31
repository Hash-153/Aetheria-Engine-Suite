// CyberRunner Cyber Sector Hazards #101
export interface CyberHazardBlock_101 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_101: CyberHazardBlock_101[] = [
  {
    blockId: 'hazard_101_A',
    x: 435,
    y: 310,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 227,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_101_B',
    x: 320,
    y: 208,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 237,
    cycleTime: 3.5
  }
];
