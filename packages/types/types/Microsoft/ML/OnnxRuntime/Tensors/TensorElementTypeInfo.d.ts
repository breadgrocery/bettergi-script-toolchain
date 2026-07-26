import "../../../../System/V8SplitProxyHelpers";
import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../ClearScript/HostType";

declare const tensorElementTypeInfoBrand: unique symbol;
export interface TensorElementTypeInfo extends ClrHostValue {
  readonly [tensorElementTypeInfoBrand]: true;
  readonly isString: boolean;
  readonly tensorType: System.Type;
  readonly typeSize: number;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime.Tensors {
    type TensorElementTypeInfo = import("./TensorElementTypeInfo").TensorElementTypeInfo;
  }
}

export interface TensorElementTypeInfoHostType extends HostType<
  TensorElementTypeInfo,
  ReferenceTypeTrait
> {
  new (type: System.Type, typeSize: number | StrongNumeric<Int32Host>): TensorElementTypeInfo;
}

export {};
