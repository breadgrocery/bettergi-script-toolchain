import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "./IndexParams";

declare const lshIndexParamsBrand: unique symbol;
export interface LshIndexParams
  extends OpenCvSharp.Flann.IndexParams, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [lshIndexParamsBrand]: true;
}

declare global {
  namespace OpenCvSharp.Flann {
    type LshIndexParams = import("./LshIndexParams").LshIndexParams;
  }
}

export interface LshIndexParamsHostType extends HostType<LshIndexParams, ReferenceTypeTrait> {
  new (
    tableNumber: number | StrongNumeric<Int32Host>,
    keySize: number | StrongNumeric<Int32Host>,
    multiProbeLevel: number | StrongNumeric<Int32Host>
  ): LshIndexParams;
}

export {};
