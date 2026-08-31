// CyberRunner Cyber Sector Hazards #096
export interface CyberHazardBlock_96 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_96: CyberHazardBlock_96[] = [
  {
    blockId: 'hazard_96_A',
    x: 360,
    y: 260,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 217,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_96_B',
    x: 620,
    y: 168,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 227,
    cycleTime: 3.0
  }
];
