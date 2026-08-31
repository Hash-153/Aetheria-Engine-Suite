// Stellar Vanguard Armada Formation #137
export interface FleetDoctrineSpec_137 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_137: FleetDoctrineSpec_137 = {
  doctrineId: 'doctrine_vanguard_137',
  doctrineName: 'Battle Group Armada #137',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 44,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_137'
};
