// Stellar Vanguard Armada Formation #092
export interface FleetDoctrineSpec_92 {
  doctrineId: string;
  doctrineName: string;
  tacticalRole: string;
  fleetCapacityCost: number;
  offensiveMultiplier: number;
  defensiveMultiplier: number;
  maneuverabilityMultiplier: number;
  specialAura: string;
}

export const FLEET_DOCTRINE_92: FleetDoctrineSpec_92 = {
  doctrineId: 'doctrine_vanguard_092',
  doctrineName: 'Battle Group Armada #092',
  tacticalRole: 'INTERCEPTOR',
  fleetCapacityCost: 34,
  offensiveMultiplier: 1.16,
  defensiveMultiplier: 1.24,
  maneuverabilityMultiplier: 1.1,
  specialAura: 'AURA_CHRONO_SHIELD_BURST_92'
};
