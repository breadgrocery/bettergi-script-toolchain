import "../../../System/V8SplitProxyHelpers";
import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../ClearScript/HostType";
import "./MapMetadata";
import "./OnnxValueType";
import "./OptionalMetadata";
import "./SequenceMetadata";
import "./Tensors/TensorElementType";

declare const nodeMetadataBrand: unique symbol;
export interface NodeMetadata extends ClrHostValue {
  readonly [nodeMetadataBrand]: true;
  asMapMetadata(): Microsoft.ML.OnnxRuntime.MapMetadata;
  asOptionalMetadata(): Microsoft.ML.OnnxRuntime.OptionalMetadata;
  asSequenceMetadata(): Microsoft.ML.OnnxRuntime.SequenceMetadata;
  readonly dimensions: HostArray<number>;
  readonly elementDataType: Microsoft.ML.OnnxRuntime.Tensors.TensorElementType;
  readonly elementType: System.Type;
  readonly isString: boolean;
  readonly isTensor: boolean;
  readonly onnxValueType: Microsoft.ML.OnnxRuntime.OnnxValueType;
  readonly symbolicDimensions: HostArray<string>;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type NodeMetadata = import("./NodeMetadata").NodeMetadata;
  }
}

export interface NodeMetadataHostType extends HostType<NodeMetadata, ReferenceTypeTrait> {}

export {};
