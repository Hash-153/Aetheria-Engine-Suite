// CyberRunner Cyber Sector Hazards #060
export interface CyberHazardBlock_60 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_60: CyberHazardBlock_60[] = [
  {
    blockId: 'hazard_60_A',
    x: 420,
    y: 200,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 145,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_60_B',
    x: 300,
    y: 380,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 155,
    cycleTime: 3.0
  }
];
