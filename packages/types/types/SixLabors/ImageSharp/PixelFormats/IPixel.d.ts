import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait,
  IsFamilyArgumentOmitted
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableRef } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/IEquatable";
import "../../../System/Numerics/Vector4";
import "./Abgr32";
import "./Argb32";
import "./Bgr24";
import "./Bgra32";
import "./Bgra5551";
import "./L8";
import "./L16";
import "./La16";
import "./La32";
import "./PixelOperations{TPixel}";
import "./Rgb24";
import "./Rgb48";
import "./Rgba32";
import "./Rgba64";

declare const iPixelArity0InputBrand: unique symbol;
export interface _IPixelArity0Input {
  readonly [iPixelArity0InputBrand]: true;
}

export interface _IPixelArity0
  extends Microsoft.ClearScript.ClrInterfaceView<_IPixelArity0Input>, _IPixelArity0Input {
  fromScaledVector4(vector: System.Numerics.Vector4): VoidResult;
  toScaledVector4(): System.Numerics.Vector4;
  fromVector4(vector: System.Numerics.Vector4): VoidResult;
  toVector4(): System.Numerics.Vector4;
  fromArgb32(source: SixLabors.ImageSharp.PixelFormats.Argb32): VoidResult;
  fromBgra5551(source: SixLabors.ImageSharp.PixelFormats.Bgra5551): VoidResult;
  fromBgr24(source: SixLabors.ImageSharp.PixelFormats.Bgr24): VoidResult;
  fromBgra32(source: SixLabors.ImageSharp.PixelFormats.Bgra32): VoidResult;
  fromAbgr32(source: SixLabors.ImageSharp.PixelFormats.Abgr32): VoidResult;
  fromL8(source: SixLabors.ImageSharp.PixelFormats.L8): VoidResult;
  fromL16(source: SixLabors.ImageSharp.PixelFormats.L16): VoidResult;
  fromLa16(source: SixLabors.ImageSharp.PixelFormats.La16): VoidResult;
  fromLa32(source: SixLabors.ImageSharp.PixelFormats.La32): VoidResult;
  fromRgb24(source: SixLabors.ImageSharp.PixelFormats.Rgb24): VoidResult;
  fromRgba32(source: SixLabors.ImageSharp.PixelFormats.Rgba32): VoidResult;
  toRgba32(dest: HostVariableRef<SixLabors.ImageSharp.PixelFormats.Rgba32>): VoidResult;
  fromRgb48(source: SixLabors.ImageSharp.PixelFormats.Rgb48): VoidResult;
  fromRgba64(source: SixLabors.ImageSharp.PixelFormats.Rgba64): VoidResult;
}

export interface _IPixelArity0HostType extends HostType<_IPixelArity0, InterfaceTypeTrait> {}

declare const iPixelArity1InputBrand: unique symbol;
export interface _IPixelArity1Input<TSelf> {
  readonly [iPixelArity1InputBrand]: true;
}

export interface _IPixelArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IPixelArity1Input<TSelf>>,
    _IPixelArity1Input<TSelf> {
  createPixelOperations(): SixLabors.ImageSharp.PixelFormats.PixelOperations<TSelf>;
}

export interface _IPixelArity1HostType<TSelf> extends HostType<
  _IPixelArity1<TSelf>,
  InterfaceTypeTrait
> {}

export type IPixelFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _IPixelArity0 : _IPixelArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp.PixelFormats {
    type IPixel<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IPixel").IPixelFamily<T1>;
  }
}

export type IPixelInputFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _IPixelArity0Input : _IPixelArity1Input<T1>;

declare global {
  namespace SixLabors.ImageSharp.PixelFormats {
    type IPixelInput<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IPixel").IPixelInputFamily<T1>;
  }
}

export type IPixelHostType = _IPixelArity0HostType;

export {};
