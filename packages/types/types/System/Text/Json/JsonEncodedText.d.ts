import type {
  ClrHostValue,
  HostType,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../IEquatable";
import "../../ValueType";
import "../Encodings/Web/JavaScriptEncoder";

declare const jsonEncodedTextBrand: unique symbol;
export interface JsonEncodedText extends ClrHostValue {
  readonly [jsonEncodedTextBrand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: System.Text.Json.JsonEncodedText): boolean;
  getHashCode(): number;
  readonly value: string;
  toString(): string;
}

declare global {
  namespace System.Text.Json {
    type JsonEncodedText = import("./JsonEncodedText").JsonEncodedText;
  }
}

export interface JsonEncodedTextHostType extends HostType<JsonEncodedText, ValueTypeTrait> {
  encode(value: string): System.Text.Json.JsonEncodedText;
  encode(
    value: string,
    encoder: System.Text.Encodings.Web.JavaScriptEncoder | null
  ): System.Text.Json.JsonEncodedText;
}

export {};
