// CyberRunner Cyber Sector Hazards #138
export interface CyberHazardBlock_138 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_138: CyberHazardBlock_138[] = [
  {
    blockId: 'hazard_138_A',
    x: 390,
    y: 380,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 301,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_138_B',
    x: 660,
    y: 254,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 311,
    cycleTime: 4.0
  }
];
