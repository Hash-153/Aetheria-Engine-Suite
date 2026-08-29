// CyberRunner Cyber Sector Hazards #051
export interface CyberHazardBlock_51 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_51: CyberHazardBlock_51[] = [
  {
    blockId: 'hazard_51_A',
    x: 285,
    y: 410,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 127,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_51_B',
    x: 520,
    y: 308,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 137,
    cycleTime: 4.5
  }
];
