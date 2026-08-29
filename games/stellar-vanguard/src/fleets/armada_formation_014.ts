// Stellar Vanguard Armada Formation #014
export interface FleetDoctrineSpec_14 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_14: FleetDoctrineSpec_14 = {
  doctrineId: 'doctrine_vanguard_014',
  doctrineName: 'Battle Group Armada #014',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 38,
  offensiveMultiplier: 1.32,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_14'
};
