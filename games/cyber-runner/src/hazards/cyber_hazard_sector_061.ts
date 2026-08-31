// CyberRunner Cyber Sector Hazards #061
export interface CyberHazardBlock_61 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_61: CyberHazardBlock_61[] = [
  {
    blockId: 'hazard_61_A',
    x: 435,
    y: 210,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 147,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_61_B',
    x: 320,
    y: 388,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 157,
    cycleTime: 3.5
  }
];
