import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const jsonValueKindBrand: unique symbol;
export interface JsonValueKind extends ClrHostValue {
  readonly [jsonValueKindBrand]: true;
}

declare global {
  namespace System.Text.Json {
    type JsonValueKind = import("./JsonValueKind").JsonValueKind;
  }
}

export interface JsonValueKindHostType extends HostType<JsonValueKind, EnumTypeTrait> {
  readonly undefined: JsonValueKind;
  readonly object: JsonValueKind;
  readonly array: JsonValueKind;
  readonly string: JsonValueKind;
  readonly number: JsonValueKind;
  readonly true: JsonValueKind;
  readonly false: JsonValueKind;
  readonly null: JsonValueKind;
}

export {};
