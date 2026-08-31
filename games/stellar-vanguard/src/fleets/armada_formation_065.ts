// Stellar Vanguard Armada Formation #065
export interface FleetDoctrineSpec_65 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_65: FleetDoctrineSpec_65 = {
  doctrineId: 'doctrine_vanguard_065',
  doctrineName: 'Battle Group Armada #065',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 20,
  offensiveMultiplier: 1.4,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_65'
};
