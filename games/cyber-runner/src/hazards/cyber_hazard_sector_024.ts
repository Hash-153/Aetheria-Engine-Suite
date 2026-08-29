// CyberRunner Cyber Sector Hazards #024
export interface CyberHazardBlock_24 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_24: CyberHazardBlock_24[] = [
  {
    blockId: 'hazard_24_A',
    x: 480,
    y: 440,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 73,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_24_B',
    x: 380,
    y: 342,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 83,
    cycleTime: 3.0
  }
];
