// CyberRunner Cyber Sector Hazards #077
export interface CyberHazardBlock_77 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_77: CyberHazardBlock_77[] = [
  {
    blockId: 'hazard_77_A',
    x: 675,
    y: 370,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 179,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_77_B',
    x: 640,
    y: 266,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 189,
    cycleTime: 3.5
  }
];
