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
import "./Mat";

declare const calibrateRobertsonBrand: unique symbol;
export interface CalibrateRobertson
  extends
    Omit<OpenCvSharp.CalibrateCRF, "maxIter" | "radiance" | "threshold">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [calibrateRobertsonBrand]: true;
  maxIter: number;
  threshold: number;
  readonly radiance: OpenCvSharp.Mat;
}

declare global {
  namespace OpenCvSharp {
    type CalibrateRobertson = import("./CalibrateRobertson").CalibrateRobertson;
  }
}

export interface CalibrateRobertsonHostType extends HostType<
  CalibrateRobertson,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.CalibrateRobertson;
  create(maxIter: number | StrongNumeric<Int32Host>): OpenCvSharp.CalibrateRobertson;
  create(
    maxIter: number | StrongNumeric<Int32Host>,
    threshold: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.CalibrateRobertson;
}

export {};
