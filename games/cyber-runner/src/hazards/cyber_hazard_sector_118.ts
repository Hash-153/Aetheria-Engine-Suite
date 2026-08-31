// CyberRunner Cyber Sector Hazards #118
export interface CyberHazardBlock_118 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_118: CyberHazardBlock_118[] = [
  {
    blockId: 'hazard_118_A',
    x: 690,
    y: 480,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 261,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_118_B',
    x: 660,
    y: 344,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 271,
    cycleTime: 4.0
  }
];
