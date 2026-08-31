export type ComponentType<T = any> = new (...args: any[]) => T;

export class ComponentRegistry {
  private static nextTypeId = 0;
  private static typeMap = new Map<ComponentType, number>();

  public static getTypeId(type: ComponentType): number {
    let id = this.typeMap.get(type);
    if (id === undefined) {
      id = this.nextTypeId++;
      this.typeMap.set(type, id);
    }
    return id;
  }
}
