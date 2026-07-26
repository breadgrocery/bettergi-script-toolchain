import type {
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./Feature2D";
import "./ICvPtrHolder";

declare const gFTTDetectorBrand: unique symbol;
export interface GFTTDetector
  extends
    Omit<
      OpenCvSharp.Feature2D,
      "blockSize" | "harrisDetector" | "k" | "maxFeatures" | "minDistance" | "qualityLevel"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [gFTTDetectorBrand]: true;
  maxFeatures: number;
  qualityLevel: number;
  minDistance: number;
  blockSize: number;
  harrisDetector: boolean;
  k: number;
}

declare global {
  namespace OpenCvSharp {
    type GFTTDetector = import("./GFTTDetector").GFTTDetector;
  }
}

export interface GFTTDetectorHostType extends HostType<GFTTDetector, ReferenceTypeTrait> {
  create(): OpenCvSharp.GFTTDetector;
  create(maxCorners: number | StrongNumeric<Int32Host>): OpenCvSharp.GFTTDetector;
  create(
    maxCorners: number | StrongNumeric<Int32Host>,
    qualityLevel: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.GFTTDetector;
  create(
    maxCorners: number | StrongNumeric<Int32Host>,
    qualityLevel: number | StrongNumeric<DoubleHost>,
    minDistance: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.GFTTDetector;
  create(
    maxCorners: number | StrongNumeric<Int32Host>,
    qualityLevel: number | StrongNumeric<DoubleHost>,
    minDistance: number | StrongNumeric<DoubleHost>,
    blockSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.GFTTDetector;
  create(
    maxCorners: number | StrongNumeric<Int32Host>,
    qualityLevel: number | StrongNumeric<DoubleHost>,
    minDistance: number | StrongNumeric<DoubleHost>,
    blockSize: number | StrongNumeric<Int32Host>,
    useHarrisDetector: boolean
  ): OpenCvSharp.GFTTDetector;
  create(
    maxCorners: number | StrongNumeric<Int32Host>,
    qualityLevel: number | StrongNumeric<DoubleHost>,
    minDistance: number | StrongNumeric<DoubleHost>,
    blockSize: number | StrongNumeric<Int32Host>,
    useHarrisDetector: boolean,
    k: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.GFTTDetector;
}

export {};
