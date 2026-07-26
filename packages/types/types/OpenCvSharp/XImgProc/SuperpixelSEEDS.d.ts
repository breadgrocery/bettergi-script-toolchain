import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../Algorithm";
import "../ICvPtrHolder";
import "../InputArray";
import "../OutputArray";

declare const superpixelSEEDSBrand: unique symbol;
export interface SuperpixelSEEDS
  extends
    Omit<
      OpenCvSharp.Algorithm,
      "getLabelContourMask" | "getLabels" | "getNumberOfSuperpixels" | "iterate"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [superpixelSEEDSBrand]: true;
  getNumberOfSuperpixels(): number;
  iterate(img: OpenCvSharp.InputArray): VoidResult;
  iterate(
    img: OpenCvSharp.InputArray,
    numIterations: number | StrongNumeric<Int32Host>
  ): VoidResult;
  getLabels(labelsOut: OpenCvSharp.OutputArray): VoidResult;
  getLabelContourMask(image: OpenCvSharp.OutputArray): VoidResult;
  getLabelContourMask(image: OpenCvSharp.OutputArray, thickLine: boolean): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type SuperpixelSEEDS = import("./SuperpixelSEEDS").SuperpixelSEEDS;
  }
}

export interface SuperpixelSEEDSHostType extends HostType<SuperpixelSEEDS, ReferenceTypeTrait> {
  create(
    imageWidth: number | StrongNumeric<Int32Host>,
    imageHeight: number | StrongNumeric<Int32Host>,
    imageChannels: number | StrongNumeric<Int32Host>,
    numSuperpixels: number | StrongNumeric<Int32Host>,
    numLevels: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.SuperpixelSEEDS;
  create(
    imageWidth: number | StrongNumeric<Int32Host>,
    imageHeight: number | StrongNumeric<Int32Host>,
    imageChannels: number | StrongNumeric<Int32Host>,
    numSuperpixels: number | StrongNumeric<Int32Host>,
    numLevels: number | StrongNumeric<Int32Host>,
    prior: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.SuperpixelSEEDS;
  create(
    imageWidth: number | StrongNumeric<Int32Host>,
    imageHeight: number | StrongNumeric<Int32Host>,
    imageChannels: number | StrongNumeric<Int32Host>,
    numSuperpixels: number | StrongNumeric<Int32Host>,
    numLevels: number | StrongNumeric<Int32Host>,
    prior: number | StrongNumeric<Int32Host>,
    histogramBins: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.SuperpixelSEEDS;
  create(
    imageWidth: number | StrongNumeric<Int32Host>,
    imageHeight: number | StrongNumeric<Int32Host>,
    imageChannels: number | StrongNumeric<Int32Host>,
    numSuperpixels: number | StrongNumeric<Int32Host>,
    numLevels: number | StrongNumeric<Int32Host>,
    prior: number | StrongNumeric<Int32Host>,
    histogramBins: number | StrongNumeric<Int32Host>,
    doubleStep: boolean
  ): OpenCvSharp.XImgProc.SuperpixelSEEDS;
}

export {};
