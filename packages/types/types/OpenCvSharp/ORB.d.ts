import type {
  EnumInput,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./Feature2D";
import "./ICvPtrHolder";
import "./ORBScoreType";

declare const oRBBrand: unique symbol;
export interface ORB
  extends
    Omit<
      OpenCvSharp.Feature2D,
      | "edgeThreshold"
      | "fastThreshold"
      | "firstLevel"
      | "maxFeatures"
      | "nLevels"
      | "patchSize"
      | "scaleFactor"
      | "scoreType"
      | "wtA_K"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [oRBBrand]: true;
  maxFeatures: number;
  scaleFactor: number;
  nLevels: number;
  edgeThreshold: number;
  firstLevel: number;
  wtA_K: number;
  scoreType: OpenCvSharp.ORBScoreType;
  patchSize: number;
  fastThreshold: number;
}

declare global {
  namespace OpenCvSharp {
    type ORB = import("./ORB").ORB;
  }
}

export interface ORBHostType extends HostType<ORB, ReferenceTypeTrait> {
  create(): OpenCvSharp.ORB;
  create(nFeatures: number | StrongNumeric<Int32Host>): OpenCvSharp.ORB;
  create(
    nFeatures: number | StrongNumeric<Int32Host>,
    scaleFactor: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.ORB;
  create(
    nFeatures: number | StrongNumeric<Int32Host>,
    scaleFactor: number | StrongNumeric<SingleHost>,
    nLevels: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.ORB;
  create(
    nFeatures: number | StrongNumeric<Int32Host>,
    scaleFactor: number | StrongNumeric<SingleHost>,
    nLevels: number | StrongNumeric<Int32Host>,
    edgeThreshold: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.ORB;
  create(
    nFeatures: number | StrongNumeric<Int32Host>,
    scaleFactor: number | StrongNumeric<SingleHost>,
    nLevels: number | StrongNumeric<Int32Host>,
    edgeThreshold: number | StrongNumeric<Int32Host>,
    firstLevel: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.ORB;
  create(
    nFeatures: number | StrongNumeric<Int32Host>,
    scaleFactor: number | StrongNumeric<SingleHost>,
    nLevels: number | StrongNumeric<Int32Host>,
    edgeThreshold: number | StrongNumeric<Int32Host>,
    firstLevel: number | StrongNumeric<Int32Host>,
    wtaK: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.ORB;
  create(
    nFeatures: number | StrongNumeric<Int32Host>,
    scaleFactor: number | StrongNumeric<SingleHost>,
    nLevels: number | StrongNumeric<Int32Host>,
    edgeThreshold: number | StrongNumeric<Int32Host>,
    firstLevel: number | StrongNumeric<Int32Host>,
    wtaK: number | StrongNumeric<Int32Host>,
    scoreType: EnumInput<OpenCvSharp.ORBScoreType>
  ): OpenCvSharp.ORB;
  create(
    nFeatures: number | StrongNumeric<Int32Host>,
    scaleFactor: number | StrongNumeric<SingleHost>,
    nLevels: number | StrongNumeric<Int32Host>,
    edgeThreshold: number | StrongNumeric<Int32Host>,
    firstLevel: number | StrongNumeric<Int32Host>,
    wtaK: number | StrongNumeric<Int32Host>,
    scoreType: EnumInput<OpenCvSharp.ORBScoreType>,
    patchSize: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.ORB;
  create(
    nFeatures: number | StrongNumeric<Int32Host>,
    scaleFactor: number | StrongNumeric<SingleHost>,
    nLevels: number | StrongNumeric<Int32Host>,
    edgeThreshold: number | StrongNumeric<Int32Host>,
    firstLevel: number | StrongNumeric<Int32Host>,
    wtaK: number | StrongNumeric<Int32Host>,
    scoreType: EnumInput<OpenCvSharp.ORBScoreType>,
    patchSize: number | StrongNumeric<Int32Host>,
    fastThreshold: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.ORB;
}

export {};
