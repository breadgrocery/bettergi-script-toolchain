import type {
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./ICvPtrHolder";
import "./Tonemap";

declare const tonemapReinhardBrand: unique symbol;
export interface TonemapReinhard
  extends
    Omit<OpenCvSharp.Tonemap, "colorAdaptation" | "intensity" | "lightAdaptation">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [tonemapReinhardBrand]: true;
  intensity: number;
  lightAdaptation: number;
  colorAdaptation: number;
}

declare global {
  namespace OpenCvSharp {
    type TonemapReinhard = import("./TonemapReinhard").TonemapReinhard;
  }
}

export interface TonemapReinhardHostType extends HostType<TonemapReinhard, ReferenceTypeTrait> {
  create(): OpenCvSharp.TonemapReinhard;
  create(gamma: number | StrongNumeric<SingleHost>): OpenCvSharp.TonemapReinhard;
  create(
    gamma: number | StrongNumeric<SingleHost>,
    intensity: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.TonemapReinhard;
  create(
    gamma: number | StrongNumeric<SingleHost>,
    intensity: number | StrongNumeric<SingleHost>,
    lightAdapt: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.TonemapReinhard;
  create(
    gamma: number | StrongNumeric<SingleHost>,
    intensity: number | StrongNumeric<SingleHost>,
    lightAdapt: number | StrongNumeric<SingleHost>,
    colorAdapt: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.TonemapReinhard;
}

export {};
