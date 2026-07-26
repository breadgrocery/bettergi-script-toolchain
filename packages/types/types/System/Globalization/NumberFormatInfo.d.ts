import type {
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../ICloneable";
import "../IFormatProvider";
import "../V8SplitProxyHelpers";
import "./DigitShapes";

declare const numberFormatInfoBrand: unique symbol;
export interface NumberFormatInfo
  extends ClrHostValue, System.IFormatProviderInput, System.ICloneableInput {
  readonly [numberFormatInfoBrand]: true;
  clone(): unknown;
  currencyDecimalDigits: number;
  currencyDecimalSeparator: string;
  currencyGroupSeparator: string;
  currencyGroupSizes: HostArray<number>;
  currencyNegativePattern: number;
  currencyPositivePattern: number;
  currencySymbol: string;
  digitSubstitution: System.Globalization.DigitShapes;
  getFormat(formatType: System.Type | null): unknown;
  naNSymbol: string;
  nativeDigits: HostArray<string>;
  negativeInfinitySymbol: string;
  negativeSign: string;
  numberDecimalDigits: number;
  numberDecimalSeparator: string;
  numberGroupSeparator: string;
  numberGroupSizes: HostArray<number>;
  numberNegativePattern: number;
  perMilleSymbol: string;
  percentDecimalDigits: number;
  percentDecimalSeparator: string;
  percentGroupSeparator: string;
  percentGroupSizes: HostArray<number>;
  percentNegativePattern: number;
  percentPositivePattern: number;
  percentSymbol: string;
  positiveInfinitySymbol: string;
  positiveSign: string;
  readonly isReadOnly: boolean;
}

declare global {
  namespace System.Globalization {
    type NumberFormatInfo = import("./NumberFormatInfo").NumberFormatInfo;
  }
}

export interface NumberFormatInfoHostType extends HostType<
  NumberFormatInfo,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): NumberFormatInfo;
  readonly invariantInfo: System.Globalization.NumberFormatInfo;
  readonly currentInfo: System.Globalization.NumberFormatInfo;
  getInstance(formatProvider: System.IFormatProvider | null): System.Globalization.NumberFormatInfo;
  readOnly(nfi: System.Globalization.NumberFormatInfo): System.Globalization.NumberFormatInfo;
}

export {};
