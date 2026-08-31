// Stellar Vanguard Armada Formation #054
export interface FleetDoctrineSpec_54 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_54: FleetDoctrineSpec_54 = {
  doctrineId: 'doctrine_vanguard_054',
  doctrineName: 'Battle Group Armada #054',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 38,
  offensiveMultiplier: 1.32,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_54'
};
