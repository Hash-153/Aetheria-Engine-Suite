// CyberRunner Cyber Sector Hazards #046
export interface CyberHazardBlock_46 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_46: CyberHazardBlock_46[] = [
  {
    blockId: 'hazard_46_A',
    x: 210,
    y: 360,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 117,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_46_B',
    x: 420,
    y: 268,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 127,
    cycleTime: 4.0
  }
];
