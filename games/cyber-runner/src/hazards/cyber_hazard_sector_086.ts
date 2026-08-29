// CyberRunner Cyber Sector Hazards #086
export interface CyberHazardBlock_86 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_86: CyberHazardBlock_86[] = [
  {
    blockId: 'hazard_86_A',
    x: 210,
    y: 460,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 197,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_86_B',
    x: 420,
    y: 338,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 207,
    cycleTime: 4.0
  }
];
