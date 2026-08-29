// CyberRunner Cyber Sector Hazards #111
export interface CyberHazardBlock_111 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_111: CyberHazardBlock_111[] = [
  {
    blockId: 'hazard_111_A',
    x: 585,
    y: 410,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 247,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_111_B',
    x: 520,
    y: 288,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 257,
    cycleTime: 4.5
  }
];
