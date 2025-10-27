import "./Media/Matrix";
import "./Point";

declare global {
  namespace System.Windows {
    class Vector {
      length: number;

      lengthSquared: number;

      normalize(): void;

      negate(): void;

      static crossProduct(vector1: System.Windows.Vector, vector2: System.Windows.Vector): number;

      static angleBetween(vector1: System.Windows.Vector, vector2: System.Windows.Vector): number;

      static add(
        vector1: System.Windows.Vector,
        vector2: System.Windows.Vector
      ): System.Windows.Vector;

      static subtract(
        vector1: System.Windows.Vector,
        vector2: System.Windows.Vector
      ): System.Windows.Vector;

      static add(vector: System.Windows.Vector, point: System.Windows.Point): System.Windows.Point;

      static multiply(vector: System.Windows.Vector, scalar: number): System.Windows.Vector;

      static multiply(scalar: number, vector: System.Windows.Vector): System.Windows.Vector;

      static divide(vector: System.Windows.Vector, scalar: number): System.Windows.Vector;

      static multiply(
        vector: System.Windows.Vector,
        matrix: System.Windows.Media.Matrix
      ): System.Windows.Vector;

      static multiply(vector1: System.Windows.Vector, vector2: System.Windows.Vector): number;

      static determinant(vector1: System.Windows.Vector, vector2: System.Windows.Vector): number;

      constructor(x: number, y: number);
    }
  }
}

export {};
