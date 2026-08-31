// CyberRunner Cyber Sector Hazards #094
export interface CyberHazardBlock_94 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_94: CyberHazardBlock_94[] = [
  {
    blockId: 'hazard_94_A',
    x: 330,
    y: 240,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 213,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_94_B',
    x: 580,
    y: 152,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 223,
    cycleTime: 4.0
  }
];
