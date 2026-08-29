// CyberRunner Cyber Sector Hazards #149
export interface CyberHazardBlock_149 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_149: CyberHazardBlock_149[] = [
  {
    blockId: 'hazard_149_A',
    x: 555,
    y: 490,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 323,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_149_B',
    x: 480,
    y: 342,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 333,
    cycleTime: 3.5
  }
];
