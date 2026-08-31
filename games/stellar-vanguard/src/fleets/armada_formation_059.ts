// Stellar Vanguard Armada Formation #059
export interface FleetDoctrineSpec_59 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_59: FleetDoctrineSpec_59 = {
  doctrineId: 'doctrine_vanguard_059',
  doctrineName: 'Battle Group Armada #059',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 48,
  offensiveMultiplier: 1.72,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_59'
};
