import type {
  ByteHost,
  ClrHostValue,
  HostType,
  StrongNumeric,
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
import "./La32";
import "./PixelOperations{TPixel}";
import "./Rgb24";
import "./Rgb48";
import "./Rgba32";
import "./Rgba64";

declare const la16Brand: unique symbol;
export interface La16
  extends
    ClrHostValue,
    SixLabors.ImageSharp.PixelFormats.IPixelInput,
    SixLabors.ImageSharp.PixelFormats.IPackedVectorInput<number> {
  readonly [la16Brand]: true;
  l: number;
  a: number;
  packedValue: number;
  createPixelOperations(): SixLabors.ImageSharp.PixelFormats.PixelOperations<SixLabors.ImageSharp.PixelFormats.La16>;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.PixelFormats.La16): boolean;
  toString(): string;
  getHashCode(): number;
  fromArgb32(source: SixLabors.ImageSharp.PixelFormats.Argb32): VoidResult;
  fromBgr24(source: SixLabors.ImageSharp.PixelFormats.Bgr24): VoidResult;
  fromBgra32(source: SixLabors.ImageSharp.PixelFormats.Bgra32): VoidResult;
  fromAbgr32(source: SixLabors.ImageSharp.PixelFormats.Abgr32): VoidResult;
  fromBgra5551(source: SixLabors.ImageSharp.PixelFormats.Bgra5551): VoidResult;
  fromL16(source: SixLabors.ImageSharp.PixelFormats.L16): VoidResult;
  fromL8(source: SixLabors.ImageSharp.PixelFormats.L8): VoidResult;
  fromLa16(source: SixLabors.ImageSharp.PixelFormats.La16): VoidResult;
  fromLa32(source: SixLabors.ImageSharp.PixelFormats.La32): VoidResult;
  fromRgb24(source: SixLabors.ImageSharp.PixelFormats.Rgb24): VoidResult;
  fromRgb48(source: SixLabors.ImageSharp.PixelFormats.Rgb48): VoidResult;
  fromRgba32(source: SixLabors.ImageSharp.PixelFormats.Rgba32): VoidResult;
  fromRgba64(source: SixLabors.ImageSharp.PixelFormats.Rgba64): VoidResult;
  fromScaledVector4(vector: System.Numerics.Vector4): VoidResult;
  fromVector4(vector: System.Numerics.Vector4): VoidResult;
  toRgba32(dest: HostVariableRef<SixLabors.ImageSharp.PixelFormats.Rgba32>): VoidResult;
  toScaledVector4(): System.Numerics.Vector4;
  toVector4(): System.Numerics.Vector4;
}

declare global {
  namespace SixLabors.ImageSharp.PixelFormats {
    type La16 = import("./La16").La16;
  }
}

export interface La16HostType extends HostType<La16, ValueTypeTrait> {
  new (l: number | StrongNumeric<ByteHost>, a: number | StrongNumeric<ByteHost>): La16;
}

export {};
