import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./CalibrateCRF";
import "./ICvPtrHolder";

declare const calibrateDebevecBrand: unique symbol;
export interface CalibrateDebevec
  extends
    Omit<OpenCvSharp.CalibrateCRF, "lambda" | "random" | "samples">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [calibrateDebevecBrand]: true;
  lambda: number;
  samples: number;
  random: boolean;
}

declare global {
  namespace OpenCvSharp {
    type CalibrateDebevec = import("./CalibrateDebevec").CalibrateDebevec;
  }
}

export interface CalibrateDebevecHostType extends HostType<CalibrateDebevec, ReferenceTypeTrait> {
  create(): OpenCvSharp.CalibrateDebevec;
  create(samples: number | StrongNumeric<Int32Host>): OpenCvSharp.CalibrateDebevec;
  create(
    samples: number | StrongNumeric<Int32Host>,
    lambda: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.CalibrateDebevec;
  create(
    samples: number | StrongNumeric<Int32Host>,
    lambda: number | StrongNumeric<SingleHost>,
    random: boolean
  ): OpenCvSharp.CalibrateDebevec;
}

export {};
