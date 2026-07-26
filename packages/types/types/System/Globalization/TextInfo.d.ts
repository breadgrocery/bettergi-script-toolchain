import type {
  CharHost,
  ClrHostValue,
  HostType,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../ICloneable";
import "../Runtime/Serialization/IDeserializationCallback";

declare const textInfoBrand: unique symbol;
export interface TextInfo
  extends
    ClrHostValue,
    System.ICloneableInput,
    System.Runtime.Serialization.IDeserializationCallbackInput {
  readonly [textInfoBrand]: true;
  clone(): unknown;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  listSeparator: string;
  readonly ansiCodePage: number;
  readonly cultureName: string;
  readonly ebcdicCodePage: number;
  readonly isReadOnly: boolean;
  readonly isRightToLeft: boolean;
  readonly lcid: number;
  readonly macCodePage: number;
  readonly oemCodePage: number;
  toLower(c: number | StrongNumeric<CharHost>): number;
  toLower(str: string): string;
  toString(): string;
  toTitleCase(str: string): string;
  toUpper(c: number | StrongNumeric<CharHost>): number;
  toUpper(str: string): string;
}

declare global {
  namespace System.Globalization {
    type TextInfo = import("./TextInfo").TextInfo;
  }
}

export interface TextInfoHostType extends HostType<TextInfo, ReferenceTypeTrait> {
  readOnly(textInfo: System.Globalization.TextInfo): System.Globalization.TextInfo;
}

export {};
