// CyberRunner Cyber Sector Hazards #145
export interface CyberHazardBlock_145 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_145: CyberHazardBlock_145[] = [
  {
    blockId: 'hazard_145_A',
    x: 495,
    y: 450,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 315,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_145_B',
    x: 400,
    y: 310,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 325,
    cycleTime: 3.5
  }
];
