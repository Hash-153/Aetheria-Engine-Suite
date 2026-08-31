// CyberRunner Cyber Sector Hazards #081
export interface CyberHazardBlock_81 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_81: CyberHazardBlock_81[] = [
  {
    blockId: 'hazard_81_A',
    x: 135,
    y: 410,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 187,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_81_B',
    x: 320,
    y: 298,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 197,
    cycleTime: 3.5
  }
];
