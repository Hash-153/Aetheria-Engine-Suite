// Stellar Vanguard Armada Formation #133
export interface FleetDoctrineSpec_133 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_133: FleetDoctrineSpec_133 = {
  doctrineId: 'doctrine_vanguard_133',
  doctrineName: 'Battle Group Armada #133',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 36,
  offensiveMultiplier: 1.24,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_133'
};
