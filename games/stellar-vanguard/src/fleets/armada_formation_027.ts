// Stellar Vanguard Armada Formation #027
export interface FleetDoctrineSpec_27 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_27: FleetDoctrineSpec_27 = {
  doctrineId: 'doctrine_vanguard_027',
  doctrineName: 'Battle Group Armada #027',
  tacticalRole: 'SUPPORT',
  fleetCapacityCost: 24,
  offensiveMultiplier: 1.56,
  defensiveMultiplier: 1.18,
  maneuverabilityMultiplier: 1.15,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_27'
};
