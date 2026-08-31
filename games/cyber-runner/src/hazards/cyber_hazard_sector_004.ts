// CyberRunner Cyber Sector Hazards #004
export interface CyberHazardBlock_4 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_4: CyberHazardBlock_4[] = [
  {
    blockId: 'hazard_4_A',
    x: 180,
    y: 240,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 33,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_4_B',
    x: 380,
    y: 182,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 43,
    cycleTime: 3.0
  }
];
