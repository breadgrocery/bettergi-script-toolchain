import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./DisposableObject";
import "./TrackbarCallback";

declare const cvTrackbarBrand: unique symbol;
export interface CvTrackbar
  extends
    Omit<
      OpenCvSharp.DisposableObject,
      "callback" | "pos" | "result" | "setMax" | "setMin" | "trackbarName" | "windowName"
    >,
    System.IDisposableInput {
  readonly [cvTrackbarBrand]: true;
  readonly trackbarName: string;
  readonly windowName: string;
  readonly callback: OpenCvSharp.TrackbarCallback;
  pos: number;
  readonly result: number;
  setMax(maxVal: number | StrongNumeric<Int32Host>): VoidResult;
  setMin(minVal: number | StrongNumeric<Int32Host>): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type CvTrackbar = import("./CvTrackbar").CvTrackbar;
  }
}

export interface CvTrackbarHostType extends HostType<CvTrackbar, ReferenceTypeTrait> {}

export {};
