// CyberRunner Cyber Sector Hazards #017
export interface CyberHazardBlock_17 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_17: CyberHazardBlock_17[] = [
  {
    blockId: 'hazard_17_A',
    x: 375,
    y: 370,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 59,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_17_B',
    x: 640,
    y: 286,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 69,
    cycleTime: 3.5
  }
];
