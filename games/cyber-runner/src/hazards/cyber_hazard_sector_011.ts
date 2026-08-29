// CyberRunner Cyber Sector Hazards #011
export interface CyberHazardBlock_11 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_11: CyberHazardBlock_11[] = [
  {
    blockId: 'hazard_11_A',
    x: 285,
    y: 310,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 47,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_11_B',
    x: 520,
    y: 238,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 57,
    cycleTime: 4.5
  }
];
