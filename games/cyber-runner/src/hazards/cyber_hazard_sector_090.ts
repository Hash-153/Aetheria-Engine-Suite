// CyberRunner Cyber Sector Hazards #090
export interface CyberHazardBlock_90 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_90: CyberHazardBlock_90[] = [
  {
    blockId: 'hazard_90_A',
    x: 270,
    y: 200,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 205,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_90_B',
    x: 500,
    y: 370,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 215,
    cycleTime: 4.0
  }
];
