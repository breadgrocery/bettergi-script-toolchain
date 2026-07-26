import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../Algorithm";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";

declare const whiteBalancerBrand: unique symbol;
export interface WhiteBalancer
  extends
    Omit<OpenCvSharp.Algorithm, "balanceWhite">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [whiteBalancerBrand]: true;
  balanceWhite(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
}

declare global {
  namespace OpenCvSharp.XPhoto {
    type WhiteBalancer = import("./WhiteBalancer").WhiteBalancer;
  }
}

export interface WhiteBalancerHostType extends HostType<WhiteBalancer, ReferenceTypeTrait> {}

export {};
