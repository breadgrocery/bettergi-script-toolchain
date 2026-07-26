import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "./WhiteBalancer";

declare const simpleWBBrand: unique symbol;
export interface SimpleWB
  extends
    Omit<
      OpenCvSharp.XPhoto.WhiteBalancer,
      "balanceWhite" | "inputMax" | "inputMin" | "outputMax" | "outputMin" | "p"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [simpleWBBrand]: true;
  inputMax: number;
  inputMin: number;
  outputMax: number;
  outputMin: number;
  p: number;
  balanceWhite(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
}

declare global {
  namespace OpenCvSharp.XPhoto {
    type SimpleWB = import("./SimpleWB").SimpleWB;
  }
}

export interface SimpleWBHostType extends HostType<SimpleWB, ReferenceTypeTrait> {
  create(): OpenCvSharp.XPhoto.SimpleWB;
}

export {};
