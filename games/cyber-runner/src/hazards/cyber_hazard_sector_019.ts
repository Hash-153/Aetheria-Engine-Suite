// CyberRunner Cyber Sector Hazards #019
export interface CyberHazardBlock_19 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_19: CyberHazardBlock_19[] = [
  {
    blockId: 'hazard_19_A',
    x: 405,
    y: 390,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 63,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_19_B',
    x: 680,
    y: 302,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 73,
    cycleTime: 4.5
  }
];
