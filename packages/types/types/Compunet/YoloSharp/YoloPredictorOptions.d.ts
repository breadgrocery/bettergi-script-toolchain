import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../Microsoft/ML/OnnxRuntime/SessionOptions";
import "./YoloConfiguration";

declare const yoloPredictorOptionsBrand: unique symbol;
export interface YoloPredictorOptions extends ClrHostValue {
  readonly [yoloPredictorOptionsBrand]: true;
  configuration: Compunet.YoloSharp.YoloConfiguration;
  cudaDeviceId: number;
  sessionOptions: Microsoft.ML.OnnxRuntime.SessionOptions;
  useCuda: boolean;
}

declare global {
  namespace Compunet.YoloSharp {
    type YoloPredictorOptions = import("./YoloPredictorOptions").YoloPredictorOptions;
  }
}

export interface YoloPredictorOptionsHostType extends HostType<
  YoloPredictorOptions,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): YoloPredictorOptions;
  readonly default: Compunet.YoloSharp.YoloPredictorOptions;
}

export {};
