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
import "./Conversion/RgbWorkingSpace";

declare const rgbBrand: unique symbol;
export interface Rgb extends ClrHostValue {
  readonly [rgbBrand]: true;
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly workingSpace: SixLabors.ImageSharp.ColorSpaces.Conversion.RgbWorkingSpace;
  toVector3(): System.Numerics.Vector3;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.ColorSpaces.Rgb): boolean;
}

declare global {
  namespace SixLabors.ImageSharp.ColorSpaces {
    type Rgb = import("./Rgb").Rgb;
  }
}

export interface RgbHostType extends HostType<Rgb, ValueTypeTrait> {
  new (
    r: number | StrongNumeric<SingleHost>,
    g: number | StrongNumeric<SingleHost>,
    b: number | StrongNumeric<SingleHost>
  ): Rgb;
  new (
    r: number | StrongNumeric<SingleHost>,
    g: number | StrongNumeric<SingleHost>,
    b: number | StrongNumeric<SingleHost>,
    workingSpace: SixLabors.ImageSharp.ColorSpaces.Conversion.RgbWorkingSpace
  ): Rgb;
  new (vector: System.Numerics.Vector3): Rgb;
  new (
    vector: System.Numerics.Vector3,
    workingSpace: SixLabors.ImageSharp.ColorSpaces.Conversion.RgbWorkingSpace
  ): Rgb;
  readonly defaultWorkingSpace: SixLabors.ImageSharp.ColorSpaces.Conversion.RgbWorkingSpace;
}

export {};
