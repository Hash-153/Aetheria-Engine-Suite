// CyberRunner Cyber Sector Hazards #016
export interface CyberHazardBlock_16 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_16: CyberHazardBlock_16[] = [
  {
    blockId: 'hazard_16_A',
    x: 360,
    y: 360,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 57,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_16_B',
    x: 620,
    y: 278,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 67,
    cycleTime: 3.0
  }
];
