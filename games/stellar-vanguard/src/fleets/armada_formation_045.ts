// Stellar Vanguard Armada Formation #045
export interface FleetDoctrineSpec_45 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_45: FleetDoctrineSpec_45 = {
  doctrineId: 'doctrine_vanguard_045',
  doctrineName: 'Battle Group Armada #045',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 20,
  offensiveMultiplier: 1.4,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_45'
};
