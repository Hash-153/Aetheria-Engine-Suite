// CyberRunner Cyber Sector Hazards #001
export interface CyberHazardBlock_1 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_1: CyberHazardBlock_1[] = [
  {
    blockId: 'hazard_1_A',
    x: 135,
    y: 210,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 27,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_1_B',
    x: 320,
    y: 158,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 37,
    cycleTime: 3.5
  }
];
