// CyberRunner Cyber Sector Hazards #083
export interface CyberHazardBlock_83 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_83: CyberHazardBlock_83[] = [
  {
    blockId: 'hazard_83_A',
    x: 165,
    y: 430,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 191,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_83_B',
    x: 360,
    y: 314,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 201,
    cycleTime: 4.5
  }
];
