// CyberRunner Cyber Sector Hazards #100
export interface CyberHazardBlock_100 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_100: CyberHazardBlock_100[] = [
  {
    blockId: 'hazard_100_A',
    x: 420,
    y: 300,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 225,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_100_B',
    x: 300,
    y: 200,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 235,
    cycleTime: 3.0
  }
];
