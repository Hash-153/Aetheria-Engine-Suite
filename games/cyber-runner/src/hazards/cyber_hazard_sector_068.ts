// CyberRunner Cyber Sector Hazards #068
export interface CyberHazardBlock_68 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_68: CyberHazardBlock_68[] = [
  {
    blockId: 'hazard_68_A',
    x: 540,
    y: 280,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 161,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_68_B',
    x: 460,
    y: 194,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 171,
    cycleTime: 3.0
  }
];
