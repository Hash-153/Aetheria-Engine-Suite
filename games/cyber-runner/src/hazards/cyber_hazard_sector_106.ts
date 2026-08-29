// CyberRunner Cyber Sector Hazards #106
export interface CyberHazardBlock_106 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_106: CyberHazardBlock_106[] = [
  {
    blockId: 'hazard_106_A',
    x: 510,
    y: 360,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 237,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_106_B',
    x: 420,
    y: 248,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 247,
    cycleTime: 4.0
  }
];
