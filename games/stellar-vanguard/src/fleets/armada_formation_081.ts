// Stellar Vanguard Armada Formation #081
export interface FleetDoctrineSpec_81 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_81: FleetDoctrineSpec_81 = {
  doctrineId: 'doctrine_vanguard_081',
  doctrineName: 'Battle Group Armada #081',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 12,
  offensiveMultiplier: 1.08,
  defensiveMultiplier: 1.06,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_81'
};
