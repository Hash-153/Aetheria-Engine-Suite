// CyberRunner Cyber Sector Hazards #071
export interface CyberHazardBlock_71 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_71: CyberHazardBlock_71[] = [
  {
    blockId: 'hazard_71_A',
    x: 585,
    y: 310,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 167,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_71_B',
    x: 520,
    y: 218,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 177,
    cycleTime: 4.5
  }
];
