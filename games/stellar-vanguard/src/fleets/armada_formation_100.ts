// Stellar Vanguard Armada Formation #100
export interface FleetDoctrineSpec_100 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_100: FleetDoctrineSpec_100 = {
  doctrineId: 'doctrine_vanguard_100',
  doctrineName: 'Battle Group Armada #100',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 10,
  offensiveMultiplier: 1.0,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_100'
};
