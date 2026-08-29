// CyberRunner Cyber Sector Hazards #130
export interface CyberHazardBlock_130 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_130: CyberHazardBlock_130[] = [
  {
    blockId: 'hazard_130_A',
    x: 270,
    y: 300,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 285,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_130_B',
    x: 500,
    y: 190,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 295,
    cycleTime: 4.0
  }
];
