// Stellar Vanguard Armada Formation #138
export interface FleetDoctrineSpec_138 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_138: FleetDoctrineSpec_138 = {
  doctrineId: 'doctrine_vanguard_138',
  doctrineName: 'Battle Group Armada #138',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 46,
  offensiveMultiplier: 1.64,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_138'
};
