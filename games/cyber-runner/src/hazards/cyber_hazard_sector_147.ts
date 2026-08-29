// CyberRunner Cyber Sector Hazards #147
export interface CyberHazardBlock_147 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_147: CyberHazardBlock_147[] = [
  {
    blockId: 'hazard_147_A',
    x: 525,
    y: 470,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 319,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_147_B',
    x: 440,
    y: 326,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 329,
    cycleTime: 4.5
  }
];
