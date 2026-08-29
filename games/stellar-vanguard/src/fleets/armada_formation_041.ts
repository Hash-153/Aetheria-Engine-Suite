// Stellar Vanguard Armada Formation #041
export interface FleetDoctrineSpec_41 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_41: FleetDoctrineSpec_41 = {
  doctrineId: 'doctrine_vanguard_041',
  doctrineName: 'Battle Group Armada #041',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 12,
  offensiveMultiplier: 1.08,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_41'
};
