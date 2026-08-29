// Stellar Vanguard Armada Formation #061
export interface FleetDoctrineSpec_61 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_61: FleetDoctrineSpec_61 = {
  doctrineId: 'doctrine_vanguard_061',
  doctrineName: 'Battle Group Armada #061',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 12,
  offensiveMultiplier: 1.08,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_61'
};
