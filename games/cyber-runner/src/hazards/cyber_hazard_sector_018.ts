// CyberRunner Cyber Sector Hazards #018
export interface CyberHazardBlock_18 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_18: CyberHazardBlock_18[] = [
  {
    blockId: 'hazard_18_A',
    x: 390,
    y: 380,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 61,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_18_B',
    x: 660,
    y: 294,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 71,
    cycleTime: 4.0
  }
];
