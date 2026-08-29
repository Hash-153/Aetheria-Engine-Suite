// CyberRunner Cyber Sector Hazards #058
export interface CyberHazardBlock_58 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_58: CyberHazardBlock_58[] = [
  {
    blockId: 'hazard_58_A',
    x: 390,
    y: 480,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 141,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_58_B',
    x: 660,
    y: 364,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 151,
    cycleTime: 4.0
  }
];
