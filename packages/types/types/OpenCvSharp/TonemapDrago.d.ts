import type {
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./ICvPtrHolder";
import "./Tonemap";

declare const tonemapDragoBrand: unique symbol;
export interface TonemapDrago
  extends
    Omit<OpenCvSharp.Tonemap, "bias" | "saturation">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [tonemapDragoBrand]: true;
  saturation: number;
  bias: number;
}

declare global {
  namespace OpenCvSharp {
    type TonemapDrago = import("./TonemapDrago").TonemapDrago;
  }
}

export interface TonemapDragoHostType extends HostType<TonemapDrago, ReferenceTypeTrait> {
  create(): OpenCvSharp.TonemapDrago;
  create(gamma: number | StrongNumeric<SingleHost>): OpenCvSharp.TonemapDrago;
  create(
    gamma: number | StrongNumeric<SingleHost>,
    saturation: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.TonemapDrago;
  create(
    gamma: number | StrongNumeric<SingleHost>,
    saturation: number | StrongNumeric<SingleHost>,
    bias: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.TonemapDrago;
}

export {};
