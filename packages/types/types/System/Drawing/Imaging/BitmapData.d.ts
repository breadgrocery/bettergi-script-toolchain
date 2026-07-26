import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../IntPtr";
import "./PixelFormat";

declare const bitmapDataBrand: unique symbol;
export interface BitmapData extends ClrHostValue {
  readonly [bitmapDataBrand]: true;
  height: number;
  pixelFormat: System.Drawing.Imaging.PixelFormat;
  reserved: number;
  scan0: System.IntPtr;
  stride: number;
  width: number;
}

declare global {
  namespace System.Drawing.Imaging {
    type BitmapData = import("./BitmapData").BitmapData;
  }
}

export interface BitmapDataHostType extends HostType<
  BitmapData,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): BitmapData;
}

export {};
