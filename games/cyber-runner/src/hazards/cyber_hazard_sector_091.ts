// CyberRunner Cyber Sector Hazards #091
export interface CyberHazardBlock_91 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_91: CyberHazardBlock_91[] = [
  {
    blockId: 'hazard_91_A',
    x: 285,
    y: 210,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 207,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_91_B',
    x: 520,
    y: 378,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 217,
    cycleTime: 4.5
  }
];
