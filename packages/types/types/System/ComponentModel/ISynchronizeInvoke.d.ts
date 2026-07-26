import type { HostArray, HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../Delegate";
import "../IAsyncResult";

declare const iSynchronizeInvokeInputBrand: unique symbol;
export interface ISynchronizeInvokeInput {
  readonly [iSynchronizeInvokeInputBrand]: true;
}

export interface ISynchronizeInvoke
  extends Microsoft.ClearScript.ClrInterfaceView<ISynchronizeInvokeInput>, ISynchronizeInvokeInput {
  beginInvoke(method: System.Delegate, args: HostArray<unknown> | null): System.IAsyncResult;
  endInvoke(result: System.IAsyncResult): unknown;
  invoke(method: System.Delegate, args: HostArray<unknown> | null): unknown;
  readonly invokeRequired: boolean;
}

declare global {
  namespace System.ComponentModel {
    type ISynchronizeInvokeInput = import("./ISynchronizeInvoke").ISynchronizeInvokeInput;
  }
}

declare global {
  namespace System.ComponentModel {
    type ISynchronizeInvoke = import("./ISynchronizeInvoke").ISynchronizeInvoke;
  }
}

export interface ISynchronizeInvokeHostType extends HostType<
  ISynchronizeInvoke,
  InterfaceTypeTrait
> {}

export {};
