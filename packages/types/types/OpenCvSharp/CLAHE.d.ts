import type {
  DoubleHost,
  HostType,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "../System/Nullable";
import "./Algorithm";
import "./ICvPtrHolder";
import "./InputArray";
import "./OutputArray";
import "./Size";

declare const cLAHEBrand: unique symbol;
export interface CLAHE
  extends
    Omit<OpenCvSharp.Algorithm, "apply" | "clipLimit" | "collectGarbage" | "tilesGridSize">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [cLAHEBrand]: true;
  apply(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  clipLimit: number;
  tilesGridSize: OpenCvSharp.Size;
  collectGarbage(): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type CLAHE = import("./CLAHE").CLAHE;
  }
}

export interface CLAHEHostType extends HostType<CLAHE, ReferenceTypeTrait> {
  create(): OpenCvSharp.CLAHE;
  create(clipLimit: number | StrongNumeric<DoubleHost>): OpenCvSharp.CLAHE;
  create(
    clipLimit: number | StrongNumeric<DoubleHost>,
    tileGridSize: OpenCvSharp.Size | null | null
  ): OpenCvSharp.CLAHE;
}

export {};
