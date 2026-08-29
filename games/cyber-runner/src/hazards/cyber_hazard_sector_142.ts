// CyberRunner Cyber Sector Hazards #142
export interface CyberHazardBlock_142 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_142: CyberHazardBlock_142[] = [
  {
    blockId: 'hazard_142_A',
    x: 450,
    y: 420,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 309,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_142_B',
    x: 340,
    y: 286,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 319,
    cycleTime: 4.0
  }
];
