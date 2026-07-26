import type {
  ByteHost,
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "./Metadata/YoloMetadata";
import "./YoloConfiguration";
import "./YoloPredictorOptions";

declare const yoloPredictorBrand: unique symbol;
export interface YoloPredictor extends ClrHostValue, System.IDisposableInput {
  readonly [yoloPredictorBrand]: true;
  dispose(): VoidResult;
  readonly configuration: Compunet.YoloSharp.YoloConfiguration;
  readonly metadata: Compunet.YoloSharp.Metadata.YoloMetadata;
}

declare global {
  namespace Compunet.YoloSharp {
    type YoloPredictor = import("./YoloPredictor").YoloPredictor;
  }
}

export interface YoloPredictorHostType extends HostType<YoloPredictor, ReferenceTypeTrait> {
  new (path: string): YoloPredictor;
  new (model: HostArray<number | StrongNumeric<ByteHost>>): YoloPredictor;
  new (path: string, options: Compunet.YoloSharp.YoloPredictorOptions): YoloPredictor;
  new (
    model: HostArray<number | StrongNumeric<ByteHost>>,
    options: Compunet.YoloSharp.YoloPredictorOptions
  ): YoloPredictor;
}

export {};
