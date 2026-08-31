// CyberRunner Cyber Sector Hazards #140
export interface CyberHazardBlock_140 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_140: CyberHazardBlock_140[] = [
  {
    blockId: 'hazard_140_A',
    x: 420,
    y: 400,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 305,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_140_B',
    x: 300,
    y: 270,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 315,
    cycleTime: 3.0
  }
];
