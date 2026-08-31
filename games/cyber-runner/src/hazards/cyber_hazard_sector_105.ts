// CyberRunner Cyber Sector Hazards #105
export interface CyberHazardBlock_105 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_105: CyberHazardBlock_105[] = [
  {
    blockId: 'hazard_105_A',
    x: 495,
    y: 350,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 235,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_105_B',
    x: 400,
    y: 240,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 245,
    cycleTime: 3.5
  }
];
