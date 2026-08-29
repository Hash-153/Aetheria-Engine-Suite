// CyberRunner Cyber Sector Hazards #005
export interface CyberHazardBlock_5 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_5: CyberHazardBlock_5[] = [
  {
    blockId: 'hazard_5_A',
    x: 195,
    y: 250,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 35,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_5_B',
    x: 400,
    y: 190,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 45,
    cycleTime: 3.5
  }
];
