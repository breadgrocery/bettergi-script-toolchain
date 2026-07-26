import type { HostType, InterfaceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IntPtr";

declare const iCvPtrHolderInputBrand: unique symbol;
export interface ICvPtrHolderInput {
  readonly [iCvPtrHolderInputBrand]: true;
}

export interface ICvPtrHolder
  extends Microsoft.ClearScript.ClrInterfaceView<ICvPtrHolderInput>, ICvPtrHolderInput {
  readonly cvPtr: System.IntPtr;
}

declare global {
  namespace OpenCvSharp {
    type ICvPtrHolderInput = import("./ICvPtrHolder").ICvPtrHolderInput;
  }
}

declare global {
  namespace OpenCvSharp {
    type ICvPtrHolder = import("./ICvPtrHolder").ICvPtrHolder;
  }
}

export interface ICvPtrHolderHostType extends HostType<ICvPtrHolder, InterfaceTypeTrait> {}

export {};
