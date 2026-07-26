import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const connectedComponentsAlgorithmsTypesBrand: unique symbol;
export interface ConnectedComponentsAlgorithmsTypes extends ClrHostValue {
  readonly [connectedComponentsAlgorithmsTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ConnectedComponentsAlgorithmsTypes =
      import("./ConnectedComponentsAlgorithmsTypes").ConnectedComponentsAlgorithmsTypes;
  }
}

export interface ConnectedComponentsAlgorithmsTypesHostType extends HostType<
  ConnectedComponentsAlgorithmsTypes,
  EnumTypeTrait
> {
  readonly wu: ConnectedComponentsAlgorithmsTypes;
  readonly default: ConnectedComponentsAlgorithmsTypes;
  readonly grana: ConnectedComponentsAlgorithmsTypes;
  readonly bolelli: ConnectedComponentsAlgorithmsTypes;
  readonly sauf: ConnectedComponentsAlgorithmsTypes;
  readonly bbdt: ConnectedComponentsAlgorithmsTypes;
  readonly spaghetti: ConnectedComponentsAlgorithmsTypes;
}

export {};
