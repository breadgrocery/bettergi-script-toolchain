import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IDisposable";
import "../IntPtr";

declare const iDeviceContextInputBrand: unique symbol;
export interface IDeviceContextInput {
  readonly [iDeviceContextInputBrand]: true;
}

export interface IDeviceContext
  extends Microsoft.ClearScript.ClrInterfaceView<IDeviceContextInput>, IDeviceContextInput {
  getHdc(): System.IntPtr;
  releaseHdc(): VoidResult;
}

declare global {
  namespace System.Drawing {
    type IDeviceContextInput = import("./IDeviceContext").IDeviceContextInput;
  }
}

declare global {
  namespace System.Drawing {
    type IDeviceContext = import("./IDeviceContext").IDeviceContext;
  }
}

export interface IDeviceContextHostType extends HostType<IDeviceContext, InterfaceTypeTrait> {}

export {};
