import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";

declare const matTypeBrand: unique symbol;
export interface MatType extends ClrHostValue, System.IEquatableInput<number> {
  readonly [matTypeBrand]: true;
  readonly value: number;
  toInt32(): number;
  readonly depth: number;
  readonly isInteger: boolean;
  readonly channels: number;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.MatType): boolean;
  equals(other: number | StrongNumeric<Int32Host>): boolean;
  toString(): string;
  deconstruct(value: HostVariableOut<number>): VoidResult;
  getHashCode(): number;
}

declare global {
  namespace OpenCvSharp {
    type MatType = import("./MatType").MatType;
  }
}

export interface MatTypeHostType extends HostType<MatType, ValueTypeTrait> {
  new (value: number | StrongNumeric<Int32Host>): MatType;
  readonly cV_8UC1: OpenCvSharp.MatType;
  readonly cV_8UC2: OpenCvSharp.MatType;
  readonly cV_8UC3: OpenCvSharp.MatType;
  readonly cV_8UC4: OpenCvSharp.MatType;
  readonly cV_8SC1: OpenCvSharp.MatType;
  readonly cV_8SC2: OpenCvSharp.MatType;
  readonly cV_8SC3: OpenCvSharp.MatType;
  readonly cV_8SC4: OpenCvSharp.MatType;
  readonly cV_16UC1: OpenCvSharp.MatType;
  readonly cV_16UC2: OpenCvSharp.MatType;
  readonly cV_16UC3: OpenCvSharp.MatType;
  readonly cV_16UC4: OpenCvSharp.MatType;
  readonly cV_16SC1: OpenCvSharp.MatType;
  readonly cV_16SC2: OpenCvSharp.MatType;
  readonly cV_16SC3: OpenCvSharp.MatType;
  readonly cV_16SC4: OpenCvSharp.MatType;
  readonly cV_32SC1: OpenCvSharp.MatType;
  readonly cV_32SC2: OpenCvSharp.MatType;
  readonly cV_32SC3: OpenCvSharp.MatType;
  readonly cV_32SC4: OpenCvSharp.MatType;
  readonly cV_32FC1: OpenCvSharp.MatType;
  readonly cV_32FC2: OpenCvSharp.MatType;
  readonly cV_32FC3: OpenCvSharp.MatType;
  readonly cV_32FC4: OpenCvSharp.MatType;
  readonly cV_64FC1: OpenCvSharp.MatType;
  readonly cV_64FC2: OpenCvSharp.MatType;
  readonly cV_64FC3: OpenCvSharp.MatType;
  readonly cV_64FC4: OpenCvSharp.MatType;
  readonly cV_8U: number;
  readonly cV_8S: number;
  readonly cV_16U: number;
  readonly cV_16S: number;
  readonly cV_32S: number;
  readonly cV_32F: number;
  readonly cV_64F: number;
  readonly cV_USRTYPE1: number;
  fromInt32(value: number | StrongNumeric<Int32Host>): OpenCvSharp.MatType;
  cV_8UC(ch: number | StrongNumeric<Int32Host>): OpenCvSharp.MatType;
  cV_8SC(ch: number | StrongNumeric<Int32Host>): OpenCvSharp.MatType;
  cV_16UC(ch: number | StrongNumeric<Int32Host>): OpenCvSharp.MatType;
  cV_16SC(ch: number | StrongNumeric<Int32Host>): OpenCvSharp.MatType;
  cV_32SC(ch: number | StrongNumeric<Int32Host>): OpenCvSharp.MatType;
  cV_32FC(ch: number | StrongNumeric<Int32Host>): OpenCvSharp.MatType;
  cV_64FC(ch: number | StrongNumeric<Int32Host>): OpenCvSharp.MatType;
  makeType(
    depth: number | StrongNumeric<Int32Host>,
    channels: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.MatType;
}

export {};
