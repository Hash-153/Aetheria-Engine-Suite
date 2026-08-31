export enum FlexDirection {
  Row = 'row',
  Column = 'column'
}

export enum JustifyContent {
  FlexStart = 'flex-start',
  Center = 'center',
  FlexEnd = 'flex-end',
  SpaceBetween = 'space-between'
}

export interface LayoutBox {
  x: number;
  y: number;
  w: number;
  h: number;
  flexGrow?: number;
  margin?: [number, number, number, number]; // top, right, bottom, left
  padding?: [number, number, number, number];
}

export class FlexLayoutEngine {
  public static compute(
    container: LayoutBox,
    children: LayoutBox[],
    direction = FlexDirection.Row,
    justify = JustifyContent.FlexStart
  ): void {
    let currentX = container.x + (container.padding?.[3] ?? 0);
    let currentY = container.y + (container.padding?.[0] ?? 0);

    for (let i = 0; i < children.length; i++) {
      const c = children[i]!;
      c.x = currentX;
      c.y = currentY;

      if (direction === FlexDirection.Row) {
        currentX += c.w + (c.margin?.[1] ?? 0) + (c.margin?.[3] ?? 0);
      } else {
        currentY += c.h + (c.margin?.[0] ?? 0) + (c.margin?.[2] ?? 0);
      }
    }
  }
}
