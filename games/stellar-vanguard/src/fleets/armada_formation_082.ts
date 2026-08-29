// Stellar Vanguard Armada Formation #082
export interface FleetDoctrineSpec_82 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_82: FleetDoctrineSpec_82 = {
  doctrineId: 'doctrine_vanguard_082',
  doctrineName: 'Battle Group Armada #082',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 14,
  offensiveMultiplier: 1.16,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_82'
};
