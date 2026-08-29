// CyberRunner Cyber Sector Hazards #148
export interface CyberHazardBlock_148 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_148: CyberHazardBlock_148[] = [
  {
    blockId: 'hazard_148_A',
    x: 540,
    y: 480,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 321,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_148_B',
    x: 460,
    y: 334,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 331,
    cycleTime: 3.0
  }
];
