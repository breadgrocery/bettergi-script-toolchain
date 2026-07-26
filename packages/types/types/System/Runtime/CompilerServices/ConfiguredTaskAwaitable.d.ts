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

declare const configuredTaskAwaitableArity0Brand: unique symbol;
export interface _ConfiguredTaskAwaitableArity0 extends ClrHostValue {
  readonly [configuredTaskAwaitableArity0Brand]: true;
  getAwaiter(): _ConfiguredTaskAwaitableArity0_ConfiguredTaskAwaiter;
}

declare const configuredTaskAwaitableArity0_ConfiguredTaskAwaiterBrand: unique symbol;
export interface _ConfiguredTaskAwaitableArity0_ConfiguredTaskAwaiter
  extends
    ClrHostValue,
    System.Runtime.CompilerServices.ICriticalNotifyCompletionInput,
    System.Runtime.CompilerServices.INotifyCompletionInput {
  readonly [configuredTaskAwaitableArity0_ConfiguredTaskAwaiterBrand]: true;
  getResult(): VoidResult;
  onCompleted(continuation: System.Action): VoidResult;
  readonly isCompleted: boolean;
  unsafeOnCompleted(continuation: System.Action): VoidResult;
}

export interface _ConfiguredTaskAwaitableArity0_ConfiguredTaskAwaiterHostType extends HostType<
  _ConfiguredTaskAwaitableArity0_ConfiguredTaskAwaiter,
  ValueTypeTrait
> {}

declare global {
  namespace System.Runtime.CompilerServices.ConfiguredTaskAwaitable {
    type ConfiguredTaskAwaiter =
      import("./ConfiguredTaskAwaitable")._ConfiguredTaskAwaitableArity0_ConfiguredTaskAwaiter;
  }
}

export interface _ConfiguredTaskAwaitableArity0HostType extends HostType<
  _ConfiguredTaskAwaitableArity0,
  ValueTypeTrait
> {
  readonly ConfiguredTaskAwaiter: _ConfiguredTaskAwaitableArity0_ConfiguredTaskAwaiterHostType;
}

declare const configuredTaskAwaitableArity1Brand: unique symbol;
export interface _ConfiguredTaskAwaitableArity1<TResult> extends ClrHostValue {
  readonly [configuredTaskAwaitableArity1Brand]: true;
  getAwaiter(): _ConfiguredTaskAwaitableArity1_ConfiguredTaskAwaiter<TResult>;
}

declare const configuredTaskAwaitableArity1_ConfiguredTaskAwaiterBrand: unique symbol;
export interface _ConfiguredTaskAwaitableArity1_ConfiguredTaskAwaiter<TResult>
  extends
    ClrHostValue,
    System.Runtime.CompilerServices.ICriticalNotifyCompletionInput,
    System.Runtime.CompilerServices.INotifyCompletionInput {
  readonly [configuredTaskAwaitableArity1_ConfiguredTaskAwaiterBrand]: true;
  getResult(): TResult;
  onCompleted(continuation: System.Action): VoidResult;
  readonly isCompleted: boolean;
  unsafeOnCompleted(continuation: System.Action): VoidResult;
}

export interface _ConfiguredTaskAwaitableArity1_ConfiguredTaskAwaiterHostType<
  TResult
> extends HostType<_ConfiguredTaskAwaitableArity1_ConfiguredTaskAwaiter<TResult>, ValueTypeTrait> {}

export interface _ConfiguredTaskAwaitableArity1HostType<TResult> extends HostType<
  _ConfiguredTaskAwaitableArity1<TResult>,
  ValueTypeTrait
> {
  readonly ConfiguredTaskAwaiter: _ConfiguredTaskAwaitableArity1_ConfiguredTaskAwaiterHostType<any>;
}

export type ConfiguredTaskAwaitableFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true
    ? _ConfiguredTaskAwaitableArity0
    : _ConfiguredTaskAwaitableArity1<T1>;

declare global {
  namespace System.Runtime.CompilerServices {
    type ConfiguredTaskAwaitable<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ConfiguredTaskAwaitable").ConfiguredTaskAwaitableFamily<T1>;
  }
}

export type ConfiguredTaskAwaitableHostType = _ConfiguredTaskAwaitableArity0HostType;

export {};
