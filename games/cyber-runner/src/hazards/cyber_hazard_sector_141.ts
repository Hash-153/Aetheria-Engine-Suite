// CyberRunner Cyber Sector Hazards #141
export interface CyberHazardBlock_141 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_141: CyberHazardBlock_141[] = [
  {
    blockId: 'hazard_141_A',
    x: 435,
    y: 410,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 307,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_141_B',
    x: 320,
    y: 278,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 317,
    cycleTime: 3.5
  }
];
