import type {
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "./IndexParams";

declare const autotunedIndexParamsBrand: unique symbol;
export interface AutotunedIndexParams
  extends OpenCvSharp.Flann.IndexParams, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [autotunedIndexParamsBrand]: true;
}

declare global {
  namespace OpenCvSharp.Flann {
    type AutotunedIndexParams = import("./AutotunedIndexParams").AutotunedIndexParams;
  }
}

export interface AutotunedIndexParamsHostType extends HostType<
  AutotunedIndexParams,
  ReferenceTypeTrait
> {
  new (): AutotunedIndexParams;
  new (targetPrecision: number | StrongNumeric<SingleHost>): AutotunedIndexParams;
  new (
    targetPrecision: number | StrongNumeric<SingleHost>,
    buildWeight: number | StrongNumeric<SingleHost>
  ): AutotunedIndexParams;
  new (
    targetPrecision: number | StrongNumeric<SingleHost>,
    buildWeight: number | StrongNumeric<SingleHost>,
    memoryWeight: number | StrongNumeric<SingleHost>
  ): AutotunedIndexParams;
  new (
    targetPrecision: number | StrongNumeric<SingleHost>,
    buildWeight: number | StrongNumeric<SingleHost>,
    memoryWeight: number | StrongNumeric<SingleHost>,
    sampleFraction: number | StrongNumeric<SingleHost>
  ): AutotunedIndexParams;
}

export {};
