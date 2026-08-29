// CyberRunner Cyber Sector Hazards #137
export interface CyberHazardBlock_137 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_137: CyberHazardBlock_137[] = [
  {
    blockId: 'hazard_137_A',
    x: 375,
    y: 370,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 299,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_137_B',
    x: 640,
    y: 246,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 309,
    cycleTime: 3.5
  }
];
