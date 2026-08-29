// CyberRunner Cyber Sector Hazards #074
export interface CyberHazardBlock_74 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_74: CyberHazardBlock_74[] = [
  {
    blockId: 'hazard_74_A',
    x: 630,
    y: 340,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 173,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_74_B',
    x: 580,
    y: 242,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 183,
    cycleTime: 4.0
  }
];
