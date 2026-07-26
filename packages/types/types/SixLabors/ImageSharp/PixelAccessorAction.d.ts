import type {
  FamilyArgumentOmitted,
  HostDelegate,
  HostType,
  IsFamilyArgumentOmitted,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/AsyncCallback";
import "../../System/IAsyncResult";
import "../../System/ICloneable";
import "../../System/IntPtr";
import "../../System/MulticastDelegate";
import "../../System/Runtime/Serialization/ISerializable";

declare const delegatePixelAccessorActionArity1Brand: unique symbol;
export interface _PixelAccessorActionArity1<TPixel> extends HostDelegate {
  readonly [delegatePixelAccessorActionArity1Brand]: true;
  (pixelAccessor: never): VoidResult;
  invoke(pixelAccessor: never): VoidResult;
}

export interface _PixelAccessorActionArity1HostType<TPixel> extends HostType<
  _PixelAccessorActionArity1<TPixel>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _PixelAccessorActionArity1<TPixel>;
}

declare const delegatePixelAccessorActionArity2Brand: unique symbol;
export interface _PixelAccessorActionArity2<TPixel1, TPixel2> extends HostDelegate {
  readonly [delegatePixelAccessorActionArity2Brand]: true;
  (pixelAccessor1: never, pixelAccessor2: never): VoidResult;
  invoke(pixelAccessor1: never, pixelAccessor2: never): VoidResult;
}

export interface _PixelAccessorActionArity2HostType<TPixel1, TPixel2> extends HostType<
  _PixelAccessorActionArity2<TPixel1, TPixel2>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _PixelAccessorActionArity2<TPixel1, TPixel2>;
}

declare const delegatePixelAccessorActionArity3Brand: unique symbol;
export interface _PixelAccessorActionArity3<TPixel1, TPixel2, TPixel3> extends HostDelegate {
  readonly [delegatePixelAccessorActionArity3Brand]: true;
  (pixelAccessor1: never, pixelAccessor2: never, pixelAccessor3: never): VoidResult;
  invoke(pixelAccessor1: never, pixelAccessor2: never, pixelAccessor3: never): VoidResult;
}

export interface _PixelAccessorActionArity3HostType<TPixel1, TPixel2, TPixel3> extends HostType<
  _PixelAccessorActionArity3<TPixel1, TPixel2, TPixel3>,
  ReferenceTypeTrait
> {
  new (
    object: unknown,
    method: System.IntPtr
  ): _PixelAccessorActionArity3<TPixel1, TPixel2, TPixel3>;
}

export type PixelAccessorActionFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> =
  IsFamilyArgumentOmitted<T1> extends true
    ? never
    : IsFamilyArgumentOmitted<T2> extends true
      ? _PixelAccessorActionArity1<T1>
      : IsFamilyArgumentOmitted<T3> extends true
        ? _PixelAccessorActionArity2<T1, T2>
        : _PixelAccessorActionArity3<T1, T2, T3>;

declare global {
  namespace SixLabors.ImageSharp {
    type PixelAccessorAction<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T3 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./PixelAccessorAction").PixelAccessorActionFamily<T1, T2, T3>;
  }
}

export type PixelAccessorActionHostType<T1> = _PixelAccessorActionArity1HostType<T1>;

export {};
