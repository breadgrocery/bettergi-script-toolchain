import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "../Mat";
import "../TermCriteria";
import "./DTrees";

declare const rTreesBrand: unique symbol;
export interface RTrees
  extends
    Omit<
      OpenCvSharp.ML.DTrees,
      "activeVarCount" | "calculateVarImportance" | "getVarImportance" | "termCriteria"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [rTreesBrand]: true;
  calculateVarImportance: boolean;
  activeVarCount: number;
  termCriteria: OpenCvSharp.TermCriteria;
  getVarImportance(): OpenCvSharp.Mat;
}

declare global {
  namespace OpenCvSharp.ML {
    type RTrees = import("./RTrees").RTrees;
  }
}

export interface RTreesHostType extends HostType<RTrees, ReferenceTypeTrait> {
  create(): OpenCvSharp.ML.RTrees;
  load(filePath: string): OpenCvSharp.ML.RTrees;
  loadFromString(strModel: string): OpenCvSharp.ML.RTrees;
}

export {};
