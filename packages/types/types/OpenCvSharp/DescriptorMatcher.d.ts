import type {
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Collections/Generic/IEnumerable";
import "../System/IDisposable";
import "./Algorithm";
import "./DMatch";
import "./ICvPtrHolder";
import "./Mat";

declare const descriptorMatcherBrand: unique symbol;
export interface DescriptorMatcher
  extends
    Omit<
      OpenCvSharp.Algorithm,
      | "add"
      | "clear"
      | "empty"
      | "getTrainDescriptors"
      | "isMaskSupported"
      | "knnMatch"
      | "match"
      | "radiusMatch"
      | "train"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [descriptorMatcherBrand]: true;
  add(descriptors: System.Collections.Generic.IEnumerable<OpenCvSharp.Mat>): VoidResult;
  getTrainDescriptors(): HostArray<OpenCvSharp.Mat>;
  clear(): VoidResult;
  empty(): boolean;
  isMaskSupported(): boolean;
  train(): VoidResult;
  match(queryDescriptors: OpenCvSharp.Mat): HostArray<OpenCvSharp.DMatch>;
  match(
    queryDescriptors: OpenCvSharp.Mat,
    masks: HostArray<OpenCvSharp.Mat> | null
  ): HostArray<OpenCvSharp.DMatch>;
  match(
    queryDescriptors: OpenCvSharp.Mat,
    trainDescriptors: OpenCvSharp.Mat
  ): HostArray<OpenCvSharp.DMatch>;
  match(
    queryDescriptors: OpenCvSharp.Mat,
    trainDescriptors: OpenCvSharp.Mat,
    mask: OpenCvSharp.Mat | null
  ): HostArray<OpenCvSharp.DMatch>;
  knnMatch(
    queryDescriptors: OpenCvSharp.Mat,
    k: number | StrongNumeric<Int32Host>
  ): HostArray<HostArray<OpenCvSharp.DMatch>>;
  knnMatch(
    queryDescriptors: OpenCvSharp.Mat,
    k: number | StrongNumeric<Int32Host>,
    masks: HostArray<OpenCvSharp.Mat> | null
  ): HostArray<HostArray<OpenCvSharp.DMatch>>;
  knnMatch(
    queryDescriptors: OpenCvSharp.Mat,
    k: number | StrongNumeric<Int32Host>,
    masks: HostArray<OpenCvSharp.Mat> | null,
    compactResult: boolean
  ): HostArray<HostArray<OpenCvSharp.DMatch>>;
  knnMatch(
    queryDescriptors: OpenCvSharp.Mat,
    trainDescriptors: OpenCvSharp.Mat,
    k: number | StrongNumeric<Int32Host>
  ): HostArray<HostArray<OpenCvSharp.DMatch>>;
  knnMatch(
    queryDescriptors: OpenCvSharp.Mat,
    trainDescriptors: OpenCvSharp.Mat,
    k: number | StrongNumeric<Int32Host>,
    mask: OpenCvSharp.Mat | null
  ): HostArray<HostArray<OpenCvSharp.DMatch>>;
  knnMatch(
    queryDescriptors: OpenCvSharp.Mat,
    trainDescriptors: OpenCvSharp.Mat,
    k: number | StrongNumeric<Int32Host>,
    mask: OpenCvSharp.Mat | null,
    compactResult: boolean
  ): HostArray<HostArray<OpenCvSharp.DMatch>>;
  radiusMatch(
    queryDescriptors: OpenCvSharp.Mat,
    maxDistance: number | StrongNumeric<SingleHost>
  ): HostArray<HostArray<OpenCvSharp.DMatch>>;
  radiusMatch(
    queryDescriptors: OpenCvSharp.Mat,
    maxDistance: number | StrongNumeric<SingleHost>,
    masks: HostArray<OpenCvSharp.Mat> | null
  ): HostArray<HostArray<OpenCvSharp.DMatch>>;
  radiusMatch(
    queryDescriptors: OpenCvSharp.Mat,
    maxDistance: number | StrongNumeric<SingleHost>,
    masks: HostArray<OpenCvSharp.Mat> | null,
    compactResult: boolean
  ): HostArray<HostArray<OpenCvSharp.DMatch>>;
  radiusMatch(
    queryDescriptors: OpenCvSharp.Mat,
    trainDescriptors: OpenCvSharp.Mat,
    maxDistance: number | StrongNumeric<SingleHost>
  ): HostArray<HostArray<OpenCvSharp.DMatch>>;
  radiusMatch(
    queryDescriptors: OpenCvSharp.Mat,
    trainDescriptors: OpenCvSharp.Mat,
    maxDistance: number | StrongNumeric<SingleHost>,
    mask: OpenCvSharp.Mat | null
  ): HostArray<HostArray<OpenCvSharp.DMatch>>;
  radiusMatch(
    queryDescriptors: OpenCvSharp.Mat,
    trainDescriptors: OpenCvSharp.Mat,
    maxDistance: number | StrongNumeric<SingleHost>,
    mask: OpenCvSharp.Mat | null,
    compactResult: boolean
  ): HostArray<HostArray<OpenCvSharp.DMatch>>;
}

declare global {
  namespace OpenCvSharp {
    type DescriptorMatcher = import("./DescriptorMatcher").DescriptorMatcher;
  }
}

export interface DescriptorMatcherHostType extends HostType<DescriptorMatcher, ReferenceTypeTrait> {
  create(descriptorMatcherType: string): OpenCvSharp.DescriptorMatcher;
}

export {};
