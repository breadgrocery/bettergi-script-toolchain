import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const validationTypeBrand: unique symbol;
export interface ValidationType extends ClrHostValue {
  readonly [validationTypeBrand]: true;
}

declare global {
  namespace System.Xml {
    type ValidationType = import("./ValidationType").ValidationType;
  }
}

export interface ValidationTypeHostType extends HostType<ValidationType, EnumTypeTrait> {
  readonly none: ValidationType;
  readonly auto: ValidationType;
  readonly dtd: ValidationType;
  readonly xdr: ValidationType;
  readonly schema: ValidationType;
}

export {};
