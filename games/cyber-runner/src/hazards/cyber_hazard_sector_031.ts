// CyberRunner Cyber Sector Hazards #031
export interface CyberHazardBlock_31 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_31: CyberHazardBlock_31[] = [
  {
    blockId: 'hazard_31_A',
    x: 585,
    y: 210,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 87,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_31_B',
    x: 520,
    y: 398,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 97,
    cycleTime: 4.5
  }
];
