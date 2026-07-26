import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const backendBrand: unique symbol;
export interface Backend extends ClrHostValue {
  readonly [backendBrand]: true;
}

declare global {
  namespace OpenCvSharp.Dnn {
    type Backend = import("./Backend").Backend;
  }
}

export interface BackendHostType extends HostType<Backend, EnumTypeTrait> {
  readonly default: Backend;
  readonly halide: Backend;
  readonly inferencE_ENGINE: Backend;
  readonly opencv: Backend;
  readonly vkcom: Backend;
  readonly cuda: Backend;
}

export {};
