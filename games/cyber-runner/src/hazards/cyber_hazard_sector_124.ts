// CyberRunner Cyber Sector Hazards #124
export interface CyberHazardBlock_124 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_124: CyberHazardBlock_124[] = [
  {
    blockId: 'hazard_124_A',
    x: 180,
    y: 240,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 273,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_124_B',
    x: 380,
    y: 392,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 283,
    cycleTime: 3.0
  }
];
