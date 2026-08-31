// Stellar Vanguard Armada Formation #136
export interface FleetDoctrineSpec_136 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_136: FleetDoctrineSpec_136 = {
  doctrineId: 'doctrine_vanguard_136',
  doctrineName: 'Battle Group Armada #136',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 42,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.0,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_136'
};
