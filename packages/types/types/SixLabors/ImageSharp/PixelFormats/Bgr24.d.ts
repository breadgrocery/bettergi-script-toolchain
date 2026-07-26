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
import "./Bgra32";
import "./Bgra5551";
import "./IPixel";
import "./L8";
import "./L16";
import "./La16";
import "./La32";
import "./PixelOperations{TPixel}";
import "./Rgb24";
import "./Rgb48";
import "./Rgba32";
import "./Rgba64";

declare const bgr24Brand: unique symbol;
export interface Bgr24 extends ClrHostValue, SixLabors.ImageSharp.PixelFormats.IPixelInput {
  readonly [bgr24Brand]: true;
  b: number;
  g: number;
  r: number;
  createPixelOperations(): SixLabors.ImageSharp.PixelFormats.PixelOperations<SixLabors.ImageSharp.PixelFormats.Bgr24>;
  fromScaledVector4(vector: System.Numerics.Vector4): VoidResult;
  toScaledVector4(): System.Numerics.Vector4;
  fromVector4(vector: System.Numerics.Vector4): VoidResult;
  toVector4(): System.Numerics.Vector4;
  fromArgb32(source: SixLabors.ImageSharp.PixelFormats.Argb32): VoidResult;
  fromBgr24(source: SixLabors.ImageSharp.PixelFormats.Bgr24): VoidResult;
  fromBgra5551(source: SixLabors.ImageSharp.PixelFormats.Bgra5551): VoidResult;
  fromBgra32(source: SixLabors.ImageSharp.PixelFormats.Bgra32): VoidResult;
  fromL8(source: SixLabors.ImageSharp.PixelFormats.L8): VoidResult;
  fromL16(source: SixLabors.ImageSharp.PixelFormats.L16): VoidResult;
  fromLa16(source: SixLabors.ImageSharp.PixelFormats.La16): VoidResult;
  fromLa32(source: SixLabors.ImageSharp.PixelFormats.La32): VoidResult;
  fromRgb24(source: SixLabors.ImageSharp.PixelFormats.Rgb24): VoidResult;
  fromAbgr32(source: SixLabors.ImageSharp.PixelFormats.Abgr32): VoidResult;
  fromRgba32(source: SixLabors.ImageSharp.PixelFormats.Rgba32): VoidResult;
  toRgba32(dest: HostVariableRef<SixLabors.ImageSharp.PixelFormats.Rgba32>): VoidResult;
  fromRgb48(source: SixLabors.ImageSharp.PixelFormats.Rgb48): VoidResult;
  fromRgba64(source: SixLabors.ImageSharp.PixelFormats.Rgba64): VoidResult;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.PixelFormats.Bgr24): boolean;
  toString(): string;
  getHashCode(): number;
}

declare global {
  namespace SixLabors.ImageSharp.PixelFormats {
    type Bgr24 = import("./Bgr24").Bgr24;
  }
}

export interface Bgr24HostType extends HostType<Bgr24, ValueTypeTrait> {
  new (
    r: number | StrongNumeric<ByteHost>,
    g: number | StrongNumeric<ByteHost>,
    b: number | StrongNumeric<ByteHost>
  ): Bgr24;
}

export {};
