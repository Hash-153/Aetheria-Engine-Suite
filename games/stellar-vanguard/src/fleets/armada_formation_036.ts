// Stellar Vanguard Armada Formation #036
export interface FleetDoctrineSpec_36 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_36: FleetDoctrineSpec_36 = {
  doctrineId: 'doctrine_vanguard_036',
  doctrineName: 'Battle Group Armada #036',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 42,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_36'
};
