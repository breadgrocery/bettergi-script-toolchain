import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IEquatable";

declare const yoloConfigurationBrand: unique symbol;
export interface YoloConfiguration extends ClrHostValue {
  readonly [yoloConfigurationBrand]: true;
  applyAutoOrient: boolean;
  confidence: number;
  equals(obj: unknown | null): boolean;
  equals(other: Compunet.YoloSharp.YoloConfiguration | null): boolean;
  getHashCode(): number;
  ioU: number;
  keepAspectRatio: boolean;
  suppressParallelInference: boolean;
}

declare global {
  namespace Compunet.YoloSharp {
    type YoloConfiguration = import("./YoloConfiguration").YoloConfiguration;
  }
}

export interface YoloConfigurationHostType extends HostType<
  YoloConfiguration,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): YoloConfiguration;
  readonly default: Compunet.YoloSharp.YoloConfiguration;
}

export {};
