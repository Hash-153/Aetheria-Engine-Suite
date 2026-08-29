// CyberRunner Cyber Sector Hazards #026
export interface CyberHazardBlock_26 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_26: CyberHazardBlock_26[] = [
  {
    blockId: 'hazard_26_A',
    x: 510,
    y: 460,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 77,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_26_B',
    x: 420,
    y: 358,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 87,
    cycleTime: 4.0
  }
];
