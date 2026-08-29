// CyberRunner Cyber Sector Hazards #099
export interface CyberHazardBlock_99 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_99: CyberHazardBlock_99[] = [
  {
    blockId: 'hazard_99_A',
    x: 405,
    y: 290,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 223,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_99_B',
    x: 680,
    y: 192,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 233,
    cycleTime: 4.5
  }
];
