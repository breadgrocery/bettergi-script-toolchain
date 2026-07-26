import type { HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./DisposableCvObject";
import "./FileNode";
import "./FileStorage";
import "./ICvPtrHolder";

declare const algorithmBrand: unique symbol;
export interface Algorithm
  extends
    Omit<OpenCvSharp.DisposableCvObject, "empty" | "getDefaultName" | "read" | "save" | "write">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [algorithmBrand]: true;
  write(fs: OpenCvSharp.FileStorage): VoidResult;
  read(fn: OpenCvSharp.FileNode): VoidResult;
  readonly empty: boolean;
  save(fileName: string): VoidResult;
  getDefaultName(): string;
}

declare global {
  namespace OpenCvSharp {
    type Algorithm = import("./Algorithm").Algorithm;
  }
}

export interface AlgorithmHostType extends HostType<Algorithm, ReferenceTypeTrait> {}

export {};
