import type {
  DoubleHost,
  HostType,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./Algorithm";
import "./ICvPtrHolder";
import "./InputArray";
import "./OutputArray";

declare const backgroundSubtractorBrand: unique symbol;
export interface BackgroundSubtractor
  extends
    Omit<OpenCvSharp.Algorithm, "apply" | "getBackgroundImage">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [backgroundSubtractorBrand]: true;
  apply(image: OpenCvSharp.InputArray, fgmask: OpenCvSharp.OutputArray): VoidResult;
  apply(
    image: OpenCvSharp.InputArray,
    fgmask: OpenCvSharp.OutputArray,
    learningRate: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  getBackgroundImage(backgroundImage: OpenCvSharp.OutputArray): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type BackgroundSubtractor = import("./BackgroundSubtractor").BackgroundSubtractor;
  }
}

export interface BackgroundSubtractorHostType extends HostType<
  BackgroundSubtractor,
  ReferenceTypeTrait
> {}

export {};
