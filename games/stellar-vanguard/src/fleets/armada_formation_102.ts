// Stellar Vanguard Armada Formation #102
export interface FleetDoctrineSpec_102 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_102: FleetDoctrineSpec_102 = {
  doctrineId: 'doctrine_vanguard_102',
  doctrineName: 'Battle Group Armada #102',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 14,
  offensiveMultiplier: 1.16,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_102'
};
