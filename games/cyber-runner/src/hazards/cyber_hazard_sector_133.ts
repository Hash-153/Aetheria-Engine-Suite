// CyberRunner Cyber Sector Hazards #133
export interface CyberHazardBlock_133 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_133: CyberHazardBlock_133[] = [
  {
    blockId: 'hazard_133_A',
    x: 315,
    y: 330,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 291,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_133_B',
    x: 560,
    y: 214,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 301,
    cycleTime: 3.5
  }
];
