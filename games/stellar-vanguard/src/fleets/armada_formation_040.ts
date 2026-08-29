// Stellar Vanguard Armada Formation #040
export interface FleetDoctrineSpec_40 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_40: FleetDoctrineSpec_40 = {
  doctrineId: 'doctrine_vanguard_040',
  doctrineName: 'Battle Group Armada #040',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 10,
  offensiveMultiplier: 1.0,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_40'
};
