// CyberRunner Cyber Sector Hazards #008
export interface CyberHazardBlock_8 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_8: CyberHazardBlock_8[] = [
  {
    blockId: 'hazard_8_A',
    x: 240,
    y: 280,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 41,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_8_B',
    x: 460,
    y: 214,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 51,
    cycleTime: 3.0
  }
];
