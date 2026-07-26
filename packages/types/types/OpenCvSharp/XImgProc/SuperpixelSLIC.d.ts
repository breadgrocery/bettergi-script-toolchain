import type {
  EnumInput,
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
import "./SLICType";

declare const superpixelSLICBrand: unique symbol;
export interface SuperpixelSLIC
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
  readonly [superpixelSLICBrand]: true;
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
    type SuperpixelSLIC = import("./SuperpixelSLIC").SuperpixelSLIC;
  }
}

export interface SuperpixelSLICHostType extends HostType<SuperpixelSLIC, ReferenceTypeTrait> {
  create(image: OpenCvSharp.InputArray): OpenCvSharp.XImgProc.SuperpixelSLIC;
  create(
    image: OpenCvSharp.InputArray,
    algorithm: EnumInput<OpenCvSharp.XImgProc.SLICType>
  ): OpenCvSharp.XImgProc.SuperpixelSLIC;
  create(
    image: OpenCvSharp.InputArray,
    algorithm: EnumInput<OpenCvSharp.XImgProc.SLICType>,
    regionSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.SuperpixelSLIC;
  create(
    image: OpenCvSharp.InputArray,
    algorithm: EnumInput<OpenCvSharp.XImgProc.SLICType>,
    regionSize: number | StrongNumeric<Int32Host>,
    ruler: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.SuperpixelSLIC;
}

export {};
