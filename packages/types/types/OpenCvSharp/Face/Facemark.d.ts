import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../Algorithm";
import "../ICvPtrHolder";
import "../InputArray";
import "../Point2f";

declare const facemarkBrand: unique symbol;
export interface Facemark
  extends
    Omit<OpenCvSharp.Algorithm, "fit" | "loadModel">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [facemarkBrand]: true;
  loadModel(model: string): VoidResult;
  fit(
    image: OpenCvSharp.InputArray,
    faces: OpenCvSharp.InputArray,
    landmarks: HostVariableOut<HostArray<HostArray<OpenCvSharp.Point2f>>>
  ): boolean;
}

declare global {
  namespace OpenCvSharp.Face {
    type Facemark = import("./Facemark").Facemark;
  }
}

export interface FacemarkHostType extends HostType<Facemark, ReferenceTypeTrait> {}

export {};
