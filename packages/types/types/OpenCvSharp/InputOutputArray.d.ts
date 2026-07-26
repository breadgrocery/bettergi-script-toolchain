import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./ICvPtrHolder";
import "./Mat";
import "./OutputArray";
import "./UMat";

declare const inputOutputArrayBrand: unique symbol;
export interface InputOutputArray
  extends OpenCvSharp.OutputArray, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [inputOutputArrayBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type InputOutputArray = import("./InputOutputArray").InputOutputArray;
  }
}

export interface InputOutputArrayHostType extends HostType<InputOutputArray, ReferenceTypeTrait> {
  create(mat: OpenCvSharp.Mat): OpenCvSharp.InputOutputArray;
  create(mat: OpenCvSharp.UMat): OpenCvSharp.InputOutputArray;
}

export {};
