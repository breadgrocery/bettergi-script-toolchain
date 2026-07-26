import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../Feature2D";
import "../ICvPtrHolder";

declare const lUCIDBrand: unique symbol;
export interface LUCID
  extends OpenCvSharp.Feature2D, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [lUCIDBrand]: true;
}

declare global {
  namespace OpenCvSharp.XFeatures2D {
    type LUCID = import("./LUCID").LUCID;
  }
}

export interface LUCIDHostType extends HostType<LUCID, ReferenceTypeTrait> {
  create(): OpenCvSharp.XFeatures2D.LUCID;
  create(lucidKernel: number | StrongNumeric<Int32Host>): OpenCvSharp.XFeatures2D.LUCID;
  create(
    lucidKernel: number | StrongNumeric<Int32Host>,
    blurKernel: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XFeatures2D.LUCID;
}

export {};
