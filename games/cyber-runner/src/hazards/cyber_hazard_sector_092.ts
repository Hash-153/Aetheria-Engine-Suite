// CyberRunner Cyber Sector Hazards #092
export interface CyberHazardBlock_92 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_92: CyberHazardBlock_92[] = [
  {
    blockId: 'hazard_92_A',
    x: 300,
    y: 220,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 209,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_92_B',
    x: 540,
    y: 386,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 219,
    cycleTime: 3.0
  }
];
