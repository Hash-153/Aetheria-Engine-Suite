// CyberRunner Cyber Sector Hazards #059
export interface CyberHazardBlock_59 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_59: CyberHazardBlock_59[] = [
  {
    blockId: 'hazard_59_A',
    x: 405,
    y: 490,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 143,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_59_B',
    x: 680,
    y: 372,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 153,
    cycleTime: 4.5
  }
];
