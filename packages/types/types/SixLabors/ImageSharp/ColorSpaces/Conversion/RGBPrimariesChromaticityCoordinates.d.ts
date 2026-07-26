import type {
  ClrHostValue,
  HostType,
  ValueTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/IEquatable";
import "../../../../System/ValueType";
import "./CieXyChromaticityCoordinates";

declare const rgbPrimariesChromaticityCoordinatesBrand: unique symbol;
export interface RgbPrimariesChromaticityCoordinates extends ClrHostValue {
  readonly [rgbPrimariesChromaticityCoordinatesBrand]: true;
  readonly r: SixLabors.ImageSharp.ColorSpaces.Conversion.CieXyChromaticityCoordinates;
  readonly g: SixLabors.ImageSharp.ColorSpaces.Conversion.CieXyChromaticityCoordinates;
  readonly b: SixLabors.ImageSharp.ColorSpaces.Conversion.CieXyChromaticityCoordinates;
  equals(obj: unknown | null): boolean;
  equals(
    other: SixLabors.ImageSharp.ColorSpaces.Conversion.RgbPrimariesChromaticityCoordinates
  ): boolean;
  getHashCode(): number;
}

declare global {
  namespace SixLabors.ImageSharp.ColorSpaces.Conversion {
    type RgbPrimariesChromaticityCoordinates =
      import("./RGBPrimariesChromaticityCoordinates").RgbPrimariesChromaticityCoordinates;
  }
}

export interface RgbPrimariesChromaticityCoordinatesHostType extends HostType<
  RgbPrimariesChromaticityCoordinates,
  ValueTypeTrait
> {
  new (
    r: SixLabors.ImageSharp.ColorSpaces.Conversion.CieXyChromaticityCoordinates,
    g: SixLabors.ImageSharp.ColorSpaces.Conversion.CieXyChromaticityCoordinates,
    b: SixLabors.ImageSharp.ColorSpaces.Conversion.CieXyChromaticityCoordinates
  ): RgbPrimariesChromaticityCoordinates;
}

export {};
