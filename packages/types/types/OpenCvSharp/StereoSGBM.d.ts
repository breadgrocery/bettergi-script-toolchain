import type {
  ClrHostValue,
  EnumInput,
  EnumTypeTrait,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IDisposable";
import "../System/IFormattable";
import "../System/ISpanFormattable";
import "./ICvPtrHolder";
import "./StereoMatcher";

declare const stereoSGBMBrand: unique symbol;
export interface StereoSGBM
  extends
    Omit<OpenCvSharp.StereoMatcher, "mode" | "p1" | "p2" | "preFilterCap" | "uniquenessRatio">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [stereoSGBMBrand]: true;
  preFilterCap: number;
  uniquenessRatio: number;
  p1: number;
  p2: number;
  mode: OpenCvSharp.StereoSGBMMode;
}

declare global {
  namespace OpenCvSharp {
    type StereoSGBM = import("./StereoSGBM").StereoSGBM;
  }
}

export interface StereoSGBMHostType extends HostType<StereoSGBM, ReferenceTypeTrait> {
  create(
    minDisparity: number | StrongNumeric<Int32Host>,
    numDisparities: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.StereoSGBM;
  create(
    minDisparity: number | StrongNumeric<Int32Host>,
    numDisparities: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>,
    p1: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.StereoSGBM;
  create(
    minDisparity: number | StrongNumeric<Int32Host>,
    numDisparities: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>,
    p1: number | StrongNumeric<Int32Host>,
    p2: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.StereoSGBM;
  create(
    minDisparity: number | StrongNumeric<Int32Host>,
    numDisparities: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>,
    p1: number | StrongNumeric<Int32Host>,
    p2: number | StrongNumeric<Int32Host>,
    disp12MaxDiff: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.StereoSGBM;
  create(
    minDisparity: number | StrongNumeric<Int32Host>,
    numDisparities: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>,
    p1: number | StrongNumeric<Int32Host>,
    p2: number | StrongNumeric<Int32Host>,
    disp12MaxDiff: number | StrongNumeric<Int32Host>,
    preFilterCap: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.StereoSGBM;
  create(
    minDisparity: number | StrongNumeric<Int32Host>,
    numDisparities: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>,
    p1: number | StrongNumeric<Int32Host>,
    p2: number | StrongNumeric<Int32Host>,
    disp12MaxDiff: number | StrongNumeric<Int32Host>,
    preFilterCap: number | StrongNumeric<Int32Host>,
    uniquenessRatio: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.StereoSGBM;
  create(
    minDisparity: number | StrongNumeric<Int32Host>,
    numDisparities: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>,
    p1: number | StrongNumeric<Int32Host>,
    p2: number | StrongNumeric<Int32Host>,
    disp12MaxDiff: number | StrongNumeric<Int32Host>,
    preFilterCap: number | StrongNumeric<Int32Host>,
    uniquenessRatio: number | StrongNumeric<Int32Host>,
    speckleWindowSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.StereoSGBM;
  create(
    minDisparity: number | StrongNumeric<Int32Host>,
    numDisparities: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>,
    p1: number | StrongNumeric<Int32Host>,
    p2: number | StrongNumeric<Int32Host>,
    disp12MaxDiff: number | StrongNumeric<Int32Host>,
    preFilterCap: number | StrongNumeric<Int32Host>,
    uniquenessRatio: number | StrongNumeric<Int32Host>,
    speckleWindowSize: number | StrongNumeric<Int32Host>,
    speckleRange: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.StereoSGBM;
  create(
    minDisparity: number | StrongNumeric<Int32Host>,
    numDisparities: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>,
    p1: number | StrongNumeric<Int32Host>,
    p2: number | StrongNumeric<Int32Host>,
    disp12MaxDiff: number | StrongNumeric<Int32Host>,
    preFilterCap: number | StrongNumeric<Int32Host>,
    uniquenessRatio: number | StrongNumeric<Int32Host>,
    speckleWindowSize: number | StrongNumeric<Int32Host>,
    speckleRange: number | StrongNumeric<Int32Host>,
    mode: EnumInput<OpenCvSharp.StereoSGBMMode>
  ): OpenCvSharp.StereoSGBM;
}

declare const stereoSGBMModeBrand: unique symbol;
export interface StereoSGBMMode extends ClrHostValue {
  readonly [stereoSGBMModeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type StereoSGBMMode = import("./StereoSGBM").StereoSGBMMode;
  }
}

export interface StereoSGBMModeHostType extends HostType<StereoSGBMMode, EnumTypeTrait> {
  readonly sgbm: StereoSGBMMode;
  readonly hh: StereoSGBMMode;
}

export {};
