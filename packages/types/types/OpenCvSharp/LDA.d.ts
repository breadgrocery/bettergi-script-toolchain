import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./DisposableCvObject";
import "./FileStorage";
import "./ICvPtrHolder";
import "./InputArray";
import "./Mat";

declare const lDABrand: unique symbol;
export interface LDA
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      "compute" | "eigenvalues" | "eigenvectors" | "load" | "project" | "reconstruct" | "save"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [lDABrand]: true;
  eigenvectors(): OpenCvSharp.Mat;
  eigenvalues(): OpenCvSharp.Mat;
  save(fileName: string): VoidResult;
  save(fs: OpenCvSharp.FileStorage): VoidResult;
  load(fileName: string): VoidResult;
  load(node: OpenCvSharp.FileStorage): VoidResult;
  compute(src: OpenCvSharp.InputArray, labels: OpenCvSharp.InputArray): VoidResult;
  project(src: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  reconstruct(src: OpenCvSharp.InputArray): OpenCvSharp.Mat;
}

declare global {
  namespace OpenCvSharp {
    type LDA = import("./LDA").LDA;
  }
}

export interface LDAHostType extends HostType<LDA, ReferenceTypeTrait> {
  new (): LDA;
  new (numComponents: number | StrongNumeric<Int32Host>): LDA;
  new (src: OpenCvSharp.InputArray, labels: OpenCvSharp.InputArray): LDA;
  new (
    src: OpenCvSharp.InputArray,
    labels: OpenCvSharp.InputArray,
    numComponents: number | StrongNumeric<Int32Host>
  ): LDA;
  subspaceProject(
    w: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray
  ): OpenCvSharp.Mat;
  subspaceReconstruct(
    w: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputArray,
    src: OpenCvSharp.InputArray
  ): OpenCvSharp.Mat;
}

export {};
