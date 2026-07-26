import type { ClrHostValue, HostType, ReferenceTypeTrait } from "../../ClearScript/HostType";
import "./NodeMetadata";

declare const optionalMetadataBrand: unique symbol;
export interface OptionalMetadata extends ClrHostValue {
  readonly [optionalMetadataBrand]: true;
  readonly elementMeta: Microsoft.ML.OnnxRuntime.NodeMetadata;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OptionalMetadata = import("./OptionalMetadata").OptionalMetadata;
  }
}

export interface OptionalMetadataHostType extends HostType<OptionalMetadata, ReferenceTypeTrait> {}

export {};
