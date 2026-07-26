import type {
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./ICvPtrHolder";
import "./Tonemap";

declare const tonemapMantiukBrand: unique symbol;
export interface TonemapMantiuk
  extends
    Omit<OpenCvSharp.Tonemap, "saturation" | "scale">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [tonemapMantiukBrand]: true;
  scale: number;
  saturation: number;
}

declare global {
  namespace OpenCvSharp {
    type TonemapMantiuk = import("./TonemapMantiuk").TonemapMantiuk;
  }
}

export interface TonemapMantiukHostType extends HostType<TonemapMantiuk, ReferenceTypeTrait> {
  create(): OpenCvSharp.TonemapMantiuk;
  create(gamma: number | StrongNumeric<SingleHost>): OpenCvSharp.TonemapMantiuk;
  create(
    gamma: number | StrongNumeric<SingleHost>,
    scale: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.TonemapMantiuk;
  create(
    gamma: number | StrongNumeric<SingleHost>,
    scale: number | StrongNumeric<SingleHost>,
    saturation: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.TonemapMantiuk;
}

export {};
