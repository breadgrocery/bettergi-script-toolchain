import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../ICvPtrHolder";
import "./IndexParams";

declare const searchParamsBrand: unique symbol;
export interface SearchParams
  extends OpenCvSharp.Flann.IndexParams, System.IDisposableInput, OpenCvSharp.ICvPtrHolderInput {
  readonly [searchParamsBrand]: true;
}

declare global {
  namespace OpenCvSharp.Flann {
    type SearchParams = import("./SearchParams").SearchParams;
  }
}

export interface SearchParamsHostType extends HostType<SearchParams, ReferenceTypeTrait> {
  new (): SearchParams;
  new (checks: number | StrongNumeric<Int32Host>): SearchParams;
  new (
    checks: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<SingleHost>
  ): SearchParams;
  new (
    checks: number | StrongNumeric<Int32Host>,
    eps: number | StrongNumeric<SingleHost>,
    sorted: boolean
  ): SearchParams;
}

export {};
