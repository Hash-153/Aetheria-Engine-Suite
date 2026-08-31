// CyberRunner Cyber Sector Hazards #010
export interface CyberHazardBlock_10 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_10: CyberHazardBlock_10[] = [
  {
    blockId: 'hazard_10_A',
    x: 270,
    y: 300,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 45,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_10_B',
    x: 500,
    y: 230,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 55,
    cycleTime: 4.0
  }
];
