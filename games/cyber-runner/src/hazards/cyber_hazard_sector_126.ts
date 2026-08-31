// CyberRunner Cyber Sector Hazards #126
export interface CyberHazardBlock_126 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_126: CyberHazardBlock_126[] = [
  {
    blockId: 'hazard_126_A',
    x: 210,
    y: 260,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 277,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_126_B',
    x: 420,
    y: 158,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 287,
    cycleTime: 4.0
  }
];
