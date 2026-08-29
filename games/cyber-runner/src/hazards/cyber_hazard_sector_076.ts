// CyberRunner Cyber Sector Hazards #076
export interface CyberHazardBlock_76 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_76: CyberHazardBlock_76[] = [
  {
    blockId: 'hazard_76_A',
    x: 660,
    y: 360,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 177,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_76_B',
    x: 620,
    y: 258,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 187,
    cycleTime: 3.0
  }
];
