import type {
  ClrHostValue,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/IEquatable";
import "../../../../System/ValueType";

declare const cieXyChromaticityCoordinatesBrand: unique symbol;
export interface CieXyChromaticityCoordinates extends ClrHostValue {
  readonly [cieXyChromaticityCoordinatesBrand]: true;
  readonly x: number;
  readonly y: number;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.ColorSpaces.Conversion.CieXyChromaticityCoordinates): boolean;
}

declare global {
  namespace SixLabors.ImageSharp.ColorSpaces.Conversion {
    type CieXyChromaticityCoordinates =
      import("./CieXyChromaticityCoordinates").CieXyChromaticityCoordinates;
  }
}

export interface CieXyChromaticityCoordinatesHostType extends HostType<
  CieXyChromaticityCoordinates,
  ValueTypeTrait
> {
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>
  ): CieXyChromaticityCoordinates;
}

export {};
