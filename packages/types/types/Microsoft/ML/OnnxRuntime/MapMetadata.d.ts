import type { ClrHostValue, HostType, ReferenceTypeTrait } from "../../ClearScript/HostType";
import "./NodeMetadata";
import "./Tensors/TensorElementType";

declare const mapMetadataBrand: unique symbol;
export interface MapMetadata extends ClrHostValue {
  readonly [mapMetadataBrand]: true;
  readonly keyDataType: Microsoft.ML.OnnxRuntime.Tensors.TensorElementType;
  readonly valueMetadata: Microsoft.ML.OnnxRuntime.NodeMetadata;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type MapMetadata = import("./MapMetadata").MapMetadata;
  }
}

export interface MapMetadataHostType extends HostType<MapMetadata, ReferenceTypeTrait> {}

export {};
