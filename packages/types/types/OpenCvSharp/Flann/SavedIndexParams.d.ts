import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "./IndexParams";

declare const savedIndexParamsBrand: unique symbol;
export interface SavedIndexParams
  extends OpenCvSharp.Flann.IndexParams, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [savedIndexParamsBrand]: true;
}

declare global {
  namespace OpenCvSharp.Flann {
    type SavedIndexParams = import("./SavedIndexParams").SavedIndexParams;
  }
}

export interface SavedIndexParamsHostType extends HostType<SavedIndexParams, ReferenceTypeTrait> {
  new (fileName: string): SavedIndexParams;
}

export {};
