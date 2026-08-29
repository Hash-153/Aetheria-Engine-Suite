// CyberRunner Cyber Sector Hazards #123
export interface CyberHazardBlock_123 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_123: CyberHazardBlock_123[] = [
  {
    blockId: 'hazard_123_A',
    x: 165,
    y: 230,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 271,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_123_B',
    x: 360,
    y: 384,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 281,
    cycleTime: 4.5
  }
];
