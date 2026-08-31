// Stellar Vanguard Armada Formation #034
export interface FleetDoctrineSpec_34 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_34: FleetDoctrineSpec_34 = {
  doctrineId: 'doctrine_vanguard_034',
  doctrineName: 'Battle Group Armada #034',
  tacticalRole: 'CARRIER',
  fleetCapacityCost: 38,
  offensiveMultiplier: 1.32,
  defensiveMultiplier: 1.12,
  maneuverabilityMultiplier: 1.2,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_34'
};
