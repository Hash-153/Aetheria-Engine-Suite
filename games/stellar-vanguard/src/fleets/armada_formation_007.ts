// Stellar Vanguard Armada Formation #007
export interface FleetDoctrineSpec_7 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_7: FleetDoctrineSpec_7 = {
  doctrineId: 'doctrine_vanguard_007',
  doctrineName: 'Battle Group Armada #007',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 24,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_7'
};
