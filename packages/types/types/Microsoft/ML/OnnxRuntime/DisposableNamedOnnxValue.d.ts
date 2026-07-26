import "../../../System/IDisposable";
import type { HostType, ReferenceTypeTrait } from "../../ClearScript/HostType";
import type { VoidResult } from "../../ClearScript/VoidResult";
import "./NamedOnnxValue";
import "./Tensors/TensorElementType";

declare const disposableNamedOnnxValueBrand: unique symbol;
export interface DisposableNamedOnnxValue
  extends
    Omit<Microsoft.ML.OnnxRuntime.NamedOnnxValue, "dispose" | "elementType">,
    System.IDisposableInput {
  readonly [disposableNamedOnnxValueBrand]: true;
  dispose(): VoidResult;
  readonly elementType: Microsoft.ML.OnnxRuntime.Tensors.TensorElementType;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type DisposableNamedOnnxValue = import("./DisposableNamedOnnxValue").DisposableNamedOnnxValue;
  }
}

export interface DisposableNamedOnnxValueHostType extends HostType<
  DisposableNamedOnnxValue,
  ReferenceTypeTrait
> {}

export {};
