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

declare const taskAwaiterArity0Brand: unique symbol;
export interface _TaskAwaiterArity0
  extends
    ClrHostValue,
    System.Runtime.CompilerServices.ICriticalNotifyCompletionInput,
    System.Runtime.CompilerServices.INotifyCompletionInput {
  readonly [taskAwaiterArity0Brand]: true;
  getResult(): VoidResult;
  onCompleted(continuation: System.Action): VoidResult;
  readonly isCompleted: boolean;
  unsafeOnCompleted(continuation: System.Action): VoidResult;
}

export interface _TaskAwaiterArity0HostType extends HostType<_TaskAwaiterArity0, ValueTypeTrait> {}

declare const taskAwaiterArity1Brand: unique symbol;
export interface _TaskAwaiterArity1<TResult>
  extends
    ClrHostValue,
    System.Runtime.CompilerServices.ICriticalNotifyCompletionInput,
    System.Runtime.CompilerServices.INotifyCompletionInput {
  readonly [taskAwaiterArity1Brand]: true;
  getResult(): TResult;
  onCompleted(continuation: System.Action): VoidResult;
  readonly isCompleted: boolean;
  unsafeOnCompleted(continuation: System.Action): VoidResult;
}

export interface _TaskAwaiterArity1HostType<TResult> extends HostType<
  _TaskAwaiterArity1<TResult>,
  ValueTypeTrait
> {}

export type TaskAwaiterFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _TaskAwaiterArity0 : _TaskAwaiterArity1<T1>;

declare global {
  namespace System.Runtime.CompilerServices {
    type TaskAwaiter<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./TaskAwaiter").TaskAwaiterFamily<T1>;
  }
}

export type TaskAwaiterHostType = _TaskAwaiterArity0HostType;

export {};
