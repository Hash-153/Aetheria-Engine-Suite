// Stellar Vanguard Armada Formation #064
export interface FleetDoctrineSpec_64 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_64: FleetDoctrineSpec_64 = {
  doctrineId: 'doctrine_vanguard_064',
  doctrineName: 'Battle Group Armada #064',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 18,
  offensiveMultiplier: 1.32,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_64'
};
