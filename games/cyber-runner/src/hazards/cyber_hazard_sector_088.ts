// CyberRunner Cyber Sector Hazards #088
export interface CyberHazardBlock_88 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_88: CyberHazardBlock_88[] = [
  {
    blockId: 'hazard_88_A',
    x: 240,
    y: 480,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 201,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_88_B',
    x: 460,
    y: 354,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 211,
    cycleTime: 3.0
  }
];
