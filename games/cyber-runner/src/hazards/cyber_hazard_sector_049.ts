// CyberRunner Cyber Sector Hazards #049
export interface CyberHazardBlock_49 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_49: CyberHazardBlock_49[] = [
  {
    blockId: 'hazard_49_A',
    x: 255,
    y: 390,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 123,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_49_B',
    x: 480,
    y: 292,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 133,
    cycleTime: 3.5
  }
];
