// Stellar Vanguard Armada Formation #103
export interface FleetDoctrineSpec_103 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_103: FleetDoctrineSpec_103 = {
  doctrineId: 'doctrine_vanguard_103',
  doctrineName: 'Battle Group Armada #103',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 16,
  offensiveMultiplier: 1.24,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_103'
};
