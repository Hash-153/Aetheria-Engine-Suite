// CyberRunner Cyber Sector Hazards #132
export interface CyberHazardBlock_132 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_132: CyberHazardBlock_132[] = [
  {
    blockId: 'hazard_132_A',
    x: 300,
    y: 320,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 289,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_132_B',
    x: 540,
    y: 206,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 299,
    cycleTime: 3.0
  }
];
