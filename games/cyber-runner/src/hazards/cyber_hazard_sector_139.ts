// CyberRunner Cyber Sector Hazards #139
export interface CyberHazardBlock_139 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_139: CyberHazardBlock_139[] = [
  {
    blockId: 'hazard_139_A',
    x: 405,
    y: 390,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 303,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_139_B',
    x: 680,
    y: 262,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 313,
    cycleTime: 4.5
  }
];
