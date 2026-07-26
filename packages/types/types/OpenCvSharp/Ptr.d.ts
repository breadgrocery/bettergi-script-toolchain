import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "../System/IntPtr";
import "./DisposableCvObject";
import "./ICvPtrHolder";

declare const ptrBrand: unique symbol;
export interface Ptr
  extends
    Omit<OpenCvSharp.DisposableCvObject, "get">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [ptrBrand]: true;
  get(): System.IntPtr;
}

declare global {
  namespace OpenCvSharp {
    type Ptr = import("./Ptr").Ptr;
  }
}

export interface PtrHostType extends HostType<Ptr, ReferenceTypeTrait> {}

export {};
