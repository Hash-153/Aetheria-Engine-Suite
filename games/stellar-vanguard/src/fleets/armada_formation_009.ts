// Stellar Vanguard Armada Formation #009
export interface FleetDoctrineSpec_9 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_9: FleetDoctrineSpec_9 = {
  doctrineId: 'doctrine_vanguard_009',
  doctrineName: 'Battle Group Armada #009',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 28,
  offensiveMultiplier: 1.72,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_9'
};
