// Stellar Vanguard Armada Formation #134
export interface FleetDoctrineSpec_134 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_134: FleetDoctrineSpec_134 = {
  doctrineId: 'doctrine_vanguard_134',
  doctrineName: 'Battle Group Armada #134',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 38,
  offensiveMultiplier: 1.32,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_134'
};
