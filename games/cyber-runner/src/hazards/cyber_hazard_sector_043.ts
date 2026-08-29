// CyberRunner Cyber Sector Hazards #043
export interface CyberHazardBlock_43 {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  hazardType: string;
  damageValue: number;
  cycleTime: number;
}

export const CYBER_HAZARDS_43: CyberHazardBlock_43[] = [
  {
    blockId: 'hazard_43_A',
    x: 165,
    y: 330,
    width: 80,
    height: 16,
    hazardType: 'ENERGY_SPIKE',
    damageValue: 111,
    cycleTime: 2.5
  },
  {
    blockId: 'hazard_43_B',
    x: 360,
    y: 244,
    width: 60,
    height: 16,
    hazardType: 'PLASMA_TURRET',
    damageValue: 121,
    cycleTime: 4.5
  }
];
