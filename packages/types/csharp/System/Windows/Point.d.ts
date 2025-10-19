declare global {
  namespace System.Windows {
    class Point {
      /** 目标水平位置（像素） */
      x: number;

      /** 目标垂直位置（像素） */
      y: number;

      offset(offsetX: number, offsetY: number): void;

      // TODO: Shims Needed

      constructor(x: number, y: number);
    }
  }
}

export {};
