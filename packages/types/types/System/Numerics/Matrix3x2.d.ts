import type {
  ClrHostValue,
  HostType,
  Int32Host,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import "../IEquatable";
import "../ValueType";
import "./Vector2";

declare const matrix3x2Brand: unique symbol;
export interface Matrix3x2 extends ClrHostValue {
  readonly [matrix3x2Brand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: System.Numerics.Matrix3x2): boolean;
  getDeterminant(): number;
  getHashCode(): number;
  item: {
    (row: number | StrongNumeric<Int32Host>, column: number | StrongNumeric<Int32Host>): number;
    get(row: number | StrongNumeric<Int32Host>, column: number | StrongNumeric<Int32Host>): number;
    set(
      row: number | StrongNumeric<Int32Host>,
      column: number | StrongNumeric<Int32Host>,
      value: number | StrongNumeric<SingleHost>
    ): number;
  };
  m11: number;
  m12: number;
  m21: number;
  m22: number;
  m31: number;
  m32: number;
  readonly isIdentity: boolean;
  toString(): string;
  translation: System.Numerics.Vector2;
}

declare global {
  namespace System.Numerics {
    type Matrix3x2 = import("./Matrix3x2").Matrix3x2;
  }
}

export interface Matrix3x2HostType extends HostType<Matrix3x2, ValueTypeTrait> {
  new (
    m11: number | StrongNumeric<SingleHost>,
    m12: number | StrongNumeric<SingleHost>,
    m21: number | StrongNumeric<SingleHost>,
    m22: number | StrongNumeric<SingleHost>,
    m31: number | StrongNumeric<SingleHost>,
    m32: number | StrongNumeric<SingleHost>
  ): Matrix3x2;
  readonly identity: System.Numerics.Matrix3x2;
  add(
    value1: System.Numerics.Matrix3x2,
    value2: System.Numerics.Matrix3x2
  ): System.Numerics.Matrix3x2;
  createRotation(radians: number | StrongNumeric<SingleHost>): System.Numerics.Matrix3x2;
  createRotation(
    radians: number | StrongNumeric<SingleHost>,
    centerPoint: System.Numerics.Vector2
  ): System.Numerics.Matrix3x2;
  createScale(scales: System.Numerics.Vector2): System.Numerics.Matrix3x2;
  createScale(
    xScale: number | StrongNumeric<SingleHost>,
    yScale: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix3x2;
  createScale(
    xScale: number | StrongNumeric<SingleHost>,
    yScale: number | StrongNumeric<SingleHost>,
    centerPoint: System.Numerics.Vector2
  ): System.Numerics.Matrix3x2;
  createScale(
    scales: System.Numerics.Vector2,
    centerPoint: System.Numerics.Vector2
  ): System.Numerics.Matrix3x2;
  createScale(scale: number | StrongNumeric<SingleHost>): System.Numerics.Matrix3x2;
  createScale(
    scale: number | StrongNumeric<SingleHost>,
    centerPoint: System.Numerics.Vector2
  ): System.Numerics.Matrix3x2;
  createSkew(
    radiansX: number | StrongNumeric<SingleHost>,
    radiansY: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix3x2;
  createSkew(
    radiansX: number | StrongNumeric<SingleHost>,
    radiansY: number | StrongNumeric<SingleHost>,
    centerPoint: System.Numerics.Vector2
  ): System.Numerics.Matrix3x2;
  createTranslation(position: System.Numerics.Vector2): System.Numerics.Matrix3x2;
  createTranslation(
    xPosition: number | StrongNumeric<SingleHost>,
    yPosition: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix3x2;
  invert(
    matrix: System.Numerics.Matrix3x2,
    result: HostVariableOut<System.Numerics.Matrix3x2>
  ): boolean;
  lerp(
    matrix1: System.Numerics.Matrix3x2,
    matrix2: System.Numerics.Matrix3x2,
    amount: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix3x2;
  multiply(
    value1: System.Numerics.Matrix3x2,
    value2: System.Numerics.Matrix3x2
  ): System.Numerics.Matrix3x2;
  multiply(
    value1: System.Numerics.Matrix3x2,
    value2: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix3x2;
  negate(value: System.Numerics.Matrix3x2): System.Numerics.Matrix3x2;
  subtract(
    value1: System.Numerics.Matrix3x2,
    value2: System.Numerics.Matrix3x2
  ): System.Numerics.Matrix3x2;
}

export {};
