import type {
  ClrHostValue,
  EnumInput,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../ClearScript/HostType";
import "./TensorElementType";

declare const tensorTypeInfoBrand: unique symbol;
export interface TensorTypeInfo extends ClrHostValue {
  readonly [tensorTypeInfoBrand]: true;
  readonly elementType: Microsoft.ML.OnnxRuntime.Tensors.TensorElementType;
  readonly isString: boolean;
  readonly typeSize: number;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime.Tensors {
    type TensorTypeInfo = import("./TensorTypeInfo").TensorTypeInfo;
  }
}

export interface TensorTypeInfoHostType extends HostType<TensorTypeInfo, ReferenceTypeTrait> {
  new (
    elementType: EnumInput<Microsoft.ML.OnnxRuntime.Tensors.TensorElementType>,
    typeSize: number | StrongNumeric<Int32Host>
  ): TensorTypeInfo;
}

export {};
