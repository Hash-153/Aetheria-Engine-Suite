// CyberRunner Cyber Sector Hazards #027
export interface CyberHazardBlock_27 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_27: CyberHazardBlock_27[] = [
  {
    blockId: 'hazard_27_A',
    x: 525,
    y: 470,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 79,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_27_B',
    x: 440,
    y: 366,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 89,
    cycleTime: 4.5
  }
];
