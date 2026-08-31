// Stellar Vanguard Armada Formation #005
export interface FleetDoctrineSpec_5 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_5: FleetDoctrineSpec_5 = {
  doctrineId: 'doctrine_vanguard_005',
  doctrineName: 'Battle Group Armada #005',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 20,
  offensiveMultiplier: 1.4,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_5'
};
