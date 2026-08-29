// CyberRunner Cyber Sector Hazards #128
export interface CyberHazardBlock_128 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_128: CyberHazardBlock_128[] = [
  {
    blockId: 'hazard_128_A',
    x: 240,
    y: 280,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 281,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_128_B',
    x: 460,
    y: 174,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 291,
    cycleTime: 3.0
  }
];
