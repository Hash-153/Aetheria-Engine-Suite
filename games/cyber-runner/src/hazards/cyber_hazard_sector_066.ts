// CyberRunner Cyber Sector Hazards #066
export interface CyberHazardBlock_66 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_66: CyberHazardBlock_66[] = [
  {
    blockId: 'hazard_66_A',
    x: 510,
    y: 260,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 157,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_66_B',
    x: 420,
    y: 178,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 167,
    cycleTime: 4.0
  }
];
