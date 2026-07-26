import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IReadOnlyList";
import "../../System/IDisposable";
import "../../System/IntPtr";
import "../../System/ValueType";
import "../KeyPoint";
import "../Mat";
import "../Size";

declare const imageFeaturesBrand: unique symbol;
export interface ImageFeatures extends ClrHostValue, System.IDisposableInput {
  readonly [imageFeaturesBrand]: true;
  readonly imgIdx: number;
  readonly imgSize: OpenCvSharp.Size;
  readonly keypoints: System.Collections.Generic.IReadOnlyList<OpenCvSharp.KeyPoint>;
  readonly descriptors: OpenCvSharp.Mat;
  dispose(): VoidResult;
}

declare global {
  namespace OpenCvSharp.Detail {
    type ImageFeatures = import("./ImageFeatures").ImageFeatures;
  }
}

export interface ImageFeaturesHostType extends HostType<ImageFeatures, ReferenceTypeTrait> {
  new (
    imgIdx: number | StrongNumeric<Int32Host>,
    imgSize: OpenCvSharp.Size,
    keypoints: System.Collections.Generic.IReadOnlyList<OpenCvSharp.KeyPoint>,
    descriptors: OpenCvSharp.Mat
  ): ImageFeatures;
}

declare const wImageFeaturesBrand: unique symbol;
export interface WImageFeatures extends ClrHostValue {
  readonly [wImageFeaturesBrand]: true;
  imgIdx: number;
  imgSize: OpenCvSharp.Size;
  keypoints: System.IntPtr;
  descriptors: System.IntPtr;
}

declare global {
  namespace OpenCvSharp.Detail {
    type WImageFeatures = import("./ImageFeatures").WImageFeatures;
  }
}

export interface WImageFeaturesHostType extends HostType<WImageFeatures, ValueTypeTrait> {}

export {};
