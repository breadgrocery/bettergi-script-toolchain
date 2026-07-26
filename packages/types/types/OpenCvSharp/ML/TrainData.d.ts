import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const trainDataBrand: unique symbol;
export interface TrainData extends ClrHostValue {
  readonly [trainDataBrand]: true;
}

declare global {
  namespace OpenCvSharp.ML {
    type TrainData = import("./TrainData").TrainData;
  }
}

export interface TrainDataHostType extends HostType<
  TrainData,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): TrainData;
}

export {};
