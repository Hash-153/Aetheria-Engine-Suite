// Stellar Vanguard Armada Formation #114
export interface FleetDoctrineSpec_114 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_114: FleetDoctrineSpec_114 = {
  doctrineId: 'doctrine_vanguard_114',
  doctrineName: 'Battle Group Armada #114',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 38,
  offensiveMultiplier: 1.32,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_114'
};
