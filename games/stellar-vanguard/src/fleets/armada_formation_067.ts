// Stellar Vanguard Armada Formation #067
export interface FleetDoctrineSpec_67 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_67: FleetDoctrineSpec_67 = {
  doctrineId: 'doctrine_vanguard_067',
  doctrineName: 'Battle Group Armada #067',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 24,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_67'
};
