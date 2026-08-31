// CyberRunner Cyber Sector Hazards #054
export interface CyberHazardBlock_54 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_54: CyberHazardBlock_54[] = [
  {
    blockId: 'hazard_54_A',
    x: 330,
    y: 440,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 133,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_54_B',
    x: 580,
    y: 332,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 143,
    cycleTime: 4.0
  }
];
