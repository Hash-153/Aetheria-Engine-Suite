// CyberRunner Cyber Sector Hazards #143
export interface CyberHazardBlock_143 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_143: CyberHazardBlock_143[] = [
  {
    blockId: 'hazard_143_A',
    x: 465,
    y: 430,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 311,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_143_B',
    x: 360,
    y: 294,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 321,
    cycleTime: 4.5
  }
];
