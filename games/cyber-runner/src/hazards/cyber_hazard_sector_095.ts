// CyberRunner Cyber Sector Hazards #095
export interface CyberHazardBlock_95 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_95: CyberHazardBlock_95[] = [
  {
    blockId: 'hazard_95_A',
    x: 345,
    y: 250,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 215,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_95_B',
    x: 600,
    y: 160,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 225,
    cycleTime: 4.5
  }
];
