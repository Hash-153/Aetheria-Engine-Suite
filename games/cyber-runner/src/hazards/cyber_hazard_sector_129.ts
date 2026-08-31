// CyberRunner Cyber Sector Hazards #129
export interface CyberHazardBlock_129 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_129: CyberHazardBlock_129[] = [
  {
    blockId: 'hazard_129_A',
    x: 255,
    y: 290,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 283,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_129_B',
    x: 480,
    y: 182,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 293,
    cycleTime: 3.5
  }
];
