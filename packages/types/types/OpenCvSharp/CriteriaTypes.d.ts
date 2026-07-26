import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const criteriaTypesBrand: unique symbol;
export interface CriteriaTypes extends ClrHostValue {
  readonly [criteriaTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type CriteriaTypes = import("./CriteriaTypes").CriteriaTypes;
  }
}

export interface CriteriaTypesHostType extends HostType<CriteriaTypes, EnumTypeTrait> {
  readonly count: CriteriaTypes;
  readonly maxIter: CriteriaTypes;
  readonly eps: CriteriaTypes;
}

export {};
