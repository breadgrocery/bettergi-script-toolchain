import type {
  CharHost,
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../Collections/Generic/IEnumerable";
import "../../Unicode/UnicodeRange";

declare const textEncoderSettingsBrand: unique symbol;
export interface TextEncoderSettings extends ClrHostValue {
  readonly [textEncoderSettingsBrand]: true;
  allowCharacter(character: number | StrongNumeric<CharHost>): VoidResult;
  allowCharacters(...characters: (number | StrongNumeric<CharHost>)[]): VoidResult;
  allowCharacters(characters: HostArray<number | StrongNumeric<CharHost>>): VoidResult;
  allowCodePoints(codePoints: System.Collections.Generic.IEnumerable<number>): VoidResult;
  allowRange(range: System.Text.Unicode.UnicodeRange): VoidResult;
  allowRanges(...ranges: System.Text.Unicode.UnicodeRange[]): VoidResult;
  allowRanges(ranges: HostArray<System.Text.Unicode.UnicodeRange>): VoidResult;
  clear(): VoidResult;
  forbidCharacter(character: number | StrongNumeric<CharHost>): VoidResult;
  forbidCharacters(...characters: (number | StrongNumeric<CharHost>)[]): VoidResult;
  forbidCharacters(characters: HostArray<number | StrongNumeric<CharHost>>): VoidResult;
  forbidRange(range: System.Text.Unicode.UnicodeRange): VoidResult;
  forbidRanges(...ranges: System.Text.Unicode.UnicodeRange[]): VoidResult;
  forbidRanges(ranges: HostArray<System.Text.Unicode.UnicodeRange>): VoidResult;
  getAllowedCodePoints(): System.Collections.Generic.IEnumerable<number>;
}

declare global {
  namespace System.Text.Encodings.Web {
    type TextEncoderSettings = import("./TextEncoderSettings").TextEncoderSettings;
  }
}

export interface TextEncoderSettingsHostType extends HostType<
  TextEncoderSettings,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): TextEncoderSettings;
  new (other: System.Text.Encodings.Web.TextEncoderSettings): TextEncoderSettings;
  new (allowedRanges: HostArray<System.Text.Unicode.UnicodeRange>): TextEncoderSettings;
  new (...allowedRanges: System.Text.Unicode.UnicodeRange[]): TextEncoderSettings;
}

export {};
