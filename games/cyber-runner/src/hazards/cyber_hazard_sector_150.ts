// CyberRunner Cyber Sector Hazards #150
export interface CyberHazardBlock_150 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_150: CyberHazardBlock_150[] = [
  {
    blockId: 'hazard_150_A',
    x: 570,
    y: 200,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 325,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_150_B',
    x: 500,
    y: 350,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 335,
    cycleTime: 4.0
  }
];
