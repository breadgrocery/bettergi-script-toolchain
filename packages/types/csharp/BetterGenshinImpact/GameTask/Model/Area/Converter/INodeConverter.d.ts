declare global {
  namespace BetterGenshinImpact.GameTask.Model.Area.Converter {
    interface INodeConverter {
      toPrev(x: number, y: number, w: number, h: number): [number, number, number, number];
    }
  }
}

export {};
