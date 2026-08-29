// CyberRunner Cyber Sector Hazards #135
export interface CyberHazardBlock_135 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_135: CyberHazardBlock_135[] = [
  {
    blockId: 'hazard_135_A',
    x: 345,
    y: 350,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 295,
    cycleTime: 2.0
  },
  {
    blockId: 'hazard_135_B',
    x: 600,
    y: 230,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 305,
    cycleTime: 4.5
  }
];
