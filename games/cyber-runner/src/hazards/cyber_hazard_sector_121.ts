// CyberRunner Cyber Sector Hazards #121
export interface CyberHazardBlock_121 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_121: CyberHazardBlock_121[] = [
  {
    blockId: 'hazard_121_A',
    x: 135,
    y: 210,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 267,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_121_B',
    x: 320,
    y: 368,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 277,
    cycleTime: 3.5
  }
];
