import type {
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "./ImgHashBase";

declare const marrHildrethHashBrand: unique symbol;
export interface MarrHildrethHash
  extends
    Omit<OpenCvSharp.ImgHash.ImgHashBase, "alpha" | "compute" | "scale" | "setKernelParam">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [marrHildrethHashBrand]: true;
  setKernelParam(): VoidResult;
  setKernelParam(alpha: number | StrongNumeric<SingleHost>): VoidResult;
  setKernelParam(
    alpha: number | StrongNumeric<SingleHost>,
    scale: number | StrongNumeric<SingleHost>
  ): VoidResult;
  alpha: number;
  scale: number;
  compute(inputArr: OpenCvSharp.InputArray, outputArr: OpenCvSharp.OutputArray): VoidResult;
}

declare global {
  namespace OpenCvSharp.ImgHash {
    type MarrHildrethHash = import("./MarrHildrethHash").MarrHildrethHash;
  }
}

export interface MarrHildrethHashHostType extends HostType<MarrHildrethHash, ReferenceTypeTrait> {
  create(): OpenCvSharp.ImgHash.MarrHildrethHash;
  create(alpha: number | StrongNumeric<SingleHost>): OpenCvSharp.ImgHash.MarrHildrethHash;
  create(
    alpha: number | StrongNumeric<SingleHost>,
    scale: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.ImgHash.MarrHildrethHash;
}

export {};
