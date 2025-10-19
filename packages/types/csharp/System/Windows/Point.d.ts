import "./Media/Matrix";
import "./Vector";

declare global {
  namespace System.Windows {
    class Point {
      x: number;

      y: number;

      offset(offsetX: number, offsetY: number): void;

      multiply(
        point: System.Windows.Point,
        matrix: System.Windows.Media.Matrix
      ): System.Windows.Point;

      equals(point: System.Windows.Point): boolean;

      static add(point: System.Windows.Point, vector: System.Windows.Vector): System.Windows.Point;

      static subtract(
        point: System.Windows.Point,
        vector: System.Windows.Vector
      ): System.Windows.Point;

      static subtract(
        point1: System.Windows.Point,
        point2: System.Windows.Point
      ): System.Windows.Vector;

      static equals(point1: System.Windows.Point, point2: System.Windows.Point): boolean;

      static parse(source: string): System.Windows.Point;

      constructor(x: number, y: number);
    }
  }
}

export {};
