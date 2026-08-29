// CyberRunner Cyber Sector Hazards #045
export interface CyberHazardBlock_45 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_45: CyberHazardBlock_45[] = [
  {
    blockId: 'hazard_45_A',
    x: 195,
    y: 350,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 115,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_45_B',
    x: 400,
    y: 260,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 125,
    cycleTime: 3.5
  }
];
