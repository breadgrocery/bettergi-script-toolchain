import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../ReadOnlyMemory";

declare const readOnlySequenceSegmentArity1Brand: unique symbol;
export interface _ReadOnlySequenceSegmentArity1<T> extends ClrHostValue {
  readonly [readOnlySequenceSegmentArity1Brand]: true;
  readonly memory: System.ReadOnlyMemory<T>;
  readonly next: System.Buffers.ReadOnlySequenceSegment;
  readonly runningIndex: number;
}

export interface _ReadOnlySequenceSegmentArity1HostType<T> extends HostType<
  _ReadOnlySequenceSegmentArity1<T>,
  ReferenceTypeTrait
> {}

export type ReadOnlySequenceSegmentFamily<T1 = FamilyArgumentOmitted> =
  _ReadOnlySequenceSegmentArity1<T1>;

declare global {
  namespace System.Buffers {
    type ReadOnlySequenceSegment<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ReadOnlySequenceSegment").ReadOnlySequenceSegmentFamily<T1>;
  }
}

export type ReadOnlySequenceSegmentHostType<T1> = _ReadOnlySequenceSegmentArity1HostType<T1>;

export {};
