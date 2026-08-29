// Stellar Vanguard Armada Formation #002
export interface FleetDoctrineSpec_2 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_2: FleetDoctrineSpec_2 = {
  doctrineId: 'doctrine_vanguard_002',
  doctrineName: 'Battle Group Armada #002',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 14,
  offensiveMultiplier: 1.16,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_2'
};
