// Stellar Vanguard Armada Formation #145
export interface FleetDoctrineSpec_145 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_145: FleetDoctrineSpec_145 = {
  doctrineId: 'doctrine_vanguard_145',
  doctrineName: 'Battle Group Armada #145',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 20,
  offensiveMultiplier: 1.4,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_145'
};
