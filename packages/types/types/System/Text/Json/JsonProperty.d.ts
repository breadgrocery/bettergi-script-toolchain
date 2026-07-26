import type {
  ClrHostValue,
  HostType,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../ValueType";
import "./JsonElement";
import "./Utf8JsonWriter";

declare const jsonPropertyBrand: unique symbol;
export interface JsonProperty extends ClrHostValue {
  readonly [jsonPropertyBrand]: true;
  nameEquals(text: string | null): boolean;
  readonly name: string;
  readonly value: System.Text.Json.JsonElement;
  toString(): string;
  writeTo(writer: System.Text.Json.Utf8JsonWriter): VoidResult;
}

declare global {
  namespace System.Text.Json {
    type JsonProperty = import("./JsonProperty").JsonProperty;
  }
}

export interface JsonPropertyHostType extends HostType<JsonProperty, ValueTypeTrait> {}

export {};
