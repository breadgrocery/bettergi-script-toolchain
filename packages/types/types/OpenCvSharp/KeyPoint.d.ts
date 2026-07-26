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
import "./Point2f";

declare const keyPointBrand: unique symbol;
export interface KeyPoint extends ClrHostValue {
  readonly [keyPointBrand]: true;
  pt: OpenCvSharp.Point2f;
  size: number;
  angle: number;
  response: number;
  octave: number;
  classId: number;
  deconstruct(
    pt: HostVariableOut<OpenCvSharp.Point2f>,
    size: HostVariableOut<number>,
    angle: HostVariableOut<number>,
    response: HostVariableOut<number>,
    octave: HostVariableOut<number>,
    classId: HostVariableOut<number>
  ): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.KeyPoint): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type KeyPoint = import("./KeyPoint").KeyPoint;
  }
}

export interface KeyPointHostType extends HostType<KeyPoint, ValueTypeTrait> {
  new (pt: OpenCvSharp.Point2f, size: number | StrongNumeric<SingleHost>): KeyPoint;
  new (
    pt: OpenCvSharp.Point2f,
    size: number | StrongNumeric<SingleHost>,
    angle: number | StrongNumeric<SingleHost>
  ): KeyPoint;
  new (
    pt: OpenCvSharp.Point2f,
    size: number | StrongNumeric<SingleHost>,
    angle: number | StrongNumeric<SingleHost>,
    response: number | StrongNumeric<SingleHost>
  ): KeyPoint;
  new (
    pt: OpenCvSharp.Point2f,
    size: number | StrongNumeric<SingleHost>,
    angle: number | StrongNumeric<SingleHost>,
    response: number | StrongNumeric<SingleHost>,
    octave: number | StrongNumeric<Int32Host>
  ): KeyPoint;
  new (
    pt: OpenCvSharp.Point2f,
    size: number | StrongNumeric<SingleHost>,
    angle: number | StrongNumeric<SingleHost>,
    response: number | StrongNumeric<SingleHost>,
    octave: number | StrongNumeric<Int32Host>,
    classId: number | StrongNumeric<Int32Host>
  ): KeyPoint;
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>
  ): KeyPoint;
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    angle: number | StrongNumeric<SingleHost>
  ): KeyPoint;
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    angle: number | StrongNumeric<SingleHost>,
    response: number | StrongNumeric<SingleHost>
  ): KeyPoint;
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    angle: number | StrongNumeric<SingleHost>,
    response: number | StrongNumeric<SingleHost>,
    octave: number | StrongNumeric<Int32Host>
  ): KeyPoint;
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    angle: number | StrongNumeric<SingleHost>,
    response: number | StrongNumeric<SingleHost>,
    octave: number | StrongNumeric<Int32Host>,
    classId: number | StrongNumeric<Int32Host>
  ): KeyPoint;
}

export {};
