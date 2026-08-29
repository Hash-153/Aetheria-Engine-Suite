// Stellar Vanguard Armada Formation #129
export interface FleetDoctrineSpec_129 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_129: FleetDoctrineSpec_129 = {
  doctrineId: 'doctrine_vanguard_129',
  doctrineName: 'Battle Group Armada #129',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 28,
  offensiveMultiplier: 1.72,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_129'
};
