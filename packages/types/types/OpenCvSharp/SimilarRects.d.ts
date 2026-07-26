import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  StaticTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "./Rect";

declare const similarRectsBrand: unique symbol;
export interface SimilarRects extends ClrHostValue {
  readonly [similarRectsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type SimilarRects = import("./SimilarRects").SimilarRects;
  }
}

export interface SimilarRectsHostType extends HostType<SimilarRects, StaticTypeTrait> {
  compare(
    eps: number | StrongNumeric<DoubleHost>,
    r1: OpenCvSharp.Rect,
    r2: OpenCvSharp.Rect
  ): boolean;
}

export {};
