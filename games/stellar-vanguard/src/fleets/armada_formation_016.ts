// Stellar Vanguard Armada Formation #016
export interface FleetDoctrineSpec_16 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_16: FleetDoctrineSpec_16 = {
  doctrineId: 'doctrine_vanguard_016',
  doctrineName: 'Battle Group Armada #016',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 42,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_16'
};
