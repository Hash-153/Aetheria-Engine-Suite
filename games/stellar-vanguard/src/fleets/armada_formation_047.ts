// Stellar Vanguard Armada Formation #047
export interface FleetDoctrineSpec_47 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_47: FleetDoctrineSpec_47 = {
  doctrineId: 'doctrine_vanguard_047',
  doctrineName: 'Battle Group Armada #047',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 24,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_47'
};
