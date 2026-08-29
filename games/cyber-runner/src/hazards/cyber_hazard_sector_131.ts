// CyberRunner Cyber Sector Hazards #131
export interface CyberHazardBlock_131 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_131: CyberHazardBlock_131[] = [
  {
    blockId: 'hazard_131_A',
    x: 285,
    y: 310,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 287,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_131_B',
    x: 520,
    y: 198,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 297,
    cycleTime: 4.5
  }
];
