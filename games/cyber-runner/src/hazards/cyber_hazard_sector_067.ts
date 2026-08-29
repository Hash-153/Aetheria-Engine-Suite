// CyberRunner Cyber Sector Hazards #067
export interface CyberHazardBlock_67 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_67: CyberHazardBlock_67[] = [
  {
    blockId: 'hazard_67_A',
    x: 525,
    y: 270,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 159,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_67_B',
    x: 440,
    y: 186,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 169,
    cycleTime: 4.5
  }
];
