import type { ClrHostValue, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IntPtr";
import "./ICvPtrHolder";

declare const cvObjectBrand: unique symbol;
export interface CvObject extends ClrHostValue, OpenCvSharp.ICvPtrHolderInput {
  readonly [cvObjectBrand]: true;
  readonly cvPtr: System.IntPtr;
}

declare global {
  namespace OpenCvSharp {
    type CvObject = import("./CvObject").CvObject;
  }
}

export interface CvObjectHostType extends HostType<CvObject, ReferenceTypeTrait> {}

export {};
