import type {
  EnumInput,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./Feature2D";
import "./ICvPtrHolder";
import "./KAZEDiffusivityType";

declare const kAZEBrand: unique symbol;
export interface KAZE
  extends
    Omit<
      OpenCvSharp.Feature2D,
      "diffusivity" | "extended" | "nOctaveLayers" | "nOctaves" | "threshold" | "upright"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [kAZEBrand]: true;
  diffusivity: OpenCvSharp.KAZEDiffusivityType;
  extended: boolean;
  nOctaveLayers: number;
  nOctaves: number;
  threshold: number;
  upright: boolean;
}

declare global {
  namespace OpenCvSharp {
    type KAZE = import("./KAZE").KAZE;
  }
}

export interface KAZEHostType extends HostType<KAZE, ReferenceTypeTrait> {
  create(): OpenCvSharp.KAZE;
  create(extended: boolean): OpenCvSharp.KAZE;
  create(extended: boolean, upright: boolean): OpenCvSharp.KAZE;
  create(
    extended: boolean,
    upright: boolean,
    threshold: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.KAZE;
  create(
    extended: boolean,
    upright: boolean,
    threshold: number | StrongNumeric<SingleHost>,
    nOctaves: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.KAZE;
  create(
    extended: boolean,
    upright: boolean,
    threshold: number | StrongNumeric<SingleHost>,
    nOctaves: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.KAZE;
  create(
    extended: boolean,
    upright: boolean,
    threshold: number | StrongNumeric<SingleHost>,
    nOctaves: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>,
    diffusivity: EnumInput<OpenCvSharp.KAZEDiffusivityType>
  ): OpenCvSharp.KAZE;
}

export {};
