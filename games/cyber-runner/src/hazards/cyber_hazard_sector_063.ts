// CyberRunner Cyber Sector Hazards #063
export interface CyberHazardBlock_63 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_63: CyberHazardBlock_63[] = [
  {
    blockId: 'hazard_63_A',
    x: 465,
    y: 230,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 151,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_63_B',
    x: 360,
    y: 154,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 161,
    cycleTime: 4.5
  }
];
