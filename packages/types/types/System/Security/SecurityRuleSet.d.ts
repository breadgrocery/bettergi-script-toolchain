import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const securityRuleSetBrand: unique symbol;
export interface SecurityRuleSet extends ClrHostValue {
  readonly [securityRuleSetBrand]: true;
}

declare global {
  namespace System.Security {
    type SecurityRuleSet = import("./SecurityRuleSet").SecurityRuleSet;
  }
}

export interface SecurityRuleSetHostType extends HostType<SecurityRuleSet, EnumTypeTrait> {
  readonly none: SecurityRuleSet;
  readonly level1: SecurityRuleSet;
  readonly level2: SecurityRuleSet;
}

export {};
