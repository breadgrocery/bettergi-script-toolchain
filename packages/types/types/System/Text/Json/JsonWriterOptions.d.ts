import type {
  ClrHostValue,
  HostType,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../ValueType";
import "../Encodings/Web/JavaScriptEncoder";

declare const jsonWriterOptionsBrand: unique symbol;
export interface JsonWriterOptions extends ClrHostValue {
  readonly [jsonWriterOptionsBrand]: true;
  encoder: System.Text.Encodings.Web.JavaScriptEncoder;
  indentCharacter: number;
  indentSize: number;
  indented: boolean;
  maxDepth: number;
  newLine: string;
  skipValidation: boolean;
}

declare global {
  namespace System.Text.Json {
    type JsonWriterOptions = import("./JsonWriterOptions").JsonWriterOptions;
  }
}

export interface JsonWriterOptionsHostType extends HostType<JsonWriterOptions, ValueTypeTrait> {}

export {};
