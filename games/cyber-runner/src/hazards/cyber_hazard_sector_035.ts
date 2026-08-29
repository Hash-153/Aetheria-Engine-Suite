// CyberRunner Cyber Sector Hazards #035
export interface CyberHazardBlock_35 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_35: CyberHazardBlock_35[] = [
  {
    blockId: 'hazard_35_A',
    x: 645,
    y: 250,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 95,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_35_B',
    x: 600,
    y: 180,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 105,
    cycleTime: 4.5
  }
];
