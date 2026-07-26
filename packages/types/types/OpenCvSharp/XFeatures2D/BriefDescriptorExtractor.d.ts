import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../Feature2D";
import "../ICvPtrHolder";

declare const briefDescriptorExtractorBrand: unique symbol;
export interface BriefDescriptorExtractor
  extends OpenCvSharp.Feature2D, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [briefDescriptorExtractorBrand]: true;
}

declare global {
  namespace OpenCvSharp.XFeatures2D {
    type BriefDescriptorExtractor = import("./BriefDescriptorExtractor").BriefDescriptorExtractor;
  }
}

export interface BriefDescriptorExtractorHostType extends HostType<
  BriefDescriptorExtractor,
  ReferenceTypeTrait
> {
  readonly patcH_SIZE: number;
  readonly kerneL_SIZE: number;
  create(): OpenCvSharp.XFeatures2D.BriefDescriptorExtractor;
  create(
    bytes: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.XFeatures2D.BriefDescriptorExtractor;
}

export {};
