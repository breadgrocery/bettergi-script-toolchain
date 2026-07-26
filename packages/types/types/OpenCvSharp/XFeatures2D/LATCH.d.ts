import type {
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../Feature2D";
import "../ICvPtrHolder";

declare const lATCHBrand: unique symbol;
export interface LATCH
  extends OpenCvSharp.Feature2D, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [lATCHBrand]: true;
}

declare global {
  namespace OpenCvSharp.XFeatures2D {
    type LATCH = import("./LATCH").LATCH;
  }
}

export interface LATCHHostType extends HostType<LATCH, ReferenceTypeTrait> {
  create(): OpenCvSharp.XFeatures2D.LATCH;
  create(bytes: number | StrongNumeric<Int32Host>): OpenCvSharp.XFeatures2D.LATCH;
  create(
    bytes: number | StrongNumeric<Int32Host>,
    rotationInvariance: boolean
  ): OpenCvSharp.XFeatures2D.LATCH;
  create(
    bytes: number | StrongNumeric<Int32Host>,
    rotationInvariance: boolean,
    halfSsdSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XFeatures2D.LATCH;
  create(
    bytes: number | StrongNumeric<Int32Host>,
    rotationInvariance: boolean,
    halfSsdSize: number | StrongNumeric<Int32Host>,
    sigma: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.XFeatures2D.LATCH;
}

export {};
