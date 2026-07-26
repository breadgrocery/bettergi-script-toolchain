import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const pixelConnectivityBrand: unique symbol;
export interface PixelConnectivity extends ClrHostValue {
  readonly [pixelConnectivityBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type PixelConnectivity = import("./PixelConnectivity").PixelConnectivity;
  }
}

export interface PixelConnectivityHostType extends HostType<PixelConnectivity, EnumTypeTrait> {
  readonly connectivity4: PixelConnectivity;
  readonly connectivity8: PixelConnectivity;
}

export {};
