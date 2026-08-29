// Stellar Vanguard Armada Formation #051
export interface FleetDoctrineSpec_51 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_51: FleetDoctrineSpec_51 = {
  doctrineId: 'doctrine_vanguard_051',
  doctrineName: 'Battle Group Armada #051',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 32,
  offensiveMultiplier: 1.08,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_51'
};
