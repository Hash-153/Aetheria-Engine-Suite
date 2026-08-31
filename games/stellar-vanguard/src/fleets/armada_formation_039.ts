// Stellar Vanguard Armada Formation #039
export interface FleetDoctrineSpec_39 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_39: FleetDoctrineSpec_39 = {
  doctrineId: 'doctrine_vanguard_039',
  doctrineName: 'Battle Group Armada #039',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 48,
  offensiveMultiplier: 1.72,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_39'
};
