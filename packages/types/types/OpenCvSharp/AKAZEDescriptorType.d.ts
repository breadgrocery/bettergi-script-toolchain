import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const aKAZEDescriptorTypeBrand: unique symbol;
export interface AKAZEDescriptorType extends ClrHostValue {
  readonly [aKAZEDescriptorTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type AKAZEDescriptorType = import("./AKAZEDescriptorType").AKAZEDescriptorType;
  }
}

export interface AKAZEDescriptorTypeHostType extends HostType<AKAZEDescriptorType, EnumTypeTrait> {
  readonly kazeUpright: AKAZEDescriptorType;
  readonly kaze: AKAZEDescriptorType;
  readonly mldbUpright: AKAZEDescriptorType;
  readonly mldb: AKAZEDescriptorType;
}

export {};
