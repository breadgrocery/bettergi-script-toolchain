import type { ClrHostValue, HostType, ReferenceTypeTrait } from "../../ClearScript/HostType";
import "./NodeMetadata";

declare const sequenceMetadataBrand: unique symbol;
export interface SequenceMetadata extends ClrHostValue {
  readonly [sequenceMetadataBrand]: true;
  readonly elementMeta: Microsoft.ML.OnnxRuntime.NodeMetadata;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type SequenceMetadata = import("./SequenceMetadata").SequenceMetadata;
  }
}

export interface SequenceMetadataHostType extends HostType<SequenceMetadata, ReferenceTypeTrait> {}

export {};
