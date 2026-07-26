import type {
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../Algorithm";
import "../ICvPtrHolder";
import "../InputArray";
import "../Rect";

declare const edgeBoxesBrand: unique symbol;
export interface EdgeBoxes
  extends
    Omit<
      OpenCvSharp.Algorithm,
      | "alpha"
      | "beta"
      | "clusterMinMag"
      | "edgeMergeThr"
      | "edgeMinMag"
      | "eta"
      | "gamma"
      | "getBoundingBoxes"
      | "kappa"
      | "maxAspectRatio"
      | "maxBoxes"
      | "minBoxArea"
      | "minScore"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [edgeBoxesBrand]: true;
  alpha: number;
  beta: number;
  eta: number;
  minScore: number;
  maxBoxes: number;
  edgeMinMag: number;
  edgeMergeThr: number;
  clusterMinMag: number;
  maxAspectRatio: number;
  minBoxArea: number;
  gamma: number;
  kappa: number;
  getBoundingBoxes(
    edgeMap: OpenCvSharp.InputArray,
    orientationMap: OpenCvSharp.InputArray,
    boxes: HostVariableOut<HostArray<OpenCvSharp.Rect>>
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type EdgeBoxes = import("./EdgeBoxes").EdgeBoxes;
  }
}

export interface EdgeBoxesHostType extends HostType<EdgeBoxes, ReferenceTypeTrait> {
  create(): OpenCvSharp.XImgProc.EdgeBoxes;
  create(alpha: number | StrongNumeric<SingleHost>): OpenCvSharp.XImgProc.EdgeBoxes;
  create(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  create(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  create(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  create(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  create(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  create(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>,
    edgeMergeThr: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  create(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>,
    edgeMergeThr: number | StrongNumeric<SingleHost>,
    clusterMinMag: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  create(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>,
    edgeMergeThr: number | StrongNumeric<SingleHost>,
    clusterMinMag: number | StrongNumeric<SingleHost>,
    maxAspectRatio: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  create(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>,
    edgeMergeThr: number | StrongNumeric<SingleHost>,
    clusterMinMag: number | StrongNumeric<SingleHost>,
    maxAspectRatio: number | StrongNumeric<SingleHost>,
    minBoxArea: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  create(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>,
    edgeMergeThr: number | StrongNumeric<SingleHost>,
    clusterMinMag: number | StrongNumeric<SingleHost>,
    maxAspectRatio: number | StrongNumeric<SingleHost>,
    minBoxArea: number | StrongNumeric<SingleHost>,
    gamma: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
  create(
    alpha: number | StrongNumeric<SingleHost>,
    beta: number | StrongNumeric<SingleHost>,
    eta: number | StrongNumeric<SingleHost>,
    minScore: number | StrongNumeric<SingleHost>,
    maxBoxes: number | StrongNumeric<Int32Host>,
    edgeMinMag: number | StrongNumeric<SingleHost>,
    edgeMergeThr: number | StrongNumeric<SingleHost>,
    clusterMinMag: number | StrongNumeric<SingleHost>,
    maxAspectRatio: number | StrongNumeric<SingleHost>,
    minBoxArea: number | StrongNumeric<SingleHost>,
    gamma: number | StrongNumeric<SingleHost>,
    kappa: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XImgProc.EdgeBoxes;
}

export {};
