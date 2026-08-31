// Stellar Vanguard Armada Formation #044
export interface FleetDoctrineSpec_44 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_44: FleetDoctrineSpec_44 = {
  doctrineId: 'doctrine_vanguard_044',
  doctrineName: 'Battle Group Armada #044',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 18,
  offensiveMultiplier: 1.32,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_44'
};
