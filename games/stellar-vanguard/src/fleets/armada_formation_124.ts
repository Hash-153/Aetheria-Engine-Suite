// Stellar Vanguard Armada Formation #124
export interface FleetDoctrineSpec_124 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_124: FleetDoctrineSpec_124 = {
  doctrineId: 'doctrine_vanguard_124',
  doctrineName: 'Battle Group Armada #124',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 18,
  offensiveMultiplier: 1.32,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_124'
};
