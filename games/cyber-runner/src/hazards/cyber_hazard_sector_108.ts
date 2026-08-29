// CyberRunner Cyber Sector Hazards #108
export interface CyberHazardBlock_108 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_108: CyberHazardBlock_108[] = [
  {
    blockId: 'hazard_108_A',
    x: 540,
    y: 380,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 241,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_108_B',
    x: 460,
    y: 264,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 251,
    cycleTime: 3.0
  }
];
