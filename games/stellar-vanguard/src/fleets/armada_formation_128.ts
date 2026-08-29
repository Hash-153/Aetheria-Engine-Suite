// Stellar Vanguard Armada Formation #128
export interface FleetDoctrineSpec_128 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_128: FleetDoctrineSpec_128 = {
  doctrineId: 'doctrine_vanguard_128',
  doctrineName: 'Battle Group Armada #128',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 26,
  offensiveMultiplier: 1.64,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_128'
};
