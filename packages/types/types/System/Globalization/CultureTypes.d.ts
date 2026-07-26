import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const cultureTypesBrand: unique symbol;
export interface CultureTypes extends ClrHostValue {
  readonly [cultureTypesBrand]: true;
}

declare global {
  namespace System.Globalization {
    type CultureTypes = import("./CultureTypes").CultureTypes;
  }
}

export interface CultureTypesHostType extends HostType<CultureTypes, EnumTypeTrait> {
  readonly neutralCultures: CultureTypes;
  readonly specificCultures: CultureTypes;
  readonly installedWin32Cultures: CultureTypes;
  readonly allCultures: CultureTypes;
  readonly userCustomCulture: CultureTypes;
  readonly replacementCultures: CultureTypes;
  readonly windowsOnlyCultures: CultureTypes;
  readonly frameworkCultures: CultureTypes;
}

export {};
