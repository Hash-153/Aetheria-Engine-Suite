// Stellar Vanguard Armada Formation #021
export interface FleetDoctrineSpec_21 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_21: FleetDoctrineSpec_21 = {
  doctrineId: 'doctrine_vanguard_021',
  doctrineName: 'Battle Group Armada #021',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 12,
  offensiveMultiplier: 1.08,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_21'
};
