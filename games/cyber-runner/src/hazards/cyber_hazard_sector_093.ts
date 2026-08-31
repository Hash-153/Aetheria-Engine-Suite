// CyberRunner Cyber Sector Hazards #093
export interface CyberHazardBlock_93 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_93: CyberHazardBlock_93[] = [
  {
    blockId: 'hazard_93_A',
    x: 315,
    y: 230,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 211,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_93_B',
    x: 560,
    y: 394,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 221,
    cycleTime: 3.5
  }
];
