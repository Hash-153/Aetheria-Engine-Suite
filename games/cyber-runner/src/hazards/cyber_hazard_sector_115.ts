// CyberRunner Cyber Sector Hazards #115
export interface CyberHazardBlock_115 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_115: CyberHazardBlock_115[] = [
  {
    blockId: 'hazard_115_A',
    x: 645,
    y: 450,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 255,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_115_B',
    x: 600,
    y: 320,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 265,
    cycleTime: 4.5
  }
];
