import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Action";
import "./INotifyCompletion";

declare const iCriticalNotifyCompletionInputBrand: unique symbol;
export interface ICriticalNotifyCompletionInput {
  readonly [iCriticalNotifyCompletionInputBrand]: true;
}

export interface ICriticalNotifyCompletion
  extends
    Microsoft.ClearScript.ClrInterfaceView<ICriticalNotifyCompletionInput>,
    ICriticalNotifyCompletionInput {
  unsafeOnCompleted(continuation: System.Action): VoidResult;
}

declare global {
  namespace System.Runtime.CompilerServices {
    type ICriticalNotifyCompletionInput =
      import("./ICriticalNotifyCompletion").ICriticalNotifyCompletionInput;
  }
}

declare global {
  namespace System.Runtime.CompilerServices {
    type ICriticalNotifyCompletion =
      import("./ICriticalNotifyCompletion").ICriticalNotifyCompletion;
  }
}

export interface ICriticalNotifyCompletionHostType extends HostType<
  ICriticalNotifyCompletion,
  InterfaceTypeTrait
> {}

export {};
