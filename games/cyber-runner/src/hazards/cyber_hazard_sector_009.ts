// CyberRunner Cyber Sector Hazards #009
export interface CyberHazardBlock_9 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_9: CyberHazardBlock_9[] = [
  {
    blockId: 'hazard_9_A',
    x: 255,
    y: 290,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 43,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_9_B',
    x: 480,
    y: 222,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 53,
    cycleTime: 3.5
  }
];
