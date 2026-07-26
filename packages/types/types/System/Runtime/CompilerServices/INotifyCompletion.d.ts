import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Action";

declare const iNotifyCompletionInputBrand: unique symbol;
export interface INotifyCompletionInput {
  readonly [iNotifyCompletionInputBrand]: true;
}

export interface INotifyCompletion
  extends Microsoft.ClearScript.ClrInterfaceView<INotifyCompletionInput>, INotifyCompletionInput {
  onCompleted(continuation: System.Action): VoidResult;
}

declare global {
  namespace System.Runtime.CompilerServices {
    type INotifyCompletionInput = import("./INotifyCompletion").INotifyCompletionInput;
  }
}

declare global {
  namespace System.Runtime.CompilerServices {
    type INotifyCompletion = import("./INotifyCompletion").INotifyCompletion;
  }
}

export interface INotifyCompletionHostType extends HostType<
  INotifyCompletion,
  InterfaceTypeTrait
> {}

export {};
