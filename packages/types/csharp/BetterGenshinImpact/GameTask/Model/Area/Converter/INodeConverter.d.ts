export interface INodeConverter {
  ToPrev(x: number, y: number, w: number, h: number): [number, number, number, number];
}
