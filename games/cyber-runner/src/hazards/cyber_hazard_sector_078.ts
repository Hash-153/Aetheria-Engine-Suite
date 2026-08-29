// CyberRunner Cyber Sector Hazards #078
export interface CyberHazardBlock_78 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_78: CyberHazardBlock_78[] = [
  {
    blockId: 'hazard_78_A',
    x: 690,
    y: 380,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 181,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_78_B',
    x: 660,
    y: 274,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 191,
    cycleTime: 4.0
  }
];
