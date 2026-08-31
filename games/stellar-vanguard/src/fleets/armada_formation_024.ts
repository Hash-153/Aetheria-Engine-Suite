// Stellar Vanguard Armada Formation #024
export interface FleetDoctrineSpec_24 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_24: FleetDoctrineSpec_24 = {
  doctrineId: 'doctrine_vanguard_024',
  doctrineName: 'Battle Group Armada #024',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 18,
  offensiveMultiplier: 1.32,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_24'
};
