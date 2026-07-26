import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../Algorithm";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";

declare const superpixelLSCBrand: unique symbol;
export interface SuperpixelLSC
  extends
    Omit<
      OpenCvSharp.Algorithm,
      | "enforceLabelConnectivity"
      | "getLabelContourMask"
      | "getLabels"
      | "getNumberOfSuperpixels"
      | "iterate"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [superpixelLSCBrand]: true;
  getNumberOfSuperpixels(): number;
  iterate(): VoidResult;
  iterate(numIterations: number | StrongNumeric<Int32Host>): VoidResult;
  getLabels(labelsOut: OpenCvSharp.OutputArray): VoidResult;
  getLabelContourMask(image: OpenCvSharp.OutputArray): VoidResult;
  getLabelContourMask(image: OpenCvSharp.OutputArray, thickLine: boolean): VoidResult;
  enforceLabelConnectivity(): VoidResult;
  enforceLabelConnectivity(minElementSize: number | StrongNumeric<Int32Host>): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type SuperpixelLSC = import("./SuperpixelLSC").SuperpixelLSC;
  }
}

export interface SuperpixelLSCHostType extends HostType<SuperpixelLSC, ReferenceTypeTrait> {
  create(image: OpenCvSharp.InputArray): OpenCvSharp.XImgProc.SuperpixelLSC;
  create(
    image: OpenCvSharp.InputArray,
    regionSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.SuperpixelLSC;
  create(
    image: OpenCvSharp.InputArray,
    regionSize: number | StrongNumeric<Int32Host>,
    ratio: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.SuperpixelLSC;
}

export {};
