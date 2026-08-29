// CyberRunner Cyber Sector Hazards #102
export interface CyberHazardBlock_102 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_102: CyberHazardBlock_102[] = [
  {
    blockId: 'hazard_102_A',
    x: 450,
    y: 320,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 229,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_102_B',
    x: 340,
    y: 216,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 239,
    cycleTime: 4.0
  }
];
