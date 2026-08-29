// Stellar Vanguard Armada Formation #095
export interface FleetDoctrineSpec_95 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_95: FleetDoctrineSpec_95 = {
  doctrineId: 'doctrine_vanguard_095',
  doctrineName: 'Battle Group Armada #095',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 40,
  offensiveMultiplier: 1.4,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_95'
};
