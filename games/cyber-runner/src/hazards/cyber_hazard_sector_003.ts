// CyberRunner Cyber Sector Hazards #003
export interface CyberHazardBlock_3 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_3: CyberHazardBlock_3[] = [
  {
    blockId: 'hazard_3_A',
    x: 165,
    y: 230,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 31,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_3_B',
    x: 360,
    y: 174,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 41,
    cycleTime: 4.5
  }
];
