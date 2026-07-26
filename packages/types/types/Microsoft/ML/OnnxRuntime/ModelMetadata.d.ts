import "../../../System/Collections/Generic/Dictionary";
import type { ClrHostValue, HostType, ReferenceTypeTrait } from "../../ClearScript/HostType";

declare const modelMetadataBrand: unique symbol;
export interface ModelMetadata extends ClrHostValue {
  readonly [modelMetadataBrand]: true;
  readonly customMetadataMap: System.Collections.Generic.Dictionary<string, string>;
  readonly description: string;
  readonly domain: string;
  readonly graphDescription: string;
  readonly graphName: string;
  readonly producerName: string;
  readonly version: number;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type ModelMetadata = import("./ModelMetadata").ModelMetadata;
  }
}

export interface ModelMetadataHostType extends HostType<ModelMetadata, ReferenceTypeTrait> {}

export {};
