// CyberRunner Cyber Sector Hazards #110
export interface CyberHazardBlock_110 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_110: CyberHazardBlock_110[] = [
  {
    blockId: 'hazard_110_A',
    x: 570,
    y: 400,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 245,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_110_B',
    x: 500,
    y: 280,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 255,
    cycleTime: 4.0
  }
];
