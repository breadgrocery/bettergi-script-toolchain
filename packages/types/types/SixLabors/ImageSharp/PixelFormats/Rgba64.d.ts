import type {
  ClrHostValue,
  HostType,
  StrongNumeric,
  UInt16Host,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableRef } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/IEquatable";
import "../../../System/Numerics/Vector4";
import "../../../System/ValueType";
import "./Abgr32";
import "./Argb32";
import "./Bgr24";
import "./Bgra32";
import "./Bgra5551";
import "./IPackedVector{TPacked}";
import "./IPixel";
import "./L8";
import "./L16";
import "./La16";
import "./La32";
import "./PixelOperations{TPixel}";
import "./Rgb24";
import "./Rgb48";
import "./Rgba32";

declare const rgba64Brand: unique symbol;
export interface Rgba64
  extends
    ClrHostValue,
    SixLabors.ImageSharp.PixelFormats.IPixelInput,
    SixLabors.ImageSharp.PixelFormats.IPackedVectorInput<number> {
  readonly [rgba64Brand]: true;
  r: number;
  g: number;
  b: number;
  a: number;
  rgb: SixLabors.ImageSharp.PixelFormats.Rgb48;
  packedValue: number;
  createPixelOperations(): SixLabors.ImageSharp.PixelFormats.PixelOperations<SixLabors.ImageSharp.PixelFormats.Rgba64>;
  fromScaledVector4(vector: System.Numerics.Vector4): VoidResult;
  toScaledVector4(): System.Numerics.Vector4;
  fromVector4(vector: System.Numerics.Vector4): VoidResult;
  toVector4(): System.Numerics.Vector4;
  fromArgb32(source: SixLabors.ImageSharp.PixelFormats.Argb32): VoidResult;
  fromBgr24(source: SixLabors.ImageSharp.PixelFormats.Bgr24): VoidResult;
  fromBgra32(source: SixLabors.ImageSharp.PixelFormats.Bgra32): VoidResult;
  fromAbgr32(source: SixLabors.ImageSharp.PixelFormats.Abgr32): VoidResult;
  fromBgra5551(source: SixLabors.ImageSharp.PixelFormats.Bgra5551): VoidResult;
  fromL8(source: SixLabors.ImageSharp.PixelFormats.L8): VoidResult;
  fromL16(source: SixLabors.ImageSharp.PixelFormats.L16): VoidResult;
  fromLa16(source: SixLabors.ImageSharp.PixelFormats.La16): VoidResult;
  fromLa32(source: SixLabors.ImageSharp.PixelFormats.La32): VoidResult;
  fromRgb24(source: SixLabors.ImageSharp.PixelFormats.Rgb24): VoidResult;
  fromRgba32(source: SixLabors.ImageSharp.PixelFormats.Rgba32): VoidResult;
  fromRgb48(source: SixLabors.ImageSharp.PixelFormats.Rgb48): VoidResult;
  fromRgba64(source: SixLabors.ImageSharp.PixelFormats.Rgba64): VoidResult;
  toRgba32(): SixLabors.ImageSharp.PixelFormats.Rgba32;
  toRgba32(dest: HostVariableRef<SixLabors.ImageSharp.PixelFormats.Rgba32>): VoidResult;
  toBgra32(): SixLabors.ImageSharp.PixelFormats.Bgra32;
  toArgb32(): SixLabors.ImageSharp.PixelFormats.Argb32;
  toAbgr32(): SixLabors.ImageSharp.PixelFormats.Abgr32;
  toRgb24(): SixLabors.ImageSharp.PixelFormats.Rgb24;
  toBgr24(): SixLabors.ImageSharp.PixelFormats.Bgr24;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.PixelFormats.Rgba64): boolean;
  toString(): string;
  getHashCode(): number;
}

declare global {
  namespace SixLabors.ImageSharp.PixelFormats {
    type Rgba64 = import("./Rgba64").Rgba64;
  }
}

export interface Rgba64HostType extends HostType<Rgba64, ValueTypeTrait> {
  new (
    r: number | StrongNumeric<UInt16Host>,
    g: number | StrongNumeric<UInt16Host>,
    b: number | StrongNumeric<UInt16Host>,
    a: number | StrongNumeric<UInt16Host>
  ): Rgba64;
  new (source: SixLabors.ImageSharp.PixelFormats.Rgba32): Rgba64;
  new (source: SixLabors.ImageSharp.PixelFormats.Bgra32): Rgba64;
  new (source: SixLabors.ImageSharp.PixelFormats.Argb32): Rgba64;
  new (source: SixLabors.ImageSharp.PixelFormats.Abgr32): Rgba64;
  new (source: SixLabors.ImageSharp.PixelFormats.Rgb24): Rgba64;
  new (source: SixLabors.ImageSharp.PixelFormats.Bgr24): Rgba64;
  new (vector: System.Numerics.Vector4): Rgba64;
}

export {};
