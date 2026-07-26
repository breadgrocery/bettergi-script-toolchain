import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  Int16Host,
  IsFamilyArgumentOmitted,
  StrongNumeric,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../IEquatable";
import "../../Runtime/CompilerServices/ConfiguredValueTaskAwaitable";
import "../../Runtime/CompilerServices/ValueTaskAwaiter";
import "../../ValueType";
import "../../WebSocket";
import "../CancellationToken";
import "./Sources/IValueTaskSource";

declare const valueTaskArity0Brand: unique symbol;
export interface _ValueTaskArity0 extends ClrHostValue {
  readonly [valueTaskArity0Brand]: true;
  asTask(): Promise<void>;
  configureAwait(
    continueOnCapturedContext: boolean
  ): System.Runtime.CompilerServices.ConfiguredValueTaskAwaitable;
  equals(obj: unknown | null): boolean;
  equals(other: System.Threading.Tasks.ValueTask): boolean;
  getAwaiter(): System.Runtime.CompilerServices.ValueTaskAwaiter;
  getHashCode(): number;
  preserve(): System.Threading.Tasks.ValueTask;
  readonly isCanceled: boolean;
  readonly isCompleted: boolean;
  readonly isCompletedSuccessfully: boolean;
  readonly isFaulted: boolean;
}

export interface _ValueTaskArity0HostType extends HostType<_ValueTaskArity0, ValueTypeTrait> {
  new (task: Promise<void>): _ValueTaskArity0;
  new (
    source: System.Threading.Tasks.Sources.IValueTaskSource,
    token: number | StrongNumeric<Int16Host>
  ): _ValueTaskArity0;
  readonly completedTask: System.Threading.Tasks.ValueTask;
  fromResult<TResult>(
    type1: HostType<TResult>,
    result: TResult | null
  ): System.Threading.Tasks.ValueTask<TResult>;
  fromCanceled(
    cancellationToken: System.Threading.CancellationToken
  ): System.Threading.Tasks.ValueTask;
  fromCanceled<TResult>(
    type1: HostType<TResult>,
    cancellationToken: System.Threading.CancellationToken
  ): System.Threading.Tasks.ValueTask<TResult>;
  fromException(exception: System.Exception): System.Threading.Tasks.ValueTask;
  fromException<TResult>(
    type1: HostType<TResult>,
    exception: System.Exception
  ): System.Threading.Tasks.ValueTask<TResult>;
}

declare const valueTaskArity1Brand: unique symbol;
export interface _ValueTaskArity1<TResult> extends ClrHostValue {
  readonly [valueTaskArity1Brand]: true;
  asTask(): Promise<TResult>;
  configureAwait(
    continueOnCapturedContext: boolean
  ): System.Runtime.CompilerServices.ConfiguredValueTaskAwaitable<TResult>;
  equals(obj: unknown | null): boolean;
  equals(other: System.Threading.Tasks.ValueTask): boolean;
  getAwaiter(): System.Runtime.CompilerServices.ValueTaskAwaiter<TResult>;
  getHashCode(): number;
  preserve(): System.Threading.Tasks.ValueTask;
  readonly isCanceled: boolean;
  readonly isCompleted: boolean;
  readonly isCompletedSuccessfully: boolean;
  readonly isFaulted: boolean;
  readonly result: TResult;
  toString(): string;
}

export interface _ValueTaskArity1HostType<TResult> extends HostType<
  _ValueTaskArity1<TResult>,
  ValueTypeTrait
> {
  new (result: TResult): _ValueTaskArity1<TResult>;
  new (task: Promise<TResult>): _ValueTaskArity1<TResult>;
  new (
    source: System.Threading.Tasks.Sources.IValueTaskSource<TResult>,
    token: number | StrongNumeric<Int16Host>
  ): _ValueTaskArity1<TResult>;
}

export type ValueTaskFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _ValueTaskArity0 : _ValueTaskArity1<T1>;

declare global {
  namespace System.Threading.Tasks {
    type ValueTask<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ValueTask").ValueTaskFamily<T1>;
  }
}

export type ValueTaskHostType = _ValueTaskArity0HostType;

export {};
