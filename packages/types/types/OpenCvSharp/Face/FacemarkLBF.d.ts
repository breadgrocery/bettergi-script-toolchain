import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IReadOnlyList";
import "../../System/IDisposable";
import "../DisposableCvObject";
import "../FileNode";
import "../FileStorage";
import "../ICvPtrHolder";
import "../Rect";
import "./Facemark";

declare const facemarkLBFBrand: unique symbol;
export interface FacemarkLBF
  extends OpenCvSharp.Face.Facemark, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [facemarkLBFBrand]: true;
}

declare const facemarkLBF_ParamsBrand: unique symbol;
export interface FacemarkLBF_Params
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "baggingOverlap"
      | "cascadeFace"
      | "detectROI"
      | "featsM"
      | "initShapeN"
      | "modelFilename"
      | "nLandmarks"
      | "pupils0"
      | "pupils1"
      | "radiusM"
      | "read"
      | "saveModel"
      | "seed"
      | "shapeOffset"
      | "stagesN"
      | "treeDepth"
      | "treeN"
      | "verbose"
      | "write"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [facemarkLBF_ParamsBrand]: true;
  shapeOffset: number;
  cascadeFace: string;
  verbose: boolean;
  nLandmarks: number;
  initShapeN: number;
  stagesN: number;
  treeN: number;
  treeDepth: number;
  baggingOverlap: number;
  modelFilename: string;
  saveModel: boolean;
  seed: number;
  featsM: System.Collections.Generic.IReadOnlyList<number>;
  radiusM: System.Collections.Generic.IReadOnlyList<number>;
  pupils0: System.Collections.Generic.IReadOnlyList<number>;
  pupils1: System.Collections.Generic.IReadOnlyList<number>;
  detectROI: OpenCvSharp.Rect;
  read(fn: OpenCvSharp.FileNode): VoidResult;
  write(fs: OpenCvSharp.FileStorage): VoidResult;
}

export interface FacemarkLBF_ParamsHostType extends HostType<
  FacemarkLBF_Params,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): FacemarkLBF_Params;
}

declare global {
  namespace OpenCvSharp.Face.FacemarkLBF {
    type Params = import("./FacemarkLBF").FacemarkLBF_Params;
  }
}

declare global {
  namespace OpenCvSharp.Face {
    type FacemarkLBF = import("./FacemarkLBF").FacemarkLBF;
  }
}

export interface FacemarkLBFHostType extends HostType<FacemarkLBF, ReferenceTypeTrait> {
  create(): OpenCvSharp.Face.FacemarkLBF;
  create(parameters: FacemarkLBF_Params | null): OpenCvSharp.Face.FacemarkLBF;
  readonly Params: FacemarkLBF_ParamsHostType;
}

export {};
