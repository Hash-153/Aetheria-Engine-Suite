// CyberRunner Cyber Sector Hazards #080
export interface CyberHazardBlock_80 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_80: CyberHazardBlock_80[] = [
  {
    blockId: 'hazard_80_A',
    x: 120,
    y: 400,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 185,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_80_B',
    x: 300,
    y: 290,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 195,
    cycleTime: 3.0
  }
];
