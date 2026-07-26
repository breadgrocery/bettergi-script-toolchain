import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  IsFamilyArgumentOmitted,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IEnumerable";
import "../../System/Collections/Generic/IEnumerator";
import "../../System/Collections/IEnumerable";
import "../../System/IDisposable";
import "./Color";
import "./Image";
import "./ImageFrame";

declare const imageFrameCollectionArity0Brand: unique symbol;
export interface _ImageFrameCollectionArity0
  extends
    ClrHostValue,
    System.IDisposableInput,
    System.Collections.Generic.IEnumerableInput<SixLabors.ImageSharp.ImageFrame>,
    System.Collections.IEnumerableInput {
  readonly [imageFrameCollectionArity0Brand]: true;
  readonly count: number;
  readonly rootFrame: SixLabors.ImageSharp.ImageFrame;
  item: {
    (index: number | StrongNumeric<Int32Host>): SixLabors.ImageSharp.ImageFrame;
    get(index: number | StrongNumeric<Int32Host>): SixLabors.ImageSharp.ImageFrame;
  };
  indexOf(frame: SixLabors.ImageSharp.ImageFrame): number;
  insertFrame(
    index: number | StrongNumeric<Int32Host>,
    source: SixLabors.ImageSharp.ImageFrame
  ): SixLabors.ImageSharp.ImageFrame;
  addFrame(source: SixLabors.ImageSharp.ImageFrame): SixLabors.ImageSharp.ImageFrame;
  removeFrame(index: number | StrongNumeric<Int32Host>): VoidResult;
  contains(frame: SixLabors.ImageSharp.ImageFrame): boolean;
  moveFrame(
    sourceIndex: number | StrongNumeric<Int32Host>,
    destinationIndex: number | StrongNumeric<Int32Host>
  ): VoidResult;
  exportFrame(index: number | StrongNumeric<Int32Host>): SixLabors.ImageSharp.Image;
  cloneFrame(index: number | StrongNumeric<Int32Host>): SixLabors.ImageSharp.Image;
  createFrame(): SixLabors.ImageSharp.ImageFrame;
  createFrame(backgroundColor: SixLabors.ImageSharp.Color): SixLabors.ImageSharp.ImageFrame;
  dispose(): VoidResult;
}

export interface _ImageFrameCollectionArity0HostType extends HostType<
  _ImageFrameCollectionArity0,
  ReferenceTypeTrait
> {}

declare const imageFrameCollectionArity1Brand: unique symbol;
export interface _ImageFrameCollectionArity1<TPixel>
  extends
    Omit<
      _ImageFrameCollectionArity0,
      | "addFrame"
      | "cloneFrame"
      | "contains"
      | "count"
      | "createFrame"
      | "exportFrame"
      | "getEnumerator"
      | "indexOf"
      | "insertFrame"
      | "item"
      | "moveFrame"
      | "removeFrame"
      | "rootFrame"
    >,
    System.IDisposableInput,
    System.Collections.Generic.IEnumerableInput<SixLabors.ImageSharp.ImageFrame>,
    System.Collections.IEnumerableInput,
    System.Collections.Generic.IEnumerableInput<SixLabors.ImageSharp.ImageFrame<TPixel>> {
  readonly [imageFrameCollectionArity1Brand]: true;
  readonly count: number;
  readonly rootFrame: SixLabors.ImageSharp.ImageFrame<TPixel>;
  item: {
    (index: number | StrongNumeric<Int32Host>): SixLabors.ImageSharp.ImageFrame<TPixel>;
    get(index: number | StrongNumeric<Int32Host>): SixLabors.ImageSharp.ImageFrame<TPixel>;
  };
  indexOf(frame: SixLabors.ImageSharp.ImageFrame): number;
  indexOf(frame: SixLabors.ImageSharp.ImageFrame<TPixel>): number;
  insertFrame(
    index: number | StrongNumeric<Int32Host>,
    source: SixLabors.ImageSharp.ImageFrame<TPixel>
  ): SixLabors.ImageSharp.ImageFrame<TPixel>;
  addFrame(source: HostArray<TPixel>): SixLabors.ImageSharp.ImageFrame<TPixel>;
  addFrame(
    source: SixLabors.ImageSharp.ImageFrame<TPixel>
  ): SixLabors.ImageSharp.ImageFrame<TPixel>;
  removeFrame(index: number | StrongNumeric<Int32Host>): VoidResult;
  contains(frame: SixLabors.ImageSharp.ImageFrame): boolean;
  contains(frame: SixLabors.ImageSharp.ImageFrame<TPixel>): boolean;
  moveFrame(
    sourceIndex: number | StrongNumeric<Int32Host>,
    destinationIndex: number | StrongNumeric<Int32Host>
  ): VoidResult;
  exportFrame(index: number | StrongNumeric<Int32Host>): SixLabors.ImageSharp.Image<TPixel>;
  cloneFrame(index: number | StrongNumeric<Int32Host>): SixLabors.ImageSharp.Image<TPixel>;
  createFrame(): SixLabors.ImageSharp.ImageFrame<TPixel>;
  createFrame(backgroundColor: TPixel): SixLabors.ImageSharp.ImageFrame<TPixel>;
  getEnumerator(): System.Collections.Generic.IEnumerator<SixLabors.ImageSharp.ImageFrame<TPixel>>;
}

export interface _ImageFrameCollectionArity1HostType<TPixel> extends HostType<
  _ImageFrameCollectionArity1<TPixel>,
  ReferenceTypeTrait
> {}

export type ImageFrameCollectionFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true
    ? _ImageFrameCollectionArity0
    : _ImageFrameCollectionArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp {
    type ImageFrameCollection<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ImageFrameCollection").ImageFrameCollectionFamily<T1>;
  }
}

export type ImageFrameCollectionHostType = _ImageFrameCollectionArity0HostType;

export {};
