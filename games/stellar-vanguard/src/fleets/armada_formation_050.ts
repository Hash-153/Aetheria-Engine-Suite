// Stellar Vanguard Armada Formation #050
export interface FleetDoctrineSpec_50 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_50: FleetDoctrineSpec_50 = {
  doctrineId: 'doctrine_vanguard_050',
  doctrineName: 'Battle Group Armada #050',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 30,
  offensiveMultiplier: 1.0,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_50'
};
