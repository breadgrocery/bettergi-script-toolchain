import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "./IndexParams";

declare const linearIndexParamsBrand: unique symbol;
export interface LinearIndexParams
  extends OpenCvSharp.Flann.IndexParams, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [linearIndexParamsBrand]: true;
}

declare global {
  namespace OpenCvSharp.Flann {
    type LinearIndexParams = import("./LinearIndexParams").LinearIndexParams;
  }
}

export interface LinearIndexParamsHostType extends HostType<
  LinearIndexParams,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): LinearIndexParams;
}

export {};
