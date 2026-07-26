import type {
  ClrHostValue,
  EnumInput,
  HostType,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/Collections/Generic/IEnumerator";
import "../System/Collections/IEnumerable";
import "../System/IDisposable";
import "../System/IntPtr";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./Mat";
import "./PixelConnectivity";
import "./Point";

declare const lineIteratorBrand: unique symbol;
export interface LineIterator
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "count"
      | "elemSize"
      | "err"
      | "getEnumerator"
      | "minusDelta"
      | "minusStep"
      | "plusDelta"
      | "plusStep"
      | "ptr"
      | "ptr0"
      | "step"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput,
    System.Collections.Generic.IEnumerableInput<LineIterator_Pixel>,
    System.Collections.IEnumerableInput {
  readonly [lineIteratorBrand]: true;
  getEnumerator(): System.Collections.Generic.IEnumerator<LineIterator_Pixel>;
  readonly ptr: System.IntPtr;
  readonly ptr0: System.IntPtr;
  readonly step: number;
  readonly elemSize: number;
  readonly err: number;
  readonly count: number;
  readonly minusDelta: number;
  readonly plusDelta: number;
  readonly minusStep: number;
  readonly plusStep: number;
}

declare const lineIterator_PixelBrand: unique symbol;
export interface LineIterator_Pixel extends ClrHostValue {
  readonly [lineIterator_PixelBrand]: true;
  readonly pos: OpenCvSharp.Point;
  readonly ptr: System.IntPtr;
  getValue<T>(type1: HostType<T>): T;
  setValue<T>(type1: HostType<T>, value: T): VoidResult;
}

export interface LineIterator_PixelHostType extends HostType<
  LineIterator_Pixel,
  ReferenceTypeTrait
> {}

declare global {
  namespace OpenCvSharp.LineIterator {
    type Pixel = import("./LineIterator").LineIterator_Pixel;
  }
}

declare global {
  namespace OpenCvSharp {
    type LineIterator = import("./LineIterator").LineIterator;
  }
}

export interface LineIteratorHostType extends HostType<LineIterator, ReferenceTypeTrait> {
  new (img: OpenCvSharp.Mat, pt1: OpenCvSharp.Point, pt2: OpenCvSharp.Point): LineIterator;
  new (
    img: OpenCvSharp.Mat,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>
  ): LineIterator;
  new (
    img: OpenCvSharp.Mat,
    pt1: OpenCvSharp.Point,
    pt2: OpenCvSharp.Point,
    connectivity: EnumInput<OpenCvSharp.PixelConnectivity>,
    leftToRight: boolean
  ): LineIterator;
  readonly Pixel: LineIterator_PixelHostType;
}

export {};
