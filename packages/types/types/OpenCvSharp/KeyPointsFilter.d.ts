import type {
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  SingleHost,
  StaticTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/Collections/Generic/IEnumerable";
import "./KeyPoint";
import "./Mat";
import "./Size";

declare const keyPointsFilterBrand: unique symbol;
export interface KeyPointsFilter extends ClrHostValue {
  readonly [keyPointsFilterBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type KeyPointsFilter = import("./KeyPointsFilter").KeyPointsFilter;
  }
}

export interface KeyPointsFilterHostType extends HostType<KeyPointsFilter, StaticTypeTrait> {
  runByImageBorder(
    keypoints: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    imageSize: OpenCvSharp.Size,
    borderSize: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.KeyPoint>;
  runByKeypointSize(
    keypoints: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    minSize: number | StrongNumeric<SingleHost>
  ): HostArray<OpenCvSharp.KeyPoint>;
  runByKeypointSize(
    keypoints: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    minSize: number | StrongNumeric<SingleHost>,
    maxSize: number | StrongNumeric<SingleHost>
  ): HostArray<OpenCvSharp.KeyPoint>;
  runByPixelsMask(
    keypoints: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    mask: OpenCvSharp.Mat
  ): HostArray<OpenCvSharp.KeyPoint>;
  removeDuplicated(
    keypoints: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>
  ): HostArray<OpenCvSharp.KeyPoint>;
  removeDuplicatedSorted(
    keypoints: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>
  ): HostArray<OpenCvSharp.KeyPoint>;
  retainBest(
    keypoints: System.Collections.Generic.IEnumerable<OpenCvSharp.KeyPoint>,
    nPoints: number | StrongNumeric<Int32Host>
  ): HostArray<OpenCvSharp.KeyPoint>;
}

export {};
