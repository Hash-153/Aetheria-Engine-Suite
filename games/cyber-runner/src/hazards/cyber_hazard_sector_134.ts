// CyberRunner Cyber Sector Hazards #134
export interface CyberHazardBlock_134 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_134: CyberHazardBlock_134[] = [
  {
    blockId: 'hazard_134_A',
    x: 330,
    y: 340,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 293,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_134_B',
    x: 580,
    y: 222,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 303,
    cycleTime: 4.0
  }
];
