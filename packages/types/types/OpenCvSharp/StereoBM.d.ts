import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./ICvPtrHolder";
import "./Rect";
import "./StereoMatcher";

declare const stereoBMBrand: unique symbol;
export interface StereoBM
  extends
    Omit<
      OpenCvSharp.StereoMatcher,
      | "preFilterCap"
      | "preFilterSize"
      | "preFilterType"
      | "roI1"
      | "roI2"
      | "smallerBlockSize"
      | "textureThreshold"
      | "uniquenessRatio"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [stereoBMBrand]: true;
  preFilterType: number;
  preFilterSize: number;
  preFilterCap: number;
  textureThreshold: number;
  uniquenessRatio: number;
  smallerBlockSize: number;
  roI1: OpenCvSharp.Rect;
  roI2: OpenCvSharp.Rect;
}

declare global {
  namespace OpenCvSharp {
    type StereoBM = import("./StereoBM").StereoBM;
  }
}

export interface StereoBMHostType extends HostType<StereoBM, ReferenceTypeTrait> {
  create(): OpenCvSharp.StereoBM;
  create(numDisparities: number | StrongNumeric<Int32Host>): OpenCvSharp.StereoBM;
  create(
    numDisparities: number | StrongNumeric<Int32Host>,
    blockSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.StereoBM;
}

export {};
