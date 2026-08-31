// CyberRunner Cyber Sector Hazards #072
export interface CyberHazardBlock_72 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_72: CyberHazardBlock_72[] = [
  {
    blockId: 'hazard_72_A',
    x: 600,
    y: 320,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 169,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_72_B',
    x: 540,
    y: 226,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 179,
    cycleTime: 3.0
  }
];
