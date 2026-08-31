// CyberRunner Cyber Sector Hazards #044
export interface CyberHazardBlock_44 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_44: CyberHazardBlock_44[] = [
  {
    blockId: 'hazard_44_A',
    x: 180,
    y: 340,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 113,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_44_B',
    x: 380,
    y: 252,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 123,
    cycleTime: 3.0
  }
];
