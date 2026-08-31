// Stellar Vanguard Armada Formation #098
export interface FleetDoctrineSpec_98 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_98: FleetDoctrineSpec_98 = {
  doctrineId: 'doctrine_vanguard_098',
  doctrineName: 'Battle Group Armada #098',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 46,
  offensiveMultiplier: 1.64,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_98'
};
