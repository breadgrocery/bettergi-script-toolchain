import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/ValueType";

declare const paramGridBrand: unique symbol;
export interface ParamGrid extends ClrHostValue {
  readonly [paramGridBrand]: true;
  minVal: number;
  maxVal: number;
  logStep: number;
}

declare global {
  namespace OpenCvSharp.ML {
    type ParamGrid = import("./ParamGrid").ParamGrid;
  }
}

export interface ParamGridHostType extends HostType<ParamGrid, ValueTypeTrait> {
  new (
    minVal: number | StrongNumeric<DoubleHost>,
    maxVal: number | StrongNumeric<DoubleHost>,
    logStep: number | StrongNumeric<DoubleHost>
  ): ParamGrid;
}

export {};
