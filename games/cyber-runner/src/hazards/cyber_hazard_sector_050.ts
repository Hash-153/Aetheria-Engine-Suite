// CyberRunner Cyber Sector Hazards #050
export interface CyberHazardBlock_50 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_50: CyberHazardBlock_50[] = [
  {
    blockId: 'hazard_50_A',
    x: 270,
    y: 400,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 125,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_50_B',
    x: 500,
    y: 300,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 135,
    cycleTime: 4.0
  }
];
