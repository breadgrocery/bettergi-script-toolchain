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

declare const compositeIndexParamsBrand: unique symbol;
export interface CompositeIndexParams
  extends OpenCvSharp.Flann.IndexParams, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [compositeIndexParamsBrand]: true;
}

declare global {
  namespace OpenCvSharp.Flann {
    type CompositeIndexParams = import("./CompositeIndexParams").CompositeIndexParams;
  }
}

export interface CompositeIndexParamsHostType extends HostType<
  CompositeIndexParams,
  ReferenceTypeTrait
> {
  new (): CompositeIndexParams;
  new (trees: number | StrongNumeric<Int32Host>): CompositeIndexParams;
  new (
    trees: number | StrongNumeric<Int32Host>,
    branching: number | StrongNumeric<Int32Host>
  ): CompositeIndexParams;
  new (
    trees: number | StrongNumeric<Int32Host>,
    branching: number | StrongNumeric<Int32Host>,
    iterations: number | StrongNumeric<Int32Host>
  ): CompositeIndexParams;
  new (
    trees: number | StrongNumeric<Int32Host>,
    branching: number | StrongNumeric<Int32Host>,
    iterations: number | StrongNumeric<Int32Host>,
    centersInit: EnumInput<OpenCvSharp.Flann.FlannCentersInit>
  ): CompositeIndexParams;
  new (
    trees: number | StrongNumeric<Int32Host>,
    branching: number | StrongNumeric<Int32Host>,
    iterations: number | StrongNumeric<Int32Host>,
    centersInit: EnumInput<OpenCvSharp.Flann.FlannCentersInit>,
    cbIndex: number | StrongNumeric<SingleHost>
  ): CompositeIndexParams;
}

export {};
