// CyberRunner Cyber Sector Hazards #070
export interface CyberHazardBlock_70 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_70: CyberHazardBlock_70[] = [
  {
    blockId: 'hazard_70_A',
    x: 570,
    y: 300,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 165,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_70_B',
    x: 500,
    y: 210,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 175,
    cycleTime: 4.0
  }
];
