import type {
  ClrHostValue,
  HostType,
  Int32Host,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./Vec4f";

declare const dMatchBrand: unique symbol;
export interface DMatch extends ClrHostValue {
  readonly [dMatchBrand]: true;
  queryIdx: number;
  trainIdx: number;
  imgIdx: number;
  distance: number;
  compareTo(other: OpenCvSharp.DMatch): number;
  toVec4f(): OpenCvSharp.Vec4f;
  deconstruct(
    queryIdx: HostVariableOut<number>,
    trainIdx: HostVariableOut<number>,
    imgIdx: HostVariableOut<number>,
    distance: HostVariableOut<number>
  ): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.DMatch): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type DMatch = import("./DMatch").DMatch;
  }
}

export interface DMatchHostType extends HostType<DMatch, ValueTypeTrait> {
  new (
    queryIdx: number | StrongNumeric<Int32Host>,
    trainIdx: number | StrongNumeric<Int32Host>,
    imgIdx: number | StrongNumeric<Int32Host>,
    distance: number | StrongNumeric<SingleHost>
  ): DMatch;
  new (
    queryIdx: number | StrongNumeric<Int32Host>,
    trainIdx: number | StrongNumeric<Int32Host>,
    distance: number | StrongNumeric<SingleHost>
  ): DMatch;
  empty(): OpenCvSharp.DMatch;
  fromVec4f(v: OpenCvSharp.Vec4f): OpenCvSharp.DMatch;
}

export {};
