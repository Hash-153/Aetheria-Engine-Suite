// CyberRunner Cyber Sector Hazards #025
export interface CyberHazardBlock_25 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_25: CyberHazardBlock_25[] = [
  {
    blockId: 'hazard_25_A',
    x: 495,
    y: 450,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 75,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_25_B',
    x: 400,
    y: 350,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 85,
    cycleTime: 3.5
  }
];
