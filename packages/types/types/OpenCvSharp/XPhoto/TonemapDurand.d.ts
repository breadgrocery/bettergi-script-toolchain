import type {
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../Tonemap";

declare const tonemapDurandBrand: unique symbol;
export interface TonemapDurand
  extends
    Omit<OpenCvSharp.Tonemap, "contrast" | "saturation" | "sigmaColor" | "sigmaSpace">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [tonemapDurandBrand]: true;
  saturation: number;
  contrast: number;
  sigmaSpace: number;
  sigmaColor: number;
}

declare global {
  namespace OpenCvSharp.XPhoto {
    type TonemapDurand = import("./TonemapDurand").TonemapDurand;
  }
}

export interface TonemapDurandHostType extends HostType<TonemapDurand, ReferenceTypeTrait> {
  create(): OpenCvSharp.XPhoto.TonemapDurand;
  create(gamma: number | StrongNumeric<SingleHost>): OpenCvSharp.XPhoto.TonemapDurand;
  create(
    gamma: number | StrongNumeric<SingleHost>,
    contrast: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XPhoto.TonemapDurand;
  create(
    gamma: number | StrongNumeric<SingleHost>,
    contrast: number | StrongNumeric<SingleHost>,
    saturation: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XPhoto.TonemapDurand;
  create(
    gamma: number | StrongNumeric<SingleHost>,
    contrast: number | StrongNumeric<SingleHost>,
    saturation: number | StrongNumeric<SingleHost>,
    sigmaSpace: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XPhoto.TonemapDurand;
  create(
    gamma: number | StrongNumeric<SingleHost>,
    contrast: number | StrongNumeric<SingleHost>,
    saturation: number | StrongNumeric<SingleHost>,
    sigmaSpace: number | StrongNumeric<SingleHost>,
    sigmaColor: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XPhoto.TonemapDurand;
}

export {};
