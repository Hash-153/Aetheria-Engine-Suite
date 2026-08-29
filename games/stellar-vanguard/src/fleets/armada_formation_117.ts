// Stellar Vanguard Armada Formation #117
export interface FleetDoctrineSpec_117 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_117: FleetDoctrineSpec_117 = {
  doctrineId: 'doctrine_vanguard_117',
  doctrineName: 'Battle Group Armada #117',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 44,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_117'
};
