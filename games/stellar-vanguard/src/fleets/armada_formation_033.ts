// Stellar Vanguard Armada Formation #033
export interface FleetDoctrineSpec_33 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_33: FleetDoctrineSpec_33 = {
  doctrineId: 'doctrine_vanguard_033',
  doctrineName: 'Battle Group Armada #033',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 36,
  offensiveMultiplier: 1.24,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_33'
};
