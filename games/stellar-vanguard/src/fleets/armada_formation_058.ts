// Stellar Vanguard Armada Formation #058
export interface FleetDoctrineSpec_58 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_58: FleetDoctrineSpec_58 = {
  doctrineId: 'doctrine_vanguard_058',
  doctrineName: 'Battle Group Armada #058',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 46,
  offensiveMultiplier: 1.64,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_58'
};
