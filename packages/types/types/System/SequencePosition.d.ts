import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./IEquatable";
import "./ValueType";

declare const sequencePositionBrand: unique symbol;
export interface SequencePosition extends ClrHostValue {
  readonly [sequencePositionBrand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: System.SequencePosition): boolean;
  getHashCode(): number;
  getInteger(): number;
  getObject(): unknown;
}

declare global {
  namespace System {
    type SequencePosition = import("./SequencePosition").SequencePosition;
  }
}

export interface SequencePositionHostType extends HostType<SequencePosition, ValueTypeTrait> {
  new (object: unknown | null, integer: number | StrongNumeric<Int32Host>): SequencePosition;
}

export {};
