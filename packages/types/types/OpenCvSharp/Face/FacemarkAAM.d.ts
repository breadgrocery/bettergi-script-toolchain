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
import "./Facemark";

declare const facemarkAAMBrand: unique symbol;
export interface FacemarkAAM
  extends OpenCvSharp.Face.Facemark, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [facemarkAAMBrand]: true;
}

declare const facemarkAAM_ParamsBrand: unique symbol;
export interface FacemarkAAM_Params
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      "m" | "modelFilename" | "n" | "nIter" | "read" | "saveModel" | "scales" | "verbose" | "write"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [facemarkAAM_ParamsBrand]: true;
  modelFilename: string;
  m: number;
  n: number;
  nIter: number;
  verbose: boolean;
  saveModel: boolean;
  scales: System.Collections.Generic.IReadOnlyList<number>;
  read(fn: OpenCvSharp.FileNode): VoidResult;
  write(fs: OpenCvSharp.FileStorage): VoidResult;
}

export interface FacemarkAAM_ParamsHostType extends HostType<
  FacemarkAAM_Params,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): FacemarkAAM_Params;
}

declare global {
  namespace OpenCvSharp.Face.FacemarkAAM {
    type Params = import("./FacemarkAAM").FacemarkAAM_Params;
  }
}

declare global {
  namespace OpenCvSharp.Face {
    type FacemarkAAM = import("./FacemarkAAM").FacemarkAAM;
  }
}

export interface FacemarkAAMHostType extends HostType<FacemarkAAM, ReferenceTypeTrait> {
  create(): OpenCvSharp.Face.FacemarkAAM;
  create(parameters: FacemarkAAM_Params | null): OpenCvSharp.Face.FacemarkAAM;
  readonly Params: FacemarkAAM_ParamsHostType;
}

export {};
