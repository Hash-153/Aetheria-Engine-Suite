// CyberRunner Cyber Sector Hazards #039
export interface CyberHazardBlock_39 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_39: CyberHazardBlock_39[] = [
  {
    blockId: 'hazard_39_A',
    x: 705,
    y: 290,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 103,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_39_B',
    x: 680,
    y: 212,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 113,
    cycleTime: 4.5
  }
];
