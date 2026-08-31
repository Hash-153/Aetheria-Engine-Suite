// CyberRunner Cyber Sector Hazards #065
export interface CyberHazardBlock_65 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_65: CyberHazardBlock_65[] = [
  {
    blockId: 'hazard_65_A',
    x: 495,
    y: 250,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 155,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_65_B',
    x: 400,
    y: 170,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 165,
    cycleTime: 3.5
  }
];
