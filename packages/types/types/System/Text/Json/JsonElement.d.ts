import type {
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/Generic/IEnumerator";
import "../../Collections/IEnumerable";
import "../../Collections/IEnumerator";
import "../../DateTime";
import "../../DateTimeOffset";
import "../../Guid";
import "../../IDisposable";
import "../../Nullable";
import "../../ValueType";
import "./JsonProperty";
import "./JsonValueKind";
import "./Utf8JsonWriter";

declare const jsonElementBrand: unique symbol;
export interface JsonElement extends ClrHostValue {
  readonly [jsonElementBrand]: true;
  clone(): System.Text.Json.JsonElement;
  enumerateArray(): JsonElement_ArrayEnumerator;
  enumerateObject(): JsonElement_ObjectEnumerator;
  getArrayLength(): number;
  getBoolean(): boolean;
  getByte(): number;
  getBytesFromBase64(): HostArray<number>;
  getDateTime(): System.DateTime;
  getDateTimeOffset(): System.DateTimeOffset;
  getDecimal(): number;
  getDouble(): number;
  getGuid(): System.Guid;
  getInt16(): number;
  getInt32(): number;
  getInt64(): number;
  getProperty(propertyName: string): System.Text.Json.JsonElement;
  getPropertyCount(): number;
  getRawText(): string;
  getSByte(): number;
  getSingle(): number;
  getString(): string;
  getUInt16(): number;
  getUInt32(): number;
  getUInt64(): number;
  item: {
    (index: number | StrongNumeric<Int32Host>): System.Text.Json.JsonElement;
    get(index: number | StrongNumeric<Int32Host>): System.Text.Json.JsonElement;
  };
  readonly valueKind: System.Text.Json.JsonValueKind;
  toString(): string;
  tryGetByte(value: HostVariableOut<number>): boolean;
  tryGetBytesFromBase64(value: HostVariableOut<HostArray<number>>): boolean;
  tryGetDateTime(value: HostVariableOut<System.DateTime>): boolean;
  tryGetDateTimeOffset(value: HostVariableOut<System.DateTimeOffset>): boolean;
  tryGetDecimal(value: HostVariableOut<number>): boolean;
  tryGetDouble(value: HostVariableOut<number>): boolean;
  tryGetGuid(value: HostVariableOut<System.Guid>): boolean;
  tryGetInt16(value: HostVariableOut<number>): boolean;
  tryGetInt32(value: HostVariableOut<number>): boolean;
  tryGetInt64(value: HostVariableOut<number>): boolean;
  tryGetProperty(
    propertyName: string,
    value: HostVariableOut<System.Text.Json.JsonElement>
  ): boolean;
  tryGetSByte(value: HostVariableOut<number>): boolean;
  tryGetSingle(value: HostVariableOut<number>): boolean;
  tryGetUInt16(value: HostVariableOut<number>): boolean;
  tryGetUInt32(value: HostVariableOut<number>): boolean;
  tryGetUInt64(value: HostVariableOut<number>): boolean;
  valueEquals(text: string | null): boolean;
  writeTo(writer: System.Text.Json.Utf8JsonWriter): VoidResult;
}

declare const jsonElement_ArrayEnumeratorBrand: unique symbol;
export interface JsonElement_ArrayEnumerator
  extends
    ClrHostValue,
    System.Collections.Generic.IEnumerableInput<System.Text.Json.JsonElement>,
    System.Collections.IEnumerableInput,
    System.Collections.Generic.IEnumeratorInput<System.Text.Json.JsonElement>,
    System.IDisposableInput,
    System.Collections.IEnumeratorInput {
  readonly [jsonElement_ArrayEnumeratorBrand]: true;
  dispose(): VoidResult;
  getEnumerator(): System.Text.Json.JsonElement.ArrayEnumerator;
  moveNext(): boolean;
  readonly current: System.Text.Json.JsonElement;
  reset(): VoidResult;
}

export interface JsonElement_ArrayEnumeratorHostType extends HostType<
  JsonElement_ArrayEnumerator,
  ValueTypeTrait
> {}

declare global {
  namespace System.Text.Json.JsonElement {
    type ArrayEnumerator = import("./JsonElement").JsonElement_ArrayEnumerator;
  }
}

declare const jsonElement_ObjectEnumeratorBrand: unique symbol;
export interface JsonElement_ObjectEnumerator
  extends
    ClrHostValue,
    System.Collections.Generic.IEnumerableInput<System.Text.Json.JsonProperty>,
    System.Collections.IEnumerableInput,
    System.Collections.Generic.IEnumeratorInput<System.Text.Json.JsonProperty>,
    System.IDisposableInput,
    System.Collections.IEnumeratorInput {
  readonly [jsonElement_ObjectEnumeratorBrand]: true;
  dispose(): VoidResult;
  getEnumerator(): System.Text.Json.JsonElement.ObjectEnumerator;
  moveNext(): boolean;
  readonly current: System.Text.Json.JsonProperty;
  reset(): VoidResult;
}

export interface JsonElement_ObjectEnumeratorHostType extends HostType<
  JsonElement_ObjectEnumerator,
  ValueTypeTrait
> {}

declare global {
  namespace System.Text.Json.JsonElement {
    type ObjectEnumerator = import("./JsonElement").JsonElement_ObjectEnumerator;
  }
}

declare global {
  namespace System.Text.Json {
    type JsonElement = import("./JsonElement").JsonElement;
  }
}

export interface JsonElementHostType extends HostType<JsonElement, ValueTypeTrait> {
  deepEquals(
    element1: System.Text.Json.JsonElement,
    element2: System.Text.Json.JsonElement
  ): boolean;
  readonly ArrayEnumerator: JsonElement_ArrayEnumeratorHostType;
  readonly ObjectEnumerator: JsonElement_ObjectEnumeratorHostType;
}

export {};
