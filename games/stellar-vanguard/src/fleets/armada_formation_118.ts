// Stellar Vanguard Armada Formation #118
export interface FleetDoctrineSpec_118 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_118: FleetDoctrineSpec_118 = {
  doctrineId: 'doctrine_vanguard_118',
  doctrineName: 'Battle Group Armada #118',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 46,
  offensiveMultiplier: 1.64,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_118'
};
