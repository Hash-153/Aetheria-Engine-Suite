// Stellar Vanguard Armada Formation #069
export interface FleetDoctrineSpec_69 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_69: FleetDoctrineSpec_69 = {
  doctrineId: 'doctrine_vanguard_069',
  doctrineName: 'Battle Group Armada #069',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 28,
  offensiveMultiplier: 1.72,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_69'
};
