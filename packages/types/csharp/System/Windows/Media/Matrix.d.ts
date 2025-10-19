import "../Vector";

declare global {
  namespace System.Windows.Media {
    class Matrix {
      identity: Matrix;

      readonly determinant: number;

      readonly hasInverse: boolean;

      readonly isIdentity: boolean;

      m11: number;

      m12: number;

      m21: number;

      m22: number;

      offsetX: number;

      offsetY: number;

      append(matrix: Matrix): void;

      prepend(matrix: Matrix): void;

      rotate(angle: number): void;

      rotatePrepend(angle: number): void;

      rotateAt(angle: number, centerX: number, centerY: number): void;

      rotateAtPrepend(angle: number, centerX: number, centerY: number): void;

      scale(scaleX: number, scaleY: number): void;

      scalePrepend(scaleX: number, scaleY: number): void;

      scaleAt(scaleX: number, scaleY: number, centerX: number, centerY: number): void;

      scaleAtPrepend(scaleX: number, scaleY: number, centerX: number, centerY: number): void;

      skew(skewX: number, skewY: number): void;

      skewPrepend(skewX: number, skewY: number): void;

      translate(offsetX: number, offsetY: number): void;

      translatePrepend(offsetX: number, offsetY: number): void;

      transform(point: System.Windows.Point): System.Windows.Point;

      transform(points: System.Windows.Point[]): void;

      transform(vector: System.Windows.Vector): System.Windows.Vector;

      transform(vectors: System.Windows.Vector[]): void;

      invert(): void;

      setIdentity(): void;

      multiply(trans1: Matrix, trans2: Matrix): Matrix;

      constructor(
        m11: number,
        m12: number,
        m21: number,
        m22: number,
        offsetX: number,
        offsetY: number
      );
    }
  }
}

export {};
