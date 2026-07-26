import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const colormapTypesBrand: unique symbol;
export interface ColormapTypes extends ClrHostValue {
  readonly [colormapTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ColormapTypes = import("./ColormapTypes").ColormapTypes;
  }
}

export interface ColormapTypesHostType extends HostType<ColormapTypes, EnumTypeTrait> {
  readonly autumn: ColormapTypes;
  readonly bone: ColormapTypes;
  readonly jet: ColormapTypes;
  readonly winter: ColormapTypes;
  readonly rainbow: ColormapTypes;
  readonly ocean: ColormapTypes;
  readonly summer: ColormapTypes;
  readonly spring: ColormapTypes;
  readonly cool: ColormapTypes;
  readonly hsv: ColormapTypes;
  readonly pink: ColormapTypes;
  readonly hot: ColormapTypes;
  readonly parula: ColormapTypes;
  readonly magma: ColormapTypes;
  readonly inferno: ColormapTypes;
  readonly plasma: ColormapTypes;
  readonly viridis: ColormapTypes;
  readonly cividis: ColormapTypes;
  readonly twilight: ColormapTypes;
  readonly twilightShifted: ColormapTypes;
  readonly turbo: ColormapTypes;
  readonly deepGreen: ColormapTypes;
}

export {};
