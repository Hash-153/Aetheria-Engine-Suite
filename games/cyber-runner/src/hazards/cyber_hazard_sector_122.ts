// CyberRunner Cyber Sector Hazards #122
export interface CyberHazardBlock_122 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_122: CyberHazardBlock_122[] = [
  {
    blockId: 'hazard_122_A',
    x: 150,
    y: 220,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 269,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_122_B',
    x: 340,
    y: 376,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 279,
    cycleTime: 4.0
  }
];
