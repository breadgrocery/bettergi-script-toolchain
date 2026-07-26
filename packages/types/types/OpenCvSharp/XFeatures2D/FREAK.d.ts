import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/Collections/Generic/IEnumerable";
import "../../System/IDisposable";
import "../Feature2D";
import "../ICvPtrHolder";

declare const fREAKBrand: unique symbol;
export interface FREAK
  extends OpenCvSharp.Feature2D, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [fREAKBrand]: true;
}

declare global {
  namespace OpenCvSharp.XFeatures2D {
    type FREAK = import("./FREAK").FREAK;
  }
}

export interface FREAKHostType extends HostType<FREAK, ReferenceTypeTrait> {
  create(): OpenCvSharp.XFeatures2D.FREAK;
  create(orientationNormalized: boolean): OpenCvSharp.XFeatures2D.FREAK;
  create(orientationNormalized: boolean, scaleNormalized: boolean): OpenCvSharp.XFeatures2D.FREAK;
  create(
    orientationNormalized: boolean,
    scaleNormalized: boolean,
    patternScale: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.XFeatures2D.FREAK;
  create(
    orientationNormalized: boolean,
    scaleNormalized: boolean,
    patternScale: number | StrongNumeric<SingleHost>,
    nOctaves: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XFeatures2D.FREAK;
  create(
    orientationNormalized: boolean,
    scaleNormalized: boolean,
    patternScale: number | StrongNumeric<SingleHost>,
    nOctaves: number | StrongNumeric<Int32Host>,
    selectedPairs: System.Collections.Generic.IEnumerable<number> | null
  ): OpenCvSharp.XFeatures2D.FREAK;
}

export {};
