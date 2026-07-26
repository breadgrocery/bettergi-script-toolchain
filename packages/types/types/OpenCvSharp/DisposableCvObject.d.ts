import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "../System/IntPtr";
import "./DisposableObject";
import "./ICvPtrHolder";

declare const disposableCvObjectBrand: unique symbol;
export interface DisposableCvObject
  extends
    Omit<OpenCvSharp.DisposableObject, "cvPtr">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [disposableCvObjectBrand]: true;
  readonly cvPtr: System.IntPtr;
}

declare global {
  namespace OpenCvSharp {
    type DisposableCvObject = import("./DisposableCvObject").DisposableCvObject;
  }
}

export interface DisposableCvObjectHostType extends HostType<
  DisposableCvObject,
  ReferenceTypeTrait
> {}

export {};
