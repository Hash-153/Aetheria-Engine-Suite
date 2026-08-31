// Stellar Vanguard Armada Formation #056
export interface FleetDoctrineSpec_56 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_56: FleetDoctrineSpec_56 = {
  doctrineId: 'doctrine_vanguard_056',
  doctrineName: 'Battle Group Armada #056',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 42,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_56'
};
