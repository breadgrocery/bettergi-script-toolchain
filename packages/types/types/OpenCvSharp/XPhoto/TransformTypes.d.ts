import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const transformTypesBrand: unique symbol;
export interface TransformTypes extends ClrHostValue {
  readonly [transformTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp.XPhoto {
    type TransformTypes = import("./TransformTypes").TransformTypes;
  }
}

export interface TransformTypesHostType extends HostType<TransformTypes, EnumTypeTrait> {
  readonly haar: TransformTypes;
}

export {};
