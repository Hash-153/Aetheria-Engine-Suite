// CyberRunner Cyber Sector Hazards #109
export interface CyberHazardBlock_109 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_109: CyberHazardBlock_109[] = [
  {
    blockId: 'hazard_109_A',
    x: 555,
    y: 390,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 243,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_109_B',
    x: 480,
    y: 272,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 253,
    cycleTime: 3.5
  }
];
