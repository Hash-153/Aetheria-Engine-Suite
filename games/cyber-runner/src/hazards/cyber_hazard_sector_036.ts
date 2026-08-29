// CyberRunner Cyber Sector Hazards #036
export interface CyberHazardBlock_36 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_36: CyberHazardBlock_36[] = [
  {
    blockId: 'hazard_36_A',
    x: 660,
    y: 260,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 97,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_36_B',
    x: 620,
    y: 188,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 107,
    cycleTime: 3.0
  }
];
