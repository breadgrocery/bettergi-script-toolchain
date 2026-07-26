import type {
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../ICloneable";
import "../IDisposable";
import "../MarshalByRefObject";
import "./CharacterRange";
import "./StringAlignment";
import "./StringDigitSubstitute";
import "./StringFormatFlags";
import "./StringTrimming";
import "./Text/HotkeyPrefix";

declare const stringFormatBrand: unique symbol;
export interface StringFormat
  extends
    Omit<
      System.MarshalByRefObject,
      | "alignment"
      | "clone"
      | "digitSubstitutionLanguage"
      | "digitSubstitutionMethod"
      | "dispose"
      | "formatFlags"
      | "getTabStops"
      | "hotkeyPrefix"
      | "lineAlignment"
      | "setDigitSubstitution"
      | "setMeasurableCharacterRanges"
      | "setTabStops"
      | "toString"
      | "trimming"
    >,
    System.ICloneableInput,
    System.IDisposableInput {
  readonly [stringFormatBrand]: true;
  alignment: System.Drawing.StringAlignment;
  clone(): unknown;
  dispose(): VoidResult;
  formatFlags: System.Drawing.StringFormatFlags;
  getTabStops(firstTabOffset: HostVariableOut<number>): HostArray<number>;
  hotkeyPrefix: System.Drawing.Text.HotkeyPrefix;
  lineAlignment: System.Drawing.StringAlignment;
  readonly digitSubstitutionLanguage: number;
  readonly digitSubstitutionMethod: System.Drawing.StringDigitSubstitute;
  setDigitSubstitution(
    language: number | StrongNumeric<Int32Host>,
    substitute: EnumInput<System.Drawing.StringDigitSubstitute>
  ): VoidResult;
  setMeasurableCharacterRanges(ranges: HostArray<System.Drawing.CharacterRange>): VoidResult;
  setTabStops(
    firstTabOffset: number | StrongNumeric<SingleHost>,
    tabStops: HostArray<number | StrongNumeric<SingleHost>>
  ): VoidResult;
  toString(): string;
  trimming: System.Drawing.StringTrimming;
}

declare global {
  namespace System.Drawing {
    type StringFormat = import("./StringFormat").StringFormat;
  }
}

export interface StringFormatHostType extends HostType<
  StringFormat,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): StringFormat;
  new (options: EnumInput<System.Drawing.StringFormatFlags>): StringFormat;
  new (
    options: EnumInput<System.Drawing.StringFormatFlags>,
    language: number | StrongNumeric<Int32Host>
  ): StringFormat;
  new (format: System.Drawing.StringFormat): StringFormat;
  readonly genericDefault: System.Drawing.StringFormat;
  readonly genericTypographic: System.Drawing.StringFormat;
}

export {};
