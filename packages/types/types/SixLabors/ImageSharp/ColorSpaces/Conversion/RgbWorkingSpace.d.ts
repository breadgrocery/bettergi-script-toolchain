import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import "../CieXyz";
import "./RGBPrimariesChromaticityCoordinates";

declare const rgbWorkingSpaceBrand: unique symbol;
export interface RgbWorkingSpace extends ClrHostValue {
  readonly [rgbWorkingSpaceBrand]: true;
  readonly whitePoint: SixLabors.ImageSharp.ColorSpaces.CieXyz;
  readonly chromaticityCoordinates: SixLabors.ImageSharp.ColorSpaces.Conversion.RgbPrimariesChromaticityCoordinates;
  expand(channel: number | StrongNumeric<SingleHost>): number;
  compress(channel: number | StrongNumeric<SingleHost>): number;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
}

declare global {
  namespace SixLabors.ImageSharp.ColorSpaces.Conversion {
    type RgbWorkingSpace = import("./RgbWorkingSpace").RgbWorkingSpace;
  }
}

export interface RgbWorkingSpaceHostType extends HostType<RgbWorkingSpace, ReferenceTypeTrait> {}

export {};
