// CyberRunner Cyber Sector Hazards #047
export interface CyberHazardBlock_47 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_47: CyberHazardBlock_47[] = [
  {
    blockId: 'hazard_47_A',
    x: 225,
    y: 370,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 119,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_47_B',
    x: 440,
    y: 276,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 129,
    cycleTime: 4.5
  }
];
