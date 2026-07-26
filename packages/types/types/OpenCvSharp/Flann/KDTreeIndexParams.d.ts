import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "./IndexParams";

declare const kDTreeIndexParamsBrand: unique symbol;
export interface KDTreeIndexParams
  extends OpenCvSharp.Flann.IndexParams, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [kDTreeIndexParamsBrand]: true;
}

declare global {
  namespace OpenCvSharp.Flann {
    type KDTreeIndexParams = import("./KDTreeIndexParams").KDTreeIndexParams;
  }
}

export interface KDTreeIndexParamsHostType extends HostType<KDTreeIndexParams, ReferenceTypeTrait> {
  new (): KDTreeIndexParams;
  new (trees: number | StrongNumeric<Int32Host>): KDTreeIndexParams;
}

export {};
