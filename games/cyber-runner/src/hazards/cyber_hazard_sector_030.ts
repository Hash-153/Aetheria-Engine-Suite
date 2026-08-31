// CyberRunner Cyber Sector Hazards #030
export interface CyberHazardBlock_30 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_30: CyberHazardBlock_30[] = [
  {
    blockId: 'hazard_30_A',
    x: 570,
    y: 200,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 85,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_30_B',
    x: 500,
    y: 390,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 95,
    cycleTime: 4.0
  }
];
