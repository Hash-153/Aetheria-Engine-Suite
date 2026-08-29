// CyberRunner Cyber Sector Hazards #087
export interface CyberHazardBlock_87 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_87: CyberHazardBlock_87[] = [
  {
    blockId: 'hazard_87_A',
    x: 225,
    y: 470,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 199,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_87_B',
    x: 440,
    y: 346,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 209,
    cycleTime: 4.5
  }
];
