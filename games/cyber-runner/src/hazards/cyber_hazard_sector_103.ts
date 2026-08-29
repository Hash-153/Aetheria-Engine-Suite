// CyberRunner Cyber Sector Hazards #103
export interface CyberHazardBlock_103 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_103: CyberHazardBlock_103[] = [
  {
    blockId: 'hazard_103_A',
    x: 465,
    y: 330,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 231,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_103_B',
    x: 360,
    y: 224,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 241,
    cycleTime: 4.5
  }
];
