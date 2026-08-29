// CyberRunner Cyber Sector Hazards #079
export interface CyberHazardBlock_79 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_79: CyberHazardBlock_79[] = [
  {
    blockId: 'hazard_79_A',
    x: 705,
    y: 390,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 183,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_79_B',
    x: 680,
    y: 282,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 193,
    cycleTime: 4.5
  }
];
