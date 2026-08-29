// Stellar Vanguard Armada Formation #087
export interface FleetDoctrineSpec_87 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_87: FleetDoctrineSpec_87 = {
  doctrineId: 'doctrine_vanguard_087',
  doctrineName: 'Battle Group Armada #087',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 24,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.42,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_87'
};
