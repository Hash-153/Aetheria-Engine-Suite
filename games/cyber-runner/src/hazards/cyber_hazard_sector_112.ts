// CyberRunner Cyber Sector Hazards #112
export interface CyberHazardBlock_112 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_112: CyberHazardBlock_112[] = [
  {
    blockId: 'hazard_112_A',
    x: 600,
    y: 420,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 249,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_112_B',
    x: 540,
    y: 296,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 259,
    cycleTime: 3.0
  }
];
