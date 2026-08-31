// Stellar Vanguard Armada Formation #097
export interface FleetDoctrineSpec_97 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_97: FleetDoctrineSpec_97 = {
  doctrineId: 'doctrine_vanguard_097',
  doctrineName: 'Battle Group Armada #097',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 44,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_97'
};
