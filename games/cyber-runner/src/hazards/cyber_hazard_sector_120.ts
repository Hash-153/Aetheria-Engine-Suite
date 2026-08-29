// CyberRunner Cyber Sector Hazards #120
export interface CyberHazardBlock_120 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_120: CyberHazardBlock_120[] = [
  {
    blockId: 'hazard_120_A',
    x: 120,
    y: 200,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 265,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_120_B',
    x: 300,
    y: 360,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 275,
    cycleTime: 3.0
  }
];
