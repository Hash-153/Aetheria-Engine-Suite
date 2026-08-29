// CyberRunner Cyber Sector Hazards #041
export interface CyberHazardBlock_41 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_41: CyberHazardBlock_41[] = [
  {
    blockId: 'hazard_41_A',
    x: 135,
    y: 310,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 107,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_41_B',
    x: 320,
    y: 228,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 117,
    cycleTime: 3.5
  }
];
