import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/Collections/Generic/List";
import "../System/IDisposable";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./Mat";
import "./OutputArrayOfMatList";
import "./OutputArrayOfStructList";
import "./UMat";

declare const outputArrayBrand: unique symbol;
export interface OutputArray
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "assignResult"
      | "fix"
      | "getMat"
      | "getVectorOfMat"
      | "isMat"
      | "isReady"
      | "isUMat"
      | "isVectorOfMat"
      | "throwIfNotReady"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [outputArrayBrand]: true;
  isMat(): boolean;
  isUMat(): boolean;
  getMat(): OpenCvSharp.Mat;
  isVectorOfMat(): boolean;
  getVectorOfMat(): System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>;
  assignResult(): VoidResult;
  fix(): VoidResult;
  isReady(): boolean;
  throwIfNotReady(): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type OutputArray = import("./OutputArray").OutputArray;
  }
}

export interface OutputArrayHostType extends HostType<OutputArray, ReferenceTypeTrait> {
  create(mat: OpenCvSharp.Mat): OpenCvSharp.OutputArray;
  create(mat: OpenCvSharp.UMat): OpenCvSharp.OutputArray;
  create<T>(
    type1: HostType<T>,
    list: System.Collections.Generic.List<T>
  ): OpenCvSharp.OutputArrayOfStructList<T>;
  create(list: System.Collections.Generic.List<OpenCvSharp.Mat>): OpenCvSharp.OutputArrayOfMatList;
}

export {};
