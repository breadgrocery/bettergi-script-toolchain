import type {
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./Algorithm";
import "./ICvPtrHolder";
import "./InputArray";
import "./OutputArray";

declare const tonemapBrand: unique symbol;
export interface Tonemap
  extends
    Omit<OpenCvSharp.Algorithm, "gamma" | "process">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [tonemapBrand]: true;
  process(src: OpenCvSharp.InputArray, dst: OpenCvSharp.OutputArray): VoidResult;
  gamma: number;
}

declare global {
  namespace OpenCvSharp {
    type Tonemap = import("./Tonemap").Tonemap;
  }
}

export interface TonemapHostType extends HostType<Tonemap, ReferenceTypeTrait> {
  create(): OpenCvSharp.Tonemap;
  create(gamma: number | StrongNumeric<SingleHost>): OpenCvSharp.Tonemap;
}

export {};
