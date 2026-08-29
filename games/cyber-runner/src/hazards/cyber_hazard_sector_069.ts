// CyberRunner Cyber Sector Hazards #069
export interface CyberHazardBlock_69 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_69: CyberHazardBlock_69[] = [
  {
    blockId: 'hazard_69_A',
    x: 555,
    y: 290,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 163,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_69_B',
    x: 480,
    y: 202,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 173,
    cycleTime: 3.5
  }
];
