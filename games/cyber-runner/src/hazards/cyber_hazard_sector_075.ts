// CyberRunner Cyber Sector Hazards #075
export interface CyberHazardBlock_75 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_75: CyberHazardBlock_75[] = [
  {
    blockId: 'hazard_75_A',
    x: 645,
    y: 350,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 175,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_75_B',
    x: 600,
    y: 250,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 185,
    cycleTime: 4.5
  }
];
