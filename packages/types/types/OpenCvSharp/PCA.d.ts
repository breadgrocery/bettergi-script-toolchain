import type {
  ClrHostValue,
  DoubleHost,
  EnumInput,
  EnumTypeTrait,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IDisposable";
import "../System/IFormattable";
import "../System/ISpanFormattable";
import "./DisposableCvObject";
import "./FileNode";
import "./FileStorage";
import "./ICvPtrHolder";
import "./InputArray";
import "./Mat";
import "./OutputArray";

declare const pCABrand: unique symbol;
export interface PCA
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "backProject"
      | "compute"
      | "computeVar"
      | "eigenvalues"
      | "eigenvectors"
      | "mean"
      | "project"
      | "read"
      | "write"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [pCABrand]: true;
  readonly eigenvectors: OpenCvSharp.Mat;
  readonly eigenvalues: OpenCvSharp.Mat;
  readonly mean: OpenCvSharp.Mat;
  compute(
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputArray,
    flags: EnumInput<PCA_Flags>
  ): OpenCvSharp.PCA;
  compute(
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputArray,
    flags: EnumInput<PCA_Flags>,
    maxComponents: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.PCA;
  computeVar(
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputArray,
    flags: EnumInput<PCA_Flags>,
    retainedVariance: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.PCA;
  project(vec: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  project(vec: OpenCvSharp.InputArray, result: OpenCvSharp.OutputArray): VoidResult;
  backProject(vec: OpenCvSharp.InputArray): OpenCvSharp.Mat;
  backProject(vec: OpenCvSharp.InputArray, result: OpenCvSharp.OutputArray): VoidResult;
  write(fs: OpenCvSharp.FileStorage): VoidResult;
  read(fn: OpenCvSharp.FileNode): VoidResult;
}

declare const pCA_FlagsBrand: unique symbol;
export interface PCA_Flags extends ClrHostValue {
  readonly [pCA_FlagsBrand]: true;
}

export interface PCA_FlagsHostType extends HostType<PCA_Flags, EnumTypeTrait> {
  readonly dataAsRow: PCA_Flags;
  readonly dataAsCol: PCA_Flags;
  readonly useAvg: PCA_Flags;
}

declare global {
  namespace OpenCvSharp.PCA {
    type Flags = import("./PCA").PCA_Flags;
  }
}

declare global {
  namespace OpenCvSharp {
    type PCA = import("./PCA").PCA;
  }
}

export interface PCAHostType extends HostType<
  PCA,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): PCA;
  new (
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputArray,
    flags: EnumInput<PCA_Flags>
  ): PCA;
  new (
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputArray,
    flags: EnumInput<PCA_Flags>,
    maxComponents: number | StrongNumeric<Int32Host>
  ): PCA;
  new (
    data: OpenCvSharp.InputArray,
    mean: OpenCvSharp.InputArray,
    flags: EnumInput<PCA_Flags>,
    retainedVariance: number | StrongNumeric<DoubleHost>
  ): PCA;
  readonly Flags: PCA_FlagsHostType;
}

export {};
