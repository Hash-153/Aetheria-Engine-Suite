// Stellar Vanguard Armada Formation #018
export interface FleetDoctrineSpec_18 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_18: FleetDoctrineSpec_18 = {
  doctrineId: 'doctrine_vanguard_018',
  doctrineName: 'Battle Group Armada #018',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 46,
  offensiveMultiplier: 1.64,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_18'
};
