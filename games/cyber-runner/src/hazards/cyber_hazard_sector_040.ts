// CyberRunner Cyber Sector Hazards #040
export interface CyberHazardBlock_40 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_40: CyberHazardBlock_40[] = [
  {
    blockId: 'hazard_40_A',
    x: 120,
    y: 300,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 105,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_40_B',
    x: 300,
    y: 220,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 115,
    cycleTime: 3.0
  }
];
