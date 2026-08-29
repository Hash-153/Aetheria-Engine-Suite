// Stellar Vanguard Armada Formation #071
export interface FleetDoctrineSpec_71 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_71: FleetDoctrineSpec_71 = {
  doctrineId: 'doctrine_vanguard_071',
  doctrineName: 'Battle Group Armada #071',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 32,
  offensiveMultiplier: 1.08,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_71'
};
