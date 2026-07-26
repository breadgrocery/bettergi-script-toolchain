import type {
  ClrHostValue,
  EnumInput,
  EnumTypeTrait,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "../System/Collections/Generic/IEnumerable";
import "../System/Collections/Generic/IReadOnlyList";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IDisposable";
import "../System/IFormattable";
import "../System/ISpanFormattable";
import "./Detail/Stitcher";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./InputArray";
import "./Mat";
import "./OutputArray";
import "./Rect";

declare const stitcherBrand: unique symbol;
export interface Stitcher
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "component"
      | "composePanorama"
      | "compositingResol"
      | "estimateTransform"
      | "panoConfidenceThresh"
      | "registrationResol"
      | "seamEstimationResol"
      | "stitch"
      | "waveCorrectKind"
      | "waveCorrection"
      | "workScale"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [stitcherBrand]: true;
  registrationResol: number;
  seamEstimationResol: number;
  compositingResol: number;
  panoConfidenceThresh: number;
  waveCorrection: boolean;
  waveCorrectKind: OpenCvSharp.Detail.WaveCorrectKind;
  readonly component: System.Collections.Generic.IReadOnlyList<number>;
  readonly workScale: number;
  estimateTransform(images: OpenCvSharp.InputArray): Stitcher_Status;
  estimateTransform(
    images: OpenCvSharp.InputArray,
    rois: HostArray<HostArray<OpenCvSharp.Rect>>
  ): Stitcher_Status;
  estimateTransform(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>
  ): Stitcher_Status;
  estimateTransform(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    rois: HostArray<HostArray<OpenCvSharp.Rect>>
  ): Stitcher_Status;
  composePanorama(images: OpenCvSharp.InputArray, pano: OpenCvSharp.OutputArray): Stitcher_Status;
  composePanorama(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    pano: OpenCvSharp.OutputArray
  ): Stitcher_Status;
  composePanorama(pano: OpenCvSharp.OutputArray): Stitcher_Status;
  stitch(images: OpenCvSharp.InputArray, pano: OpenCvSharp.OutputArray): Stitcher_Status;
  stitch(
    images: OpenCvSharp.InputArray,
    rois: HostArray<HostArray<OpenCvSharp.Rect>>,
    pano: OpenCvSharp.OutputArray
  ): Stitcher_Status;
  stitch(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    pano: OpenCvSharp.OutputArray
  ): Stitcher_Status;
  stitch(
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    rois: HostArray<HostArray<OpenCvSharp.Rect>>,
    pano: OpenCvSharp.OutputArray
  ): Stitcher_Status;
}

declare const stitcher_StatusBrand: unique symbol;
export interface Stitcher_Status extends ClrHostValue {
  readonly [stitcher_StatusBrand]: true;
}

export interface Stitcher_StatusHostType extends HostType<Stitcher_Status, EnumTypeTrait> {
  readonly ok: Stitcher_Status;
  readonly errorNeedMoreImgs: Stitcher_Status;
  readonly errorHomographyEstFail: Stitcher_Status;
  readonly errorCameraParamsAdjustFail: Stitcher_Status;
}

declare global {
  namespace OpenCvSharp.Stitcher {
    type Status = import("./Stitcher").Stitcher_Status;
  }
}

declare const stitcher_ModeBrand: unique symbol;
export interface Stitcher_Mode extends ClrHostValue {
  readonly [stitcher_ModeBrand]: true;
}

export interface Stitcher_ModeHostType extends HostType<Stitcher_Mode, EnumTypeTrait> {
  readonly panorama: Stitcher_Mode;
  readonly scans: Stitcher_Mode;
}

declare global {
  namespace OpenCvSharp.Stitcher {
    type Mode = import("./Stitcher").Stitcher_Mode;
  }
}

declare global {
  namespace OpenCvSharp {
    type Stitcher = import("./Stitcher").Stitcher;
  }
}

export interface StitcherHostType extends HostType<Stitcher, ReferenceTypeTrait> {
  readonly oriG_RESOL: number;
  create(): OpenCvSharp.Stitcher;
  create(mode: EnumInput<Stitcher_Mode>): OpenCvSharp.Stitcher;
  readonly Status: Stitcher_StatusHostType;
  readonly Mode: Stitcher_ModeHostType;
}

export {};
