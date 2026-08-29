// CyberRunner Cyber Sector Hazards #038
export interface CyberHazardBlock_38 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_38: CyberHazardBlock_38[] = [
  {
    blockId: 'hazard_38_A',
    x: 690,
    y: 280,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 101,
    cycleTime: 3.0
  },
  {
    blockId: 'hazard_38_B',
    x: 660,
    y: 204,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 111,
    cycleTime: 4.0
  }
];
