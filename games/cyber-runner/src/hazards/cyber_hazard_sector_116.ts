// CyberRunner Cyber Sector Hazards #116
export interface CyberHazardBlock_116 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_116: CyberHazardBlock_116[] = [
  {
    blockId: 'hazard_116_A',
    x: 660,
    y: 460,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 257,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_116_B',
    x: 620,
    y: 328,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 267,
    cycleTime: 3.0
  }
];
