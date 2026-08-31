// CyberRunner Cyber Sector Hazards #125
export interface CyberHazardBlock_125 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_125: CyberHazardBlock_125[] = [
  {
    blockId: 'hazard_125_A',
    x: 195,
    y: 250,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 275,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_125_B',
    x: 400,
    y: 150,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 285,
    cycleTime: 3.5
  }
];
