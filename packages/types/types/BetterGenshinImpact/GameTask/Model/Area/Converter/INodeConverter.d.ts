import "../../../../../System/Tuple";

declare global {
  namespace BetterGenshinImpact.GameTask.Model.Area.Converter {
    interface INodeConverter {
      toPrev(
        x: number,
        y: number,
        w: number,
        h: number
      ): System.Tuple4<number, number, number, number>;
    }
  }
}

export {};
