export enum ItemRarity {
  COMMON = 'COMMON',
  RARE = 'RARE',
  EPIC = 'EPIC',
  LEGENDARY = 'LEGENDARY'
}

export interface InventoryItem {
  id: string;
  name: string;
  rarity: ItemRarity;
  attackBonus: number;
  defenseBonus: number;
  hpBonus: number;
  color: string;
}

export const ITEM_DATABASE: InventoryItem[] = [
  { id: 'iron_sword', name: 'Iron Broadsword', rarity: ItemRarity.COMMON, attackBonus: 10, defenseBonus: 0, hpBonus: 0, color: '#bdc3c7' },
  { id: 'plasma_blade', name: 'Plasma Katana', rarity: ItemRarity.RARE, attackBonus: 25, defenseBonus: 2, hpBonus: 10, color: '#3498db' },
  { id: 'chrono_spear', name: 'Temporal Void Spear', rarity: ItemRarity.EPIC, attackBonus: 45, defenseBonus: 5, hpBonus: 30, color: '#9b59b6' },
  { id: 'aether_aegis', name: 'Aegis of the Sun Titan', rarity: ItemRarity.LEGENDARY, attackBonus: 70, defenseBonus: 20, hpBonus: 80, color: '#f1c40f' }
];

export class LootTable {
  public static rollItem(): InventoryItem {
    const rand = Math.random();
    if (rand < 0.5) return ITEM_DATABASE[0]!;
    if (rand < 0.8) return ITEM_DATABASE[1]!;
    if (rand < 0.95) return ITEM_DATABASE[2]!;
    return ITEM_DATABASE[3]!;
  }
}
