// Stellar Vanguard Armada Formation #038
export interface FleetDoctrineSpec_38 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_38: FleetDoctrineSpec_38 = {
  doctrineId: 'doctrine_vanguard_038',
  doctrineName: 'Battle Group Armada #038',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 46,
  offensiveMultiplier: 1.64,
  defensiveMultiplier: 1.36,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_38'
};
