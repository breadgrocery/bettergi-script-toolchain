import type {
  ClrHostValue,
  EnumInput,
  EnumTypeTrait,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IDisposable";
import "../System/IFormattable";
import "../System/ISpanFormattable";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./InputArray";
import "./Mat";
import "./OutputArray";

declare const sVDBrand: unique symbol;
export interface SVD
  extends
    Omit<OpenCvSharp.DisposableCvObject, "backSubst" | "run" | "u" | "vt" | "w">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [sVDBrand]: true;
  u(): OpenCvSharp.Mat;
  w(): OpenCvSharp.Mat;
  vt(): OpenCvSharp.Mat;
  run(src: OpenCvSharp.InputArray): OpenCvSharp.SVD;
  run(src: OpenCvSharp.InputArray, flags: EnumInput<SVD_Flags>): OpenCvSharp.SVD;
  backSubst(rhs: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
}

declare const sVD_FlagsBrand: unique symbol;
export interface SVD_Flags extends ClrHostValue {
  readonly [sVD_FlagsBrand]: true;
}

export interface SVD_FlagsHostType extends HostType<SVD_Flags, EnumTypeTrait> {
  readonly none: SVD_Flags;
  readonly modifyA: SVD_Flags;
  readonly noUV: SVD_Flags;
  readonly fullUV: SVD_Flags;
}

declare global {
  namespace OpenCvSharp.SVD {
    type Flags = import("./SVD").SVD_Flags;
  }
}

declare global {
  namespace OpenCvSharp {
    type SVD = import("./SVD").SVD;
  }
}

export interface SVDHostType extends HostType<
  SVD,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): SVD;
  new (src: OpenCvSharp.InputArray): SVD;
  new (src: OpenCvSharp.InputArray, flags: EnumInput<SVD_Flags>): SVD;
  compute(
    src: OpenCvSharp.InputArray,
    w: OpenCvSharp.OutputArray,
    u: OpenCvSharp.OutputArray,
    vt: OpenCvSharp.OutputArray
  ): VoidResult;
  compute(
    src: OpenCvSharp.InputArray,
    w: OpenCvSharp.OutputArray,
    u: OpenCvSharp.OutputArray,
    vt: OpenCvSharp.OutputArray,
    flags: EnumInput<SVD_Flags>
  ): VoidResult;
  compute(src: OpenCvSharp.InputArray, w: OpenCvSharp.OutputArray): VoidResult;
  compute(
    src: OpenCvSharp.InputArray,
    w: OpenCvSharp.OutputArray,
    flags: EnumInput<SVD_Flags>
  ): VoidResult;
  backSubst(
    w: OpenCvSharp.InputArray,
    u: OpenCvSharp.InputArray,
    vt: OpenCvSharp.InputArray,
    rhs: OpenCvSharp.InputArray,
    dst: OpenCvSharp.OutputArray
  ): VoidResult;
  solveZ(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  readonly Flags: SVD_FlagsHostType;
}

export {};
