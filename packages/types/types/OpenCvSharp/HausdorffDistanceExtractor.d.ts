import type {
  EnumInput,
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./DistanceTypes";
import "./ICvPtrHolder";
import "./ShapeDistanceExtractor";

declare const hausdorffDistanceExtractorBrand: unique symbol;
export interface HausdorffDistanceExtractor
  extends
    Omit<OpenCvSharp.ShapeDistanceExtractor, "distanceFlag" | "rankProportion">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [hausdorffDistanceExtractorBrand]: true;
  distanceFlag: OpenCvSharp.DistanceTypes;
  rankProportion: number;
}

declare global {
  namespace OpenCvSharp {
    type HausdorffDistanceExtractor =
      import("./HausdorffDistanceExtractor").HausdorffDistanceExtractor;
  }
}

export interface HausdorffDistanceExtractorHostType extends HostType<
  HausdorffDistanceExtractor,
  ReferenceTypeTrait
> {
  create(): OpenCvSharp.HausdorffDistanceExtractor;
  create(
    distanceFlag: EnumInput<OpenCvSharp.DistanceTypes>
  ): OpenCvSharp.HausdorffDistanceExtractor;
  create(
    distanceFlag: EnumInput<OpenCvSharp.DistanceTypes>,
    rankProp: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.HausdorffDistanceExtractor;
}

export {};
