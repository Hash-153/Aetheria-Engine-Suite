export interface TechNode {
  id: string;
  name: string;
  cost: number;
  researched: boolean;
  prerequisites: string[];
  damageMultiplier: number;
  speedMultiplier: number;
  shieldMultiplier: number;
}

export class TechTreeManager {
  public nodes = new Map<string, TechNode>();

  constructor() {
    this.addTech({
      id: 'laser_optics',
      name: 'Hyper-Focus Laser Optics',
      cost: 150,
      researched: false,
      prerequisites: [],
      damageMultiplier: 1.25,
      speedMultiplier: 1.0,
      shieldMultiplier: 1.0
    });

    this.addTech({
      id: 'warp_drives',
      name: 'Sub-Light Warp Drives',
      cost: 250,
      researched: false,
      prerequisites: ['laser_optics'],
      damageMultiplier: 1.0,
      speedMultiplier: 1.35,
      shieldMultiplier: 1.0
    });

    this.addTech({
      id: 'plasma_shields',
      name: 'Resonant Plasma Shields',
      cost: 400,
      researched: false,
      prerequisites: ['warp_drives'],
      damageMultiplier: 1.1,
      speedMultiplier: 1.0,
      shieldMultiplier: 1.5
    });
  }

  public addTech(tech: TechNode): void {
    this.nodes.set(tech.id, tech);
  }

  public canResearch(id: string, currentMinerals: number): boolean {
    const node = this.nodes.get(id);
    if (!node || node.researched || currentMinerals < node.cost) return false;
    for (let i = 0; i < node.prerequisites.length; i++) {
      const pre = this.nodes.get(node.prerequisites[i]!);
      if (!pre || !pre.researched) return false;
    }
    return true;
  }

  public research(id: string): boolean {
    const node = this.nodes.get(id);
    if (!node) return false;
    node.researched = true;
    return true;
  }
}
