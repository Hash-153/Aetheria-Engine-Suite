// Stellar Vanguard Armada Formation #083
export interface FleetDoctrineSpec_83 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_83: FleetDoctrineSpec_83 = {
  doctrineId: 'doctrine_vanguard_083',
  doctrineName: 'Battle Group Armada #083',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 16,
  offensiveMultiplier: 1.24,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.25,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_83'
};
