// CyberRunner Cyber Sector Hazards #064
export interface CyberHazardBlock_64 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_64: CyberHazardBlock_64[] = [
  {
    blockId: 'hazard_64_A',
    x: 480,
    y: 240,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 153,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_64_B',
    x: 380,
    y: 162,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 163,
    cycleTime: 3.0
  }
];
