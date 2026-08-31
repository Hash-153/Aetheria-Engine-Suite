// Stellar Vanguard Armada Formation #112
export interface FleetDoctrineSpec_112 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_112: FleetDoctrineSpec_112 = {
  doctrineId: 'doctrine_vanguard_112',
  doctrineName: 'Battle Group Armada #112',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 34,
  offensiveMultiplier: 1.16,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_112'
};
