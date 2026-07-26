import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IDisposable";
import "../Bitmap";
import "../Graphics";

declare const cachedBitmapBrand: unique symbol;
export interface CachedBitmap extends ClrHostValue, System.IDisposableInput {
  readonly [cachedBitmapBrand]: true;
  dispose(): VoidResult;
}

declare global {
  namespace System.Drawing.Imaging {
    type CachedBitmap = import("./CachedBitmap").CachedBitmap;
  }
}

export interface CachedBitmapHostType extends HostType<CachedBitmap, ReferenceTypeTrait> {
  new (bitmap: System.Drawing.Bitmap, graphics: System.Drawing.Graphics): CachedBitmap;
}

export {};
