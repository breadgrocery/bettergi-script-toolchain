import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "./WhiteBalancer";

declare const grayworldWBBrand: unique symbol;
export interface GrayworldWB
  extends
    Omit<OpenCvSharp.XPhoto.WhiteBalancer, "balanceWhite" | "saturationThreshold">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [grayworldWBBrand]: true;
  saturationThreshold: number;
  balanceWhite(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
}

declare global {
  namespace OpenCvSharp.XPhoto {
    type GrayworldWB = import("./GrayworldWB").GrayworldWB;
  }
}

export interface GrayworldWBHostType extends HostType<GrayworldWB, ReferenceTypeTrait> {
  create(): OpenCvSharp.XPhoto.GrayworldWB;
}

export {};
