import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  IsFamilyArgumentOmitted,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Action";
import "../../ValueType";
import "./ICriticalNotifyCompletion";
import "./INotifyCompletion";

declare const configuredValueTaskAwaitableArity0Brand: unique symbol;
export interface _ConfiguredValueTaskAwaitableArity0 extends ClrHostValue {
  readonly [configuredValueTaskAwaitableArity0Brand]: true;
  getAwaiter(): _ConfiguredValueTaskAwaitableArity0_ConfiguredValueTaskAwaiter;
}

declare const configuredValueTaskAwaitableArity0_ConfiguredValueTaskAwaiterBrand: unique symbol;
export interface _ConfiguredValueTaskAwaitableArity0_ConfiguredValueTaskAwaiter
  extends
    ClrHostValue,
    System.Runtime.CompilerServices.ICriticalNotifyCompletionInput,
    System.Runtime.CompilerServices.INotifyCompletionInput {
  readonly [configuredValueTaskAwaitableArity0_ConfiguredValueTaskAwaiterBrand]: true;
  getResult(): VoidResult;
  onCompleted(continuation: System.Action): VoidResult;
  readonly isCompleted: boolean;
  unsafeOnCompleted(continuation: System.Action): VoidResult;
}

export interface _ConfiguredValueTaskAwaitableArity0_ConfiguredValueTaskAwaiterHostType extends HostType<
  _ConfiguredValueTaskAwaitableArity0_ConfiguredValueTaskAwaiter,
  ValueTypeTrait
> {}

declare global {
  namespace System.Runtime.CompilerServices.ConfiguredValueTaskAwaitable {
    type ConfiguredValueTaskAwaiter =
      import("./ConfiguredValueTaskAwaitable")._ConfiguredValueTaskAwaitableArity0_ConfiguredValueTaskAwaiter;
  }
}

export interface _ConfiguredValueTaskAwaitableArity0HostType extends HostType<
  _ConfiguredValueTaskAwaitableArity0,
  ValueTypeTrait
> {
  readonly ConfiguredValueTaskAwaiter: _ConfiguredValueTaskAwaitableArity0_ConfiguredValueTaskAwaiterHostType;
}

declare const configuredValueTaskAwaitableArity1Brand: unique symbol;
export interface _ConfiguredValueTaskAwaitableArity1<TResult> extends ClrHostValue {
  readonly [configuredValueTaskAwaitableArity1Brand]: true;
  getAwaiter(): _ConfiguredValueTaskAwaitableArity1_ConfiguredValueTaskAwaiter<TResult>;
}

declare const configuredValueTaskAwaitableArity1_ConfiguredValueTaskAwaiterBrand: unique symbol;
export interface _ConfiguredValueTaskAwaitableArity1_ConfiguredValueTaskAwaiter<TResult>
  extends
    ClrHostValue,
    System.Runtime.CompilerServices.ICriticalNotifyCompletionInput,
    System.Runtime.CompilerServices.INotifyCompletionInput {
  readonly [configuredValueTaskAwaitableArity1_ConfiguredValueTaskAwaiterBrand]: true;
  getResult(): TResult;
  onCompleted(continuation: System.Action): VoidResult;
  readonly isCompleted: boolean;
  unsafeOnCompleted(continuation: System.Action): VoidResult;
}

export interface _ConfiguredValueTaskAwaitableArity1_ConfiguredValueTaskAwaiterHostType<
  TResult
> extends HostType<
  _ConfiguredValueTaskAwaitableArity1_ConfiguredValueTaskAwaiter<TResult>,
  ValueTypeTrait
> {}

export interface _ConfiguredValueTaskAwaitableArity1HostType<TResult> extends HostType<
  _ConfiguredValueTaskAwaitableArity1<TResult>,
  ValueTypeTrait
> {
  readonly ConfiguredValueTaskAwaiter: _ConfiguredValueTaskAwaitableArity1_ConfiguredValueTaskAwaiterHostType<any>;
}

export type ConfiguredValueTaskAwaitableFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true
    ? _ConfiguredValueTaskAwaitableArity0
    : _ConfiguredValueTaskAwaitableArity1<T1>;

declare global {
  namespace System.Runtime.CompilerServices {
    type ConfiguredValueTaskAwaitable<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ConfiguredValueTaskAwaitable").ConfiguredValueTaskAwaitableFamily<T1>;
  }
}

export type ConfiguredValueTaskAwaitableHostType = _ConfiguredValueTaskAwaitableArity0HostType;

export {};
