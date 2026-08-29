// Stellar Vanguard Armada Formation #073
export interface FleetDoctrineSpec_73 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_73: FleetDoctrineSpec_73 = {
  doctrineId: 'doctrine_vanguard_073',
  doctrineName: 'Battle Group Armada #073',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 36,
  offensiveMultiplier: 1.24,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_73'
};
