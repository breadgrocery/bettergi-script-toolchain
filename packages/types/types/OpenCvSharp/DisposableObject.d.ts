import type { ClrHostValue, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";

declare const disposableObjectBrand: unique symbol;
export interface DisposableObject extends ClrHostValue, System.IDisposableInput {
  readonly [disposableObjectBrand]: true;
  readonly isDisposed: boolean;
  isEnabledDispose: boolean;
  dispose(): VoidResult;
  throwIfDisposed(): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type DisposableObject = import("./DisposableObject").DisposableObject;
  }
}

export interface DisposableObjectHostType extends HostType<DisposableObject, ReferenceTypeTrait> {}

export {};
