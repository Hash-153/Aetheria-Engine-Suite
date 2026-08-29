// CyberRunner Cyber Sector Hazards #146
export interface CyberHazardBlock_146 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_146: CyberHazardBlock_146[] = [
  {
    blockId: 'hazard_146_A',
    x: 510,
    y: 460,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 317,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_146_B',
    x: 420,
    y: 318,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 327,
    cycleTime: 4.0
  }
];
