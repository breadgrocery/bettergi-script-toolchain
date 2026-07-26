import type {
  ClrHostValue,
  DoubleHost,
  EnumInput,
  HostType,
  Int32Host,
  SingleHost,
  StrongNumeric,
  UInt32Host,
  UInt64Host,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./DistributionType";
import "./InputArray";
import "./InputOutputArray";

declare const rNGBrand: unique symbol;
export interface RNG extends ClrHostValue {
  readonly [rNGBrand]: true;
  state: number;
  toByte(): number;
  toSByte(): number;
  toUInt16(): number;
  toInt16(): number;
  toUInt32(): number;
  toInt32(): number;
  toSingle(): number;
  toDouble(): number;
  next(): number;
  run(): number;
  run(n: number | StrongNumeric<UInt32Host>): number;
  uniform(a: number | StrongNumeric<DoubleHost>, b: number | StrongNumeric<DoubleHost>): number;
  uniform(a: number | StrongNumeric<Int32Host>, b: number | StrongNumeric<Int32Host>): number;
  uniform(a: number | StrongNumeric<SingleHost>, b: number | StrongNumeric<SingleHost>): number;
  fill(
    mat: OpenCvSharp.InputOutputArray,
    distType: EnumInput<OpenCvSharp.DistributionType>,
    a: OpenCvSharp.InputArray,
    b: OpenCvSharp.InputArray
  ): VoidResult;
  fill(
    mat: OpenCvSharp.InputOutputArray,
    distType: EnumInput<OpenCvSharp.DistributionType>,
    a: OpenCvSharp.InputArray,
    b: OpenCvSharp.InputArray,
    saturateRange: boolean
  ): VoidResult;
  gaussian(sigma: number | StrongNumeric<DoubleHost>): number;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.RNG): boolean;
  getHashCode(): number;
}

declare global {
  namespace OpenCvSharp {
    type RNG = import("./RNG").RNG;
  }
}

export interface RNGHostType extends HostType<RNG, ValueTypeTrait> {
  new (): RNG;
  new (state: number | StrongNumeric<UInt64Host>): RNG;
}

export {};
