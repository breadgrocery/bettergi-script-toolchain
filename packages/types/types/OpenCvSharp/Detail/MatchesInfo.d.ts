import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/Collections/Generic/IReadOnlyList";
import "../../System/IDisposable";
import "../DMatch";
import "../Mat";

declare const matchesInfoBrand: unique symbol;
export interface MatchesInfo extends ClrHostValue, System.IDisposableInput {
  readonly [matchesInfoBrand]: true;
  readonly srcImgIdx: number;
  readonly dstImgIdx: number;
  readonly matches: System.Collections.Generic.IReadOnlyList<OpenCvSharp.DMatch>;
  readonly inliersMask: System.Collections.Generic.IReadOnlyList<number>;
  readonly numInliers: number;
  readonly h: OpenCvSharp.Mat;
  readonly confidence: number;
  dispose(): VoidResult;
}

declare global {
  namespace OpenCvSharp.Detail {
    type MatchesInfo = import("./MatchesInfo").MatchesInfo;
  }
}

export interface MatchesInfoHostType extends HostType<MatchesInfo, ReferenceTypeTrait> {
  new (
    srcImgIdx: number | StrongNumeric<Int32Host>,
    dstImgIdx: number | StrongNumeric<Int32Host>,
    matches: System.Collections.Generic.IReadOnlyList<OpenCvSharp.DMatch>,
    inliersMask: System.Collections.Generic.IReadOnlyList<number>,
    numInliers: number | StrongNumeric<Int32Host>,
    h: OpenCvSharp.Mat,
    confidence: number | StrongNumeric<DoubleHost>
  ): MatchesInfo;
  new (other: OpenCvSharp.Detail.MatchesInfo): MatchesInfo;
}

export {};
