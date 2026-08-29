// CyberRunner Cyber Sector Hazards #014
export interface CyberHazardBlock_14 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_14: CyberHazardBlock_14[] = [
  {
    blockId: 'hazard_14_A',
    x: 330,
    y: 340,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 53,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_14_B',
    x: 580,
    y: 262,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 63,
    cycleTime: 4.0
  }
];
