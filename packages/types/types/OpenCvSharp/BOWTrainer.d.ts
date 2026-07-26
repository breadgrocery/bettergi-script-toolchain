import type { HostArray, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./Mat";

declare const bOWTrainerBrand: unique symbol;
export interface BOWTrainer
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      "add" | "clear" | "cluster" | "descriptorsCount" | "getDescriptors"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [bOWTrainerBrand]: true;
  add(descriptors: OpenCvSharp.Mat): VoidResult;
  getDescriptors(): HostArray<OpenCvSharp.Mat>;
  descriptorsCount(): number;
  clear(): VoidResult;
  cluster(): OpenCvSharp.Mat;
  cluster(descriptors: OpenCvSharp.Mat): OpenCvSharp.Mat;
}

declare global {
  namespace OpenCvSharp {
    type BOWTrainer = import("./BOWTrainer").BOWTrainer;
  }
}

export interface BOWTrainerHostType extends HostType<BOWTrainer, ReferenceTypeTrait> {}

export {};
