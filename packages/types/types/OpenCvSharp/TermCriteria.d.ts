import type {
  ClrHostValue,
  DoubleHost,
  EnumInput,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./CriteriaTypes";

declare const termCriteriaBrand: unique symbol;
export interface TermCriteria extends ClrHostValue {
  readonly [termCriteriaBrand]: true;
  readonly type: OpenCvSharp.CriteriaTypes;
  readonly maxCount: number;
  readonly epsilon: number;
  deconstruct(
    type: HostVariableOut<OpenCvSharp.CriteriaTypes>,
    maxCount: HostVariableOut<number>,
    epsilon: HostVariableOut<number>
  ): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.TermCriteria): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type TermCriteria = import("./TermCriteria").TermCriteria;
  }
}

export interface TermCriteriaHostType extends HostType<TermCriteria, ValueTypeTrait> {
  new (
    type: EnumInput<OpenCvSharp.CriteriaTypes>,
    maxCount: number | StrongNumeric<Int32Host>,
    epsilon: number | StrongNumeric<DoubleHost>
  ): TermCriteria;
  both(
    maxCount: number | StrongNumeric<Int32Host>,
    epsilon: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.TermCriteria;
}

export {};
