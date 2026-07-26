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

declare const sIFTBrand: unique symbol;
export interface SIFT
  extends OpenCvSharp.Feature2D, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [sIFTBrand]: true;
}

declare global {
  namespace OpenCvSharp.Features2D {
    type SIFT = import("./SIFT").SIFT;
  }
}

export interface SIFTHostType extends HostType<SIFT, ReferenceTypeTrait> {
  create(): OpenCvSharp.Features2D.SIFT;
  create(nFeatures: number | StrongNumeric<Int32Host>): OpenCvSharp.Features2D.SIFT;
  create(
    nFeatures: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Features2D.SIFT;
  create(
    nFeatures: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>,
    contrastThreshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Features2D.SIFT;
  create(
    nFeatures: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>,
    contrastThreshold: number | StrongNumeric<DoubleHost>,
    edgeThreshold: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Features2D.SIFT;
  create(
    nFeatures: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>,
    contrastThreshold: number | StrongNumeric<DoubleHost>,
    edgeThreshold: number | StrongNumeric<DoubleHost>,
    sigma: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Features2D.SIFT;
}

export {};
