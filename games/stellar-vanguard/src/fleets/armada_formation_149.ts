// Stellar Vanguard Armada Formation #149
export interface FleetDoctrineSpec_149 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_149: FleetDoctrineSpec_149 = {
  doctrineId: 'doctrine_vanguard_149',
  doctrineName: 'Battle Group Armada #149',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 28,
  offensiveMultiplier: 1.72,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_149'
};
