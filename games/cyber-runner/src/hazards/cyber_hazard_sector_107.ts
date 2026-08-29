// CyberRunner Cyber Sector Hazards #107
export interface CyberHazardBlock_107 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_107: CyberHazardBlock_107[] = [
  {
    blockId: 'hazard_107_A',
    x: 525,
    y: 370,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 239,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_107_B',
    x: 440,
    y: 256,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 249,
    cycleTime: 4.5
  }
];
