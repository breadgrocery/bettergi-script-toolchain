import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  Int64Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut, HostVariableRef } from "../../Microsoft/ClearScript/HostVariable";
import "../ReadOnlyMemory";
import "../SequencePosition";
import "../ValueType";
import "./ReadOnlySequenceSegment";

declare const readOnlySequenceArity1Brand: unique symbol;
export interface _ReadOnlySequenceArity1<T> extends ClrHostValue {
  readonly [readOnlySequenceArity1Brand]: true;
  getEnumerator(): _ReadOnlySequenceArity1_Enumerator<T>;
  getOffset(position: System.SequencePosition): number;
  getPosition(offset: number | StrongNumeric<Int64Host>): System.SequencePosition;
  getPosition(
    offset: number | StrongNumeric<Int64Host>,
    origin: System.SequencePosition
  ): System.SequencePosition;
  readonly end: System.SequencePosition;
  readonly first: System.ReadOnlyMemory<T>;
  readonly isEmpty: boolean;
  readonly isSingleSegment: boolean;
  readonly length: number;
  readonly start: System.SequencePosition;
  slice(start: System.SequencePosition): System.Buffers.ReadOnlySequence;
  slice(
    start: System.SequencePosition,
    end: System.SequencePosition
  ): System.Buffers.ReadOnlySequence;
  slice(
    start: System.SequencePosition,
    length: number | StrongNumeric<Int32Host>
  ): System.Buffers.ReadOnlySequence;
  slice(
    start: System.SequencePosition,
    length: number | StrongNumeric<Int64Host>
  ): System.Buffers.ReadOnlySequence;
  slice(
    start: number | StrongNumeric<Int32Host>,
    end: System.SequencePosition
  ): System.Buffers.ReadOnlySequence;
  slice(
    start: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): System.Buffers.ReadOnlySequence;
  slice(start: number | StrongNumeric<Int64Host>): System.Buffers.ReadOnlySequence;
  slice(
    start: number | StrongNumeric<Int64Host>,
    end: System.SequencePosition
  ): System.Buffers.ReadOnlySequence;
  slice(
    start: number | StrongNumeric<Int64Host>,
    length: number | StrongNumeric<Int64Host>
  ): System.Buffers.ReadOnlySequence;
  toString(): string;
  tryGet(
    position: HostVariableRef<System.SequencePosition>,
    memory: HostVariableOut<System.ReadOnlyMemory<T>>
  ): boolean;
  tryGet(
    position: HostVariableRef<System.SequencePosition>,
    memory: HostVariableOut<System.ReadOnlyMemory<T>>,
    advance: boolean
  ): boolean;
}

declare const readOnlySequenceArity1_EnumeratorBrand: unique symbol;
export interface _ReadOnlySequenceArity1_Enumerator<T> extends ClrHostValue {
  readonly [readOnlySequenceArity1_EnumeratorBrand]: true;
  moveNext(): boolean;
  readonly current: System.ReadOnlyMemory<T>;
}

export interface _ReadOnlySequenceArity1_EnumeratorHostType<T> extends HostType<
  _ReadOnlySequenceArity1_Enumerator<T>,
  ValueTypeTrait
> {
  new (
    sequence: HostVariableRef<System.Buffers.ReadOnlySequence<T>>
  ): _ReadOnlySequenceArity1_Enumerator<T>;
}

declare global {
  namespace System.Buffers.ReadOnlySequence {
    type Enumerator<T> = import("./ReadOnlySequence")._ReadOnlySequenceArity1_Enumerator<T>;
  }
}

export interface _ReadOnlySequenceArity1HostType<T> extends HostType<
  _ReadOnlySequenceArity1<T>,
  ValueTypeTrait
> {
  new (
    startSegment: System.Buffers.ReadOnlySequenceSegment<T>,
    startIndex: number | StrongNumeric<Int32Host>,
    endSegment: System.Buffers.ReadOnlySequenceSegment<T>,
    endIndex: number | StrongNumeric<Int32Host>
  ): _ReadOnlySequenceArity1<T>;
  new (array: HostArray<T>): _ReadOnlySequenceArity1<T>;
  new (
    array: HostArray<T>,
    start: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): _ReadOnlySequenceArity1<T>;
  new (memory: System.ReadOnlyMemory<T>): _ReadOnlySequenceArity1<T>;
  readonly empty: System.Buffers.ReadOnlySequence;
  readonly Enumerator: _ReadOnlySequenceArity1_EnumeratorHostType<any>;
}

export type ReadOnlySequenceFamily<T1 = FamilyArgumentOmitted> = _ReadOnlySequenceArity1<T1>;

declare global {
  namespace System.Buffers {
    type ReadOnlySequence<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ReadOnlySequence").ReadOnlySequenceFamily<T1>;
  }
}

export type ReadOnlySequenceHostType<T1> = _ReadOnlySequenceArity1HostType<T1>;

export {};
