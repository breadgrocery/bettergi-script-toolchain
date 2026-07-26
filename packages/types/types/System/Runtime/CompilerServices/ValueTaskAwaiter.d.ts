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

declare const valueTaskAwaiterArity0Brand: unique symbol;
export interface _ValueTaskAwaiterArity0
  extends
    ClrHostValue,
    System.Runtime.CompilerServices.ICriticalNotifyCompletionInput,
    System.Runtime.CompilerServices.INotifyCompletionInput {
  readonly [valueTaskAwaiterArity0Brand]: true;
  getResult(): VoidResult;
  onCompleted(continuation: System.Action): VoidResult;
  readonly isCompleted: boolean;
  unsafeOnCompleted(continuation: System.Action): VoidResult;
}

export interface _ValueTaskAwaiterArity0HostType extends HostType<
  _ValueTaskAwaiterArity0,
  ValueTypeTrait
> {}

declare const valueTaskAwaiterArity1Brand: unique symbol;
export interface _ValueTaskAwaiterArity1<TResult>
  extends
    ClrHostValue,
    System.Runtime.CompilerServices.ICriticalNotifyCompletionInput,
    System.Runtime.CompilerServices.INotifyCompletionInput {
  readonly [valueTaskAwaiterArity1Brand]: true;
  getResult(): TResult;
  onCompleted(continuation: System.Action): VoidResult;
  readonly isCompleted: boolean;
  unsafeOnCompleted(continuation: System.Action): VoidResult;
}

export interface _ValueTaskAwaiterArity1HostType<TResult> extends HostType<
  _ValueTaskAwaiterArity1<TResult>,
  ValueTypeTrait
> {}

export type ValueTaskAwaiterFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _ValueTaskAwaiterArity0 : _ValueTaskAwaiterArity1<T1>;

declare global {
  namespace System.Runtime.CompilerServices {
    type ValueTaskAwaiter<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ValueTaskAwaiter").ValueTaskAwaiterFamily<T1>;
  }
}

export type ValueTaskAwaiterHostType = _ValueTaskAwaiterArity0HostType;

export {};
