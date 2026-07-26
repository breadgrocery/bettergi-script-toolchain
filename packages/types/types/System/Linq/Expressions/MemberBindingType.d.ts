import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const memberBindingTypeBrand: unique symbol;
export interface MemberBindingType extends ClrHostValue {
  readonly [memberBindingTypeBrand]: true;
}

declare global {
  namespace System.Linq.Expressions {
    type MemberBindingType = import("./MemberBindingType").MemberBindingType;
  }
}

export interface MemberBindingTypeHostType extends HostType<MemberBindingType, EnumTypeTrait> {
  readonly assignment: MemberBindingType;
  readonly memberBinding: MemberBindingType;
  readonly listBinding: MemberBindingType;
}

export {};
