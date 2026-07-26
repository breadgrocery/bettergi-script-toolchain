import type {
  EnumInput,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "./FlannCentersInit";
import "./IndexParams";

declare const kMeansIndexParamsBrand: unique symbol;
export interface KMeansIndexParams
  extends OpenCvSharp.Flann.IndexParams, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [kMeansIndexParamsBrand]: true;
}

declare global {
  namespace OpenCvSharp.Flann {
    type KMeansIndexParams = import("./KMeansIndexParams").KMeansIndexParams;
  }
}

export interface KMeansIndexParamsHostType extends HostType<KMeansIndexParams, ReferenceTypeTrait> {
  new (): KMeansIndexParams;
  new (branching: number | StrongNumeric<Int32Host>): KMeansIndexParams;
  new (
    branching: number | StrongNumeric<Int32Host>,
    iterations: number | StrongNumeric<Int32Host>
  ): KMeansIndexParams;
  new (
    branching: number | StrongNumeric<Int32Host>,
    iterations: number | StrongNumeric<Int32Host>,
    centersInit: EnumInput<OpenCvSharp.Flann.FlannCentersInit>
  ): KMeansIndexParams;
  new (
    branching: number | StrongNumeric<Int32Host>,
    iterations: number | StrongNumeric<Int32Host>,
    centersInit: EnumInput<OpenCvSharp.Flann.FlannCentersInit>,
    cbIndex: number | StrongNumeric<SingleHost>
  ): KMeansIndexParams;
}

export {};
