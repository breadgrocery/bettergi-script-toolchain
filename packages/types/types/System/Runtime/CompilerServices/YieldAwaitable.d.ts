import type {
  ClrHostValue,
  HostType,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Action";
import "../../ValueType";
import "./ICriticalNotifyCompletion";
import "./INotifyCompletion";

declare const yieldAwaitableBrand: unique symbol;
export interface YieldAwaitable extends ClrHostValue {
  readonly [yieldAwaitableBrand]: true;
  getAwaiter(): YieldAwaitable_YieldAwaiter;
}

declare const yieldAwaitable_YieldAwaiterBrand: unique symbol;
export interface YieldAwaitable_YieldAwaiter
  extends
    ClrHostValue,
    System.Runtime.CompilerServices.ICriticalNotifyCompletionInput,
    System.Runtime.CompilerServices.INotifyCompletionInput {
  readonly [yieldAwaitable_YieldAwaiterBrand]: true;
  getResult(): VoidResult;
  onCompleted(continuation: System.Action): VoidResult;
  readonly isCompleted: boolean;
  unsafeOnCompleted(continuation: System.Action): VoidResult;
}

export interface YieldAwaitable_YieldAwaiterHostType extends HostType<
  YieldAwaitable_YieldAwaiter,
  ValueTypeTrait
> {}

declare global {
  namespace System.Runtime.CompilerServices.YieldAwaitable {
    type YieldAwaiter = import("./YieldAwaitable").YieldAwaitable_YieldAwaiter;
  }
}

declare global {
  namespace System.Runtime.CompilerServices {
    type YieldAwaitable = import("./YieldAwaitable").YieldAwaitable;
  }
}

export interface YieldAwaitableHostType extends HostType<YieldAwaitable, ValueTypeTrait> {
  readonly YieldAwaiter: YieldAwaitable_YieldAwaiterHostType;
}

export {};
