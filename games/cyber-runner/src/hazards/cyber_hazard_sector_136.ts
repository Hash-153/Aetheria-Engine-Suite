// CyberRunner Cyber Sector Hazards #136
export interface CyberHazardBlock_136 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_136: CyberHazardBlock_136[] = [
  {
    blockId: 'hazard_136_A',
    x: 360,
    y: 360,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 297,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_136_B',
    x: 620,
    y: 238,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 307,
    cycleTime: 3.0
  }
];
