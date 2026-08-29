// CyberRunner Cyber Sector Hazards #020
export interface CyberHazardBlock_20 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_20: CyberHazardBlock_20[] = [
  {
    blockId: 'hazard_20_A',
    x: 420,
    y: 400,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 65,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_20_B',
    x: 300,
    y: 310,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 75,
    cycleTime: 3.0
  }
];
