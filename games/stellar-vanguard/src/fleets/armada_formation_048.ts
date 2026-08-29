// Stellar Vanguard Armada Formation #048
export interface FleetDoctrineSpec_48 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_48: FleetDoctrineSpec_48 = {
  doctrineId: 'doctrine_vanguard_048',
  doctrineName: 'Battle Group Armada #048',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 26,
  offensiveMultiplier: 1.64,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.0,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_48'
};
