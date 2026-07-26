import type {
  CharHost,
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "../System/IEquatable";
import "../System/ValueType";

declare const fourCCBrand: unique symbol;
export interface FourCC extends ClrHostValue {
  readonly [fourCCBrand]: true;
  readonly value: number;
  toInt32(): number;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.FourCC): boolean;
  getHashCode(): number;
}

declare global {
  namespace OpenCvSharp {
    type FourCC = import("./FourCC").FourCC;
  }
}

export interface FourCCHostType extends HostType<FourCC, ValueTypeTrait> {
  new (value: number | StrongNumeric<Int32Host>): FourCC;
  readonly avc: number;
  readonly cvid: number;
  readonly dib: number;
  readonly diV3: number;
  readonly divx: number;
  readonly dV25: number;
  readonly dV50: number;
  readonly dvc: number;
  readonly dvH1: number;
  readonly dvhd: number;
  readonly dvsd: number;
  readonly dvsl: number;
  readonly h261: number;
  readonly h263: number;
  readonly h264: number;
  readonly h265: number;
  readonly hevc: number;
  readonly i420: number;
  readonly iV32: number;
  readonly iV41: number;
  readonly iV50: number;
  readonly iyub: number;
  readonly iyuv: number;
  readonly mjpg: number;
  readonly m4S2: number;
  readonly mP42: number;
  readonly mP43: number;
  readonly mP4S: number;
  readonly mP4V: number;
  readonly mpG1: number;
  readonly mpG2: number;
  readonly mpG4: number;
  readonly msS1: number;
  readonly msS2: number;
  readonly msvc: number;
  readonly jpeg: number;
  readonly piM1: number;
  readonly wmV1: number;
  readonly wmV2: number;
  readonly wmV3: number;
  readonly wvC1: number;
  readonly xvid: number;
  readonly x264: number;
  readonly default: number;
  readonly prompt: number;
  fromFourChars(
    c1: number | StrongNumeric<CharHost>,
    c2: number | StrongNumeric<CharHost>,
    c3: number | StrongNumeric<CharHost>,
    c4: number | StrongNumeric<CharHost>
  ): OpenCvSharp.FourCC;
  fromString(code: string): OpenCvSharp.FourCC;
  fromInt32(code: number | StrongNumeric<Int32Host>): OpenCvSharp.FourCC;
}

export {};
