// CyberRunner Cyber Sector Hazards #104
export interface CyberHazardBlock_104 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_104: CyberHazardBlock_104[] = [
  {
    blockId: 'hazard_104_A',
    x: 480,
    y: 340,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 233,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_104_B',
    x: 380,
    y: 232,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 243,
    cycleTime: 3.0
  }
];
