// CyberRunner Cyber Sector Hazards #114
export interface CyberHazardBlock_114 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_114: CyberHazardBlock_114[] = [
  {
    blockId: 'hazard_114_A',
    x: 630,
    y: 440,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 253,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_114_B',
    x: 580,
    y: 312,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 263,
    cycleTime: 4.0
  }
];
