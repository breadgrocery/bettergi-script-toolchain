import type {
  ClrHostValue,
  EnumInput,
  EnumTypeTrait,
  HostType,
  ValueTypeTrait
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/Enum";
import "../../../../../System/IComparable";
import "../../../../../System/IConvertible";
import "../../../../../System/IEquatable";
import "../../../../../System/IFormattable";
import "../../../../../System/ISpanFormattable";
import "../../../../../System/ValueType";

declare const encodedStringBrand: unique symbol;
export interface EncodedString extends ClrHostValue {
  readonly [encodedStringBrand]: true;
  readonly code: EncodedString_CharacterCode;
  readonly text: string;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.Metadata.Profiles.Exif.EncodedString): boolean;
  getHashCode(): number;
  toString(): string;
}

declare const encodedString_CharacterCodeBrand: unique symbol;
export interface EncodedString_CharacterCode extends ClrHostValue {
  readonly [encodedString_CharacterCodeBrand]: true;
}

export interface EncodedString_CharacterCodeHostType extends HostType<
  EncodedString_CharacterCode,
  EnumTypeTrait
> {
  readonly ascii: EncodedString_CharacterCode;
  readonly jis: EncodedString_CharacterCode;
  readonly unicode: EncodedString_CharacterCode;
  readonly undefined: EncodedString_CharacterCode;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Exif.EncodedString {
    type CharacterCode = import("./EncodedString").EncodedString_CharacterCode;
  }
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Exif {
    type EncodedString = import("./EncodedString").EncodedString;
  }
}

export interface EncodedStringHostType extends HostType<EncodedString, ValueTypeTrait> {
  new (text: string): EncodedString;
  new (code: EnumInput<EncodedString_CharacterCode>, text: string): EncodedString;
  readonly CharacterCode: EncodedString_CharacterCodeHostType;
}

export {};
