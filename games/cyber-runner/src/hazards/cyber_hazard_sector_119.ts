// CyberRunner Cyber Sector Hazards #119
export interface CyberHazardBlock_119 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_119: CyberHazardBlock_119[] = [
  {
    blockId: 'hazard_119_A',
    x: 705,
    y: 490,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 263,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_119_B',
    x: 680,
    y: 352,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 273,
    cycleTime: 4.5
  }
];
