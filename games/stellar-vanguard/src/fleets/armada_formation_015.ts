// Stellar Vanguard Armada Formation #015
export interface FleetDoctrineSpec_15 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_15: FleetDoctrineSpec_15 = {
  doctrineId: 'doctrine_vanguard_015',
  doctrineName: 'Battle Group Armada #015',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 40,
  offensiveMultiplier: 1.4,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_15'
};
