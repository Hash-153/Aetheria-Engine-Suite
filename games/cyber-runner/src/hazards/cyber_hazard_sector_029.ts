// CyberRunner Cyber Sector Hazards #029
export interface CyberHazardBlock_29 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_29: CyberHazardBlock_29[] = [
  {
    blockId: 'hazard_29_A',
    x: 555,
    y: 490,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 83,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_29_B',
    x: 480,
    y: 382,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 93,
    cycleTime: 3.5
  }
];
