import type {
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../Feature2D";
import "../ICvPtrHolder";

declare const sURFBrand: unique symbol;
export interface SURF
  extends
    Omit<
      OpenCvSharp.Feature2D,
      "extended" | "hessianThreshold" | "nOctaveLayers" | "nOctaves" | "upright"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [sURFBrand]: true;
  hessianThreshold: number;
  nOctaves: number;
  nOctaveLayers: number;
  extended: boolean;
  upright: boolean;
}

declare global {
  namespace OpenCvSharp.XFeatures2D {
    type SURF = import("./SURF").SURF;
  }
}

export interface SURFHostType extends HostType<SURF, ReferenceTypeTrait> {
  create(hessianThreshold: number | StrongNumeric<DoubleHost>): OpenCvSharp.XFeatures2D.SURF;
  create(
    hessianThreshold: number | StrongNumeric<DoubleHost>,
    nOctaves: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XFeatures2D.SURF;
  create(
    hessianThreshold: number | StrongNumeric<DoubleHost>,
    nOctaves: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XFeatures2D.SURF;
  create(
    hessianThreshold: number | StrongNumeric<DoubleHost>,
    nOctaves: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>,
    extended: boolean
  ): OpenCvSharp.XFeatures2D.SURF;
  create(
    hessianThreshold: number | StrongNumeric<DoubleHost>,
    nOctaves: number | StrongNumeric<Int32Host>,
    nOctaveLayers: number | StrongNumeric<Int32Host>,
    extended: boolean,
    upright: boolean
  ): OpenCvSharp.XFeatures2D.SURF;
}

export {};
