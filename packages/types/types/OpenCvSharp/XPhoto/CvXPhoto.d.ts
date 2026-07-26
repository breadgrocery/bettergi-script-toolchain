import type {
  ClrHostValue,
  DoubleHost,
  EnumInput,
  HostType,
  Int32Host,
  SingleHost,
  StaticTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Nullable";
import "../ColorConversionCodes";
import "../InputArray";
import "../InputOutputArray";
import "../Mat";
import "../NormTypes";
import "../OutputArray";
import "./Bm3dSteps";
import "./GrayworldWB";
import "./InpaintTypes";
import "./LearningBasedWB";
import "./SimpleWB";
import "./TransformTypes";

declare const cvXPhotoBrand: unique symbol;
export interface CvXPhoto extends ClrHostValue {
  readonly [cvXPhotoBrand]: true;
}

declare global {
  namespace OpenCvSharp.XPhoto {
    type CvXPhoto = import("./CvXPhoto").CvXPhoto;
  }
}

export interface CvXPhotoHostType extends HostType<CvXPhoto, StaticTypeTrait> {
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dstStep1: OpenCvSharp.InputOutputArray,
    dstStep2: OpenCvSharp.OutputArray
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dstStep1: OpenCvSharp.InputOutputArray,
    dstStep2: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dstStep1: OpenCvSharp.InputOutputArray,
    dstStep2: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dstStep1: OpenCvSharp.InputOutputArray,
    dstStep2: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dstStep1: OpenCvSharp.InputOutputArray,
    dstStep2: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dstStep1: OpenCvSharp.InputOutputArray,
    dstStep2: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dstStep1: OpenCvSharp.InputOutputArray,
    dstStep2: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dstStep1: OpenCvSharp.InputOutputArray,
    dstStep2: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>,
    slidingStep: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dstStep1: OpenCvSharp.InputOutputArray,
    dstStep2: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>,
    slidingStep: number | StrongNumeric<Int32Host>,
    beta: number | StrongNumeric<SingleHost>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dstStep1: OpenCvSharp.InputOutputArray,
    dstStep2: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>,
    slidingStep: number | StrongNumeric<Int32Host>,
    beta: number | StrongNumeric<SingleHost>,
    normType: EnumInput<OpenCvSharp.NormTypes>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dstStep1: OpenCvSharp.InputOutputArray,
    dstStep2: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>,
    slidingStep: number | StrongNumeric<Int32Host>,
    beta: number | StrongNumeric<SingleHost>,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    step: EnumInput<OpenCvSharp.XPhoto.Bm3dSteps>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dstStep1: OpenCvSharp.InputOutputArray,
    dstStep2: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>,
    slidingStep: number | StrongNumeric<Int32Host>,
    beta: number | StrongNumeric<SingleHost>,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    step: EnumInput<OpenCvSharp.XPhoto.Bm3dSteps>,
    transformType: EnumInput<OpenCvSharp.XPhoto.TransformTypes>
  ): VoidResult;
  bm3dDenoising(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>,
    slidingStep: number | StrongNumeric<Int32Host>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>,
    slidingStep: number | StrongNumeric<Int32Host>,
    beta: number | StrongNumeric<SingleHost>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>,
    slidingStep: number | StrongNumeric<Int32Host>,
    beta: number | StrongNumeric<SingleHost>,
    normType: EnumInput<OpenCvSharp.NormTypes>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>,
    slidingStep: number | StrongNumeric<Int32Host>,
    beta: number | StrongNumeric<SingleHost>,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    step: EnumInput<OpenCvSharp.XPhoto.Bm3dSteps>
  ): VoidResult;
  bm3dDenoising(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    h: number | StrongNumeric<SingleHost>,
    templateWindowSize: number | StrongNumeric<Int32Host>,
    searchWindowSize: number | StrongNumeric<Int32Host>,
    blockMatchingStep1: number | StrongNumeric<Int32Host>,
    blockMatchingStep2: number | StrongNumeric<Int32Host>,
    groupSize: number | StrongNumeric<Int32Host>,
    slidingStep: number | StrongNumeric<Int32Host>,
    beta: number | StrongNumeric<SingleHost>,
    normType: EnumInput<OpenCvSharp.NormTypes>,
    step: EnumInput<OpenCvSharp.XPhoto.Bm3dSteps>,
    transformType: EnumInput<OpenCvSharp.XPhoto.TransformTypes>
  ): VoidResult;
  dctDenoising(
    src: OpenCvSharp.Mat,
    dst: OpenCvSharp.Mat,
    sigma: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  dctDenoising(
    src: OpenCvSharp.Mat,
    dst: OpenCvSharp.Mat,
    sigma: number | StrongNumeric<DoubleHost>,
    psize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  inpaint(
    src: OpenCvSharp.Mat,
    mask: OpenCvSharp.Mat,
    dst: OpenCvSharp.Mat,
    algorithm: EnumInput<OpenCvSharp.XPhoto.InpaintTypes>
  ): VoidResult;
  oilPainting(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    size: number | StrongNumeric<Int32Host>,
    dynRatio: number | StrongNumeric<Int32Host>
  ): VoidResult;
  oilPainting(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    size: number | StrongNumeric<Int32Host>,
    dynRatio: number | StrongNumeric<Int32Host>,
    code: EnumInput<OpenCvSharp.ColorConversionCodes> | null | null
  ): VoidResult;
  applyChannelGains(
    src: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray,
    gainB: number | StrongNumeric<SingleHost>,
    gainG: number | StrongNumeric<SingleHost>,
    gainR: number | StrongNumeric<SingleHost>
  ): VoidResult;
  createGrayworldWB(): OpenCvSharp.XPhoto.GrayworldWB;
  createLearningBasedWB(model: string | null): OpenCvSharp.XPhoto.LearningBasedWB;
  createSimpleWB(): OpenCvSharp.XPhoto.SimpleWB;
}

export {};
