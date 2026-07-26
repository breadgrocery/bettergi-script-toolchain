import type {
  ClrHostValue,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/IEquatable";
import "../../../System/Numerics/Vector3";
import "../../../System/ValueType";

declare const cieXyzBrand: unique symbol;
export interface CieXyz extends ClrHostValue {
  readonly [cieXyzBrand]: true;
  readonly x: number;
  readonly y: number;
  readonly z: number;
  toVector3(): System.Numerics.Vector3;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.ColorSpaces.CieXyz): boolean;
}

declare global {
  namespace SixLabors.ImageSharp.ColorSpaces {
    type CieXyz = import("./CieXyz").CieXyz;
  }
}

export interface CieXyzHostType extends HostType<CieXyz, ValueTypeTrait> {
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    z: number | StrongNumeric<SingleHost>
  ): CieXyz;
  new (vector: System.Numerics.Vector3): CieXyz;
}

export {};
