// CyberRunner Cyber Sector Hazards #127
export interface CyberHazardBlock_127 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_127: CyberHazardBlock_127[] = [
  {
    blockId: 'hazard_127_A',
    x: 225,
    y: 270,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 279,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_127_B',
    x: 440,
    y: 166,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 289,
    cycleTime: 4.5
  }
];
