// CyberRunner Cyber Sector Hazards #082
export interface CyberHazardBlock_82 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_82: CyberHazardBlock_82[] = [
  {
    blockId: 'hazard_82_A',
    x: 150,
    y: 420,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 189,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_82_B',
    x: 340,
    y: 306,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 199,
    cycleTime: 4.0
  }
];
