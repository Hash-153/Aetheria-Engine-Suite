// Stellar Vanguard Armada Formation #037
export interface FleetDoctrineSpec_37 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_37: FleetDoctrineSpec_37 = {
  doctrineId: 'doctrine_vanguard_037',
  doctrineName: 'Battle Group Armada #037',
  tacticalRole: 'DREADNOUGHT',
  fleetCapacityCost: 44,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.3,
  maneuverabilityMultiplier: 1.05,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_37'
};
