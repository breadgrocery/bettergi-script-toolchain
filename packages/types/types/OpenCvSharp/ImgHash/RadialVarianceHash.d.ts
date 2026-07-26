import type {
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";
import "./ImgHashBase";

declare const radialVarianceHashBrand: unique symbol;
export interface RadialVarianceHash
  extends
    Omit<OpenCvSharp.ImgHash.ImgHashBase, "compute" | "numOfAngleLine" | "sigma">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [radialVarianceHashBrand]: true;
  sigma: number;
  numOfAngleLine: number;
  compute(inputArr: OpenCvSharp.InputArray, outputArr: OpenCvSharp.OutputArray): VoidResult;
}

declare global {
  namespace OpenCvSharp.ImgHash {
    type RadialVarianceHash = import("./RadialVarianceHash").RadialVarianceHash;
  }
}

export interface RadialVarianceHashHostType extends HostType<
  RadialVarianceHash,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.ImgHash.RadialVarianceHash;
  create(sigma: number | StrongNumeric<DoubleHost>): OpenCvSharp.ImgHash.RadialVarianceHash;
  create(
    sigma: number | StrongNumeric<DoubleHost>,
    numOfAngleLine: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.ImgHash.RadialVarianceHash;
}

export {};
