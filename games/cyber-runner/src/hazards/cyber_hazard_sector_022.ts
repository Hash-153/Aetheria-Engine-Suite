// CyberRunner Cyber Sector Hazards #022
export interface CyberHazardBlock_22 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_22: CyberHazardBlock_22[] = [
  {
    blockId: 'hazard_22_A',
    x: 450,
    y: 420,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 69,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_22_B',
    x: 340,
    y: 326,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 79,
    cycleTime: 4.0
  }
];
