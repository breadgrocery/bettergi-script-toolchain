import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const connectedComponentsTypesBrand: unique symbol;
export interface ConnectedComponentsTypes extends ClrHostValue {
  readonly [connectedComponentsTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ConnectedComponentsTypes = import("./ConnectedComponentsTypes").ConnectedComponentsTypes;
  }
}

export interface ConnectedComponentsTypesHostType extends HostType<
  ConnectedComponentsTypes,
  EnumTypeTrait
> {
  readonly left: ConnectedComponentsTypes;
  readonly top: ConnectedComponentsTypes;
  readonly width: ConnectedComponentsTypes;
  readonly height: ConnectedComponentsTypes;
  readonly area: ConnectedComponentsTypes;
}

export {};
