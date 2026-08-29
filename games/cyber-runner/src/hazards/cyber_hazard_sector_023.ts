// CyberRunner Cyber Sector Hazards #023
export interface CyberHazardBlock_23 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_23: CyberHazardBlock_23[] = [
  {
    blockId: 'hazard_23_A',
    x: 465,
    y: 430,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 71,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_23_B',
    x: 360,
    y: 334,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 81,
    cycleTime: 4.5
  }
];
