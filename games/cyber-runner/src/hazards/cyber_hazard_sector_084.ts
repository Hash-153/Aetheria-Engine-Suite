// CyberRunner Cyber Sector Hazards #084
export interface CyberHazardBlock_84 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_84: CyberHazardBlock_84[] = [
  {
    blockId: 'hazard_84_A',
    x: 180,
    y: 440,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 193,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_84_B',
    x: 380,
    y: 322,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 203,
    cycleTime: 3.0
  }
];
