// CyberRunner Cyber Sector Hazards #007
export interface CyberHazardBlock_7 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_7: CyberHazardBlock_7[] = [
  {
    blockId: 'hazard_7_A',
    x: 225,
    y: 270,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 39,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_7_B',
    x: 440,
    y: 206,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 49,
    cycleTime: 4.5
  }
];
