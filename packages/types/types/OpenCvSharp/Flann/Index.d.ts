import type {
  DoubleHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../DisposableCvObject";
import "../ICvPtrHolder";
import "../InputArray";
import "../Mat";
import "./FlannDistance";
import "./IndexParams";
import "./SearchParams";

declare const indexBrand: unique symbol;
export interface Index
  extends
    Omit<OpenCvSharp.DisposableCvObject, "knnSearch" | "radiusSearch" | "save">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [indexBrand]: true;
  knnSearch(
    queries: HostArray<number | StrongNumeric<SingleHost>>,
    indices: HostVariableOut<HostArray<number>>,
    dists: HostVariableOut<HostArray<number>>,
    knn: number | StrongNumeric<Int32Host>,
    params: OpenCvSharp.Flann.SearchParams
  ): VoidResult;
  knnSearch(
    queries: OpenCvSharp.Mat,
    indices: HostVariableOut<HostArray<number>>,
    dists: HostVariableOut<HostArray<number>>,
    knn: number | StrongNumeric<Int32Host>,
    params: OpenCvSharp.Flann.SearchParams
  ): VoidResult;
  knnSearch(
    queries: OpenCvSharp.Mat,
    indices: OpenCvSharp.Mat,
    dists: OpenCvSharp.Mat,
    knn: number | StrongNumeric<Int32Host>,
    params: OpenCvSharp.Flann.SearchParams
  ): VoidResult;
  radiusSearch(
    queries: HostArray<number | StrongNumeric<SingleHost>>,
    indices: HostArray<number | StrongNumeric<Int32Host>>,
    dists: HostArray<number | StrongNumeric<SingleHost>>,
    radius: number | StrongNumeric<DoubleHost>,
    maxResults: number | StrongNumeric<Int32Host>,
    params: OpenCvSharp.Flann.SearchParams
  ): VoidResult;
  radiusSearch(
    queries: OpenCvSharp.Mat,
    indices: HostArray<number | StrongNumeric<Int32Host>>,
    dists: HostArray<number | StrongNumeric<SingleHost>>,
    radius: number | StrongNumeric<DoubleHost>,
    maxResults: number | StrongNumeric<Int32Host>,
    params: OpenCvSharp.Flann.SearchParams
  ): VoidResult;
  radiusSearch(
    queries: OpenCvSharp.Mat,
    indices: OpenCvSharp.Mat,
    dists: OpenCvSharp.Mat,
    radius: number | StrongNumeric<DoubleHost>,
    maxResults: number | StrongNumeric<Int32Host>,
    params: OpenCvSharp.Flann.SearchParams
  ): VoidResult;
  save(filename: string): VoidResult;
}

declare global {
  namespace OpenCvSharp.Flann {
    type Index = import("./Index").Index;
  }
}

export interface IndexHostType extends HostType<Index, ReferenceTypeTrait> {
  new (features: OpenCvSharp.InputArray, params: OpenCvSharp.Flann.IndexParams): Index;
  new (
    features: OpenCvSharp.InputArray,
    params: OpenCvSharp.Flann.IndexParams,
    distType: EnumInput<OpenCvSharp.Flann.FlannDistance>
  ): Index;
}

export {};
