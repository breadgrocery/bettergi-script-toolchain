import type {
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../ICloneable";
import "../IFormatProvider";
import "../V8SplitProxyHelpers";
import "./Calendar";
import "./CompareInfo";
import "./CultureTypes";
import "./DateTimeFormatInfo";
import "./NumberFormatInfo";
import "./TextInfo";

declare const cultureInfoBrand: unique symbol;
export interface CultureInfo
  extends ClrHostValue, System.IFormatProviderInput, System.ICloneableInput {
  readonly [cultureInfoBrand]: true;
  clearCachedData(): VoidResult;
  clone(): unknown;
  dateTimeFormat: System.Globalization.DateTimeFormatInfo;
  equals(value: unknown | null): boolean;
  getConsoleFallbackUICulture(): System.Globalization.CultureInfo;
  getFormat(formatType: System.Type | null): unknown;
  getHashCode(): number;
  numberFormat: System.Globalization.NumberFormatInfo;
  readonly calendar: System.Globalization.Calendar;
  readonly compareInfo: System.Globalization.CompareInfo;
  readonly cultureTypes: System.Globalization.CultureTypes;
  readonly displayName: string;
  readonly englishName: string;
  readonly ietfLanguageTag: string;
  readonly isNeutralCulture: boolean;
  readonly isReadOnly: boolean;
  readonly keyboardLayoutId: number;
  readonly lcid: number;
  readonly name: string;
  readonly nativeName: string;
  readonly optionalCalendars: HostArray<System.Globalization.Calendar>;
  readonly parent: System.Globalization.CultureInfo;
  readonly textInfo: System.Globalization.TextInfo;
  readonly threeLetterISOLanguageName: string;
  readonly threeLetterWindowsLanguageName: string;
  readonly twoLetterISOLanguageName: string;
  readonly useUserOverride: boolean;
  toString(): string;
}

declare global {
  namespace System.Globalization {
    type CultureInfo = import("./CultureInfo").CultureInfo;
  }
}

export interface CultureInfoHostType extends HostType<CultureInfo, ReferenceTypeTrait> {
  new (name: string): CultureInfo;
  new (name: string, useUserOverride: boolean): CultureInfo;
  new (culture: number | StrongNumeric<Int32Host>): CultureInfo;
  new (culture: number | StrongNumeric<Int32Host>, useUserOverride: boolean): CultureInfo;
  currentCulture: System.Globalization.CultureInfo;
  currentUICulture: System.Globalization.CultureInfo;
  readonly installedUICulture: System.Globalization.CultureInfo;
  defaultThreadCurrentCulture: System.Globalization.CultureInfo;
  defaultThreadCurrentUICulture: System.Globalization.CultureInfo;
  readonly invariantCulture: System.Globalization.CultureInfo;
  createSpecificCulture(name: string): System.Globalization.CultureInfo;
  getCultures(
    types: EnumInput<System.Globalization.CultureTypes>
  ): HostArray<System.Globalization.CultureInfo>;
  readOnly(ci: System.Globalization.CultureInfo): System.Globalization.CultureInfo;
  getCultureInfo(culture: number | StrongNumeric<Int32Host>): System.Globalization.CultureInfo;
  getCultureInfo(name: string): System.Globalization.CultureInfo;
  getCultureInfo(name: string, altName: string): System.Globalization.CultureInfo;
  getCultureInfo(name: string, predefinedOnly: boolean): System.Globalization.CultureInfo;
  getCultureInfoByIetfLanguageTag(name: string): System.Globalization.CultureInfo;
}

export {};
