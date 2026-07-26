import type {
  ClrHostValue,
  HostArray,
  HostType,
  StaticTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/Collections/Generic/IEnumerable";
import "../Feature2D";
import "../InputArray";
import "../Mat";
import "./ImageFeatures";

declare const cvDetailBrand: unique symbol;
export interface CvDetail extends ClrHostValue {
  readonly [cvDetailBrand]: true;
}

declare global {
  namespace OpenCvSharp.Detail {
    type CvDetail = import("./CvDetail").CvDetail;
  }
}

export interface CvDetailHostType extends HostType<CvDetail, StaticTypeTrait> {
  computeImageFeatures(
    featuresFinder: OpenCvSharp.Feature2D,
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>
  ): HostArray<OpenCvSharp.Detail.ImageFeatures>;
  computeImageFeatures(
    featuresFinder: OpenCvSharp.Feature2D,
    images: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>,
    masks: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat> | null
  ): HostArray<OpenCvSharp.Detail.ImageFeatures>;
  computeImageFeatures(
    featuresFinder: OpenCvSharp.Feature2D,
    image: OpenCvSharp.InputArray
  ): OpenCvSharp.Detail.ImageFeatures;
  computeImageFeatures(
    featuresFinder: OpenCvSharp.Feature2D,
    image: OpenCvSharp.InputArray,
    mask: OpenCvSharp.InputArray | null
  ): OpenCvSharp.Detail.ImageFeatures;
}

export {};
