import type {
  ByteHost,
  ClrHostValue,
  HostType,
  SingleHost,
  StrongNumeric,
  UInt32Host,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut, HostVariableRef } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/IEquatable";
import "../../../System/Numerics/Vector3";
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
import "./Rgba64";

declare const rgba32Brand: unique symbol;
export interface Rgba32
  extends
    ClrHostValue,
    SixLabors.ImageSharp.PixelFormats.IPixelInput,
    SixLabors.ImageSharp.PixelFormats.IPackedVectorInput<number> {
  readonly [rgba32Brand]: true;
  r: number;
  g: number;
  b: number;
  a: number;
  rgba: number;
  rgb: SixLabors.ImageSharp.PixelFormats.Rgb24;
  bgr: SixLabors.ImageSharp.PixelFormats.Bgr24;
  packedValue: number;
  createPixelOperations(): SixLabors.ImageSharp.PixelFormats.PixelOperations<SixLabors.ImageSharp.PixelFormats.Rgba32>;
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
  toRgba32(dest: HostVariableRef<SixLabors.ImageSharp.PixelFormats.Rgba32>): VoidResult;
  fromRgb48(source: SixLabors.ImageSharp.PixelFormats.Rgb48): VoidResult;
  fromRgba64(source: SixLabors.ImageSharp.PixelFormats.Rgba64): VoidResult;
  toHex(): string;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.PixelFormats.Rgba32): boolean;
  toString(): string;
  getHashCode(): number;
}

declare global {
  namespace SixLabors.ImageSharp.PixelFormats {
    type Rgba32 = import("./Rgba32").Rgba32;
  }
}

export interface Rgba32HostType extends HostType<Rgba32, ValueTypeTrait> {
  new (
    r: number | StrongNumeric<ByteHost>,
    g: number | StrongNumeric<ByteHost>,
    b: number | StrongNumeric<ByteHost>
  ): Rgba32;
  new (
    r: number | StrongNumeric<ByteHost>,
    g: number | StrongNumeric<ByteHost>,
    b: number | StrongNumeric<ByteHost>,
    a: number | StrongNumeric<ByteHost>
  ): Rgba32;
  new (
    r: number | StrongNumeric<SingleHost>,
    g: number | StrongNumeric<SingleHost>,
    b: number | StrongNumeric<SingleHost>
  ): Rgba32;
  new (
    r: number | StrongNumeric<SingleHost>,
    g: number | StrongNumeric<SingleHost>,
    b: number | StrongNumeric<SingleHost>,
    a: number | StrongNumeric<SingleHost>
  ): Rgba32;
  new (vector: System.Numerics.Vector3): Rgba32;
  new (vector: System.Numerics.Vector4): Rgba32;
  new (packed: number | StrongNumeric<UInt32Host>): Rgba32;
  parseHex(hex: string): SixLabors.ImageSharp.PixelFormats.Rgba32;
  tryParseHex(
    hex: string | null,
    result: HostVariableOut<SixLabors.ImageSharp.PixelFormats.Rgba32>
  ): boolean;
}

export {};
