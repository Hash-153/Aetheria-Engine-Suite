// Stellar Vanguard Armada Formation #086
export interface FleetDoctrineSpec_86 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_86: FleetDoctrineSpec_86 = {
  doctrineId: 'doctrine_vanguard_086',
  doctrineName: 'Battle Group Armada #086',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 22,
  offensiveMultiplier: 1.48,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_86'
};
