import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/ValueType";

declare const lSDParamBrand: unique symbol;
export interface LSDParam extends ClrHostValue {
  readonly [lSDParamBrand]: true;
  readonly scale: number;
  readonly sigmaScale: number;
  readonly quant: number;
  readonly angTh: number;
  readonly logEps: number;
  readonly densityTh: number;
  readonly nBins: number;
}

declare global {
  namespace OpenCvSharp.LineDescriptor {
    type LSDParam = import("./LSDParam").LSDParam;
  }
}

export interface LSDParamHostType extends HostType<LSDParam, ValueTypeTrait> {
  new (): LSDParam;
  new (scale: number | StrongNumeric<DoubleHost>): LSDParam;
  new (
    scale: number | StrongNumeric<DoubleHost>,
    sigmaScale: number | StrongNumeric<DoubleHost>
  ): LSDParam;
  new (
    scale: number | StrongNumeric<DoubleHost>,
    sigmaScale: number | StrongNumeric<DoubleHost>,
    quant: number | StrongNumeric<DoubleHost>
  ): LSDParam;
  new (
    scale: number | StrongNumeric<DoubleHost>,
    sigmaScale: number | StrongNumeric<DoubleHost>,
    quant: number | StrongNumeric<DoubleHost>,
    angTh: number | StrongNumeric<DoubleHost>
  ): LSDParam;
  new (
    scale: number | StrongNumeric<DoubleHost>,
    sigmaScale: number | StrongNumeric<DoubleHost>,
    quant: number | StrongNumeric<DoubleHost>,
    angTh: number | StrongNumeric<DoubleHost>,
    logEps: number | StrongNumeric<DoubleHost>
  ): LSDParam;
  new (
    scale: number | StrongNumeric<DoubleHost>,
    sigmaScale: number | StrongNumeric<DoubleHost>,
    quant: number | StrongNumeric<DoubleHost>,
    angTh: number | StrongNumeric<DoubleHost>,
    logEps: number | StrongNumeric<DoubleHost>,
    densityTh: number | StrongNumeric<DoubleHost>
  ): LSDParam;
  new (
    scale: number | StrongNumeric<DoubleHost>,
    sigmaScale: number | StrongNumeric<DoubleHost>,
    quant: number | StrongNumeric<DoubleHost>,
    angTh: number | StrongNumeric<DoubleHost>,
    logEps: number | StrongNumeric<DoubleHost>,
    densityTh: number | StrongNumeric<DoubleHost>,
    nBins: number | StrongNumeric<Int32Host>
  ): LSDParam;
}

export {};
