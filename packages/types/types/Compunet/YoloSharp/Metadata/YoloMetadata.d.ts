import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../Microsoft/ML/OnnxRuntime/InferenceSession";
import "../../../SixLabors/ImageSharp/Size";
import "./YoloArchitecture";
import "./YoloName";
import "./YoloTask";

declare const yoloMetadataBrand: unique symbol;
export interface YoloMetadata extends ClrHostValue {
  readonly [yoloMetadataBrand]: true;
  readonly architecture: Compunet.YoloSharp.Metadata.YoloArchitecture;
  readonly author: string;
  readonly batchSize: number;
  readonly description: string;
  readonly imageSize: SixLabors.ImageSharp.Size;
  readonly names: HostArray<Compunet.YoloSharp.Metadata.YoloName>;
  readonly task: Compunet.YoloSharp.Metadata.YoloTask;
  readonly version: string;
}

declare global {
  namespace Compunet.YoloSharp.Metadata {
    type YoloMetadata = import("./YoloMetadata").YoloMetadata;
  }
}

export interface YoloMetadataHostType extends HostType<YoloMetadata, ReferenceTypeTrait> {
  parse(
    session: Microsoft.ML.OnnxRuntime.InferenceSession
  ): Compunet.YoloSharp.Metadata.YoloMetadata;
}

export {};
