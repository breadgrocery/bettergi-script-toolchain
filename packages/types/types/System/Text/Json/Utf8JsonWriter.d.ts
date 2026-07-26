import type {
  ClrHostValue,
  DecimalHost,
  DoubleHost,
  HostType,
  Int32Host,
  Int64Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric,
  UInt32Host,
  UInt64Host
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Buffers/IBufferWriter";
import "../../Buffers/ReadOnlySequence";
import "../../DateTime";
import "../../DateTimeOffset";
import "../../Guid";
import "../../IAsyncDisposable";
import "../../IDisposable";
import "../../IO/Stream";
import "../../Threading/CancellationToken";
import "../../Threading/Tasks/ValueTask";
import "./JsonEncodedText";
import "./JsonWriterOptions";

declare const utf8JsonWriterBrand: unique symbol;
export interface Utf8JsonWriter
  extends ClrHostValue, System.IDisposableInput, System.IAsyncDisposableInput {
  readonly [utf8JsonWriterBrand]: true;
  dispose(): VoidResult;
  disposeAsync(): System.Threading.Tasks.ValueTask;
  flush(): VoidResult;
  flushAsync(): Promise<void>;
  flushAsync(cancellationToken: System.Threading.CancellationToken): Promise<void>;
  readonly bytesCommitted: number;
  readonly bytesPending: number;
  readonly currentDepth: number;
  readonly options: System.Text.Json.JsonWriterOptions;
  reset(): VoidResult;
  reset(bufferWriter: System.Buffers.IBufferWriter<number>): VoidResult;
  reset(utf8Json: System.IO.Stream): VoidResult;
  writeBoolean(propertyName: System.Text.Json.JsonEncodedText, value: boolean): VoidResult;
  writeBoolean(propertyName: string, value: boolean): VoidResult;
  writeBooleanValue(value: boolean): VoidResult;
  writeCommentValue(value: string): VoidResult;
  writeEndArray(): VoidResult;
  writeEndObject(): VoidResult;
  writeNull(propertyName: System.Text.Json.JsonEncodedText): VoidResult;
  writeNull(propertyName: string): VoidResult;
  writeNullValue(): VoidResult;
  writeNumber(
    propertyName: System.Text.Json.JsonEncodedText,
    value: number | StrongNumeric<DecimalHost>
  ): VoidResult;
  writeNumber(
    propertyName: System.Text.Json.JsonEncodedText,
    value: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  writeNumber(
    propertyName: System.Text.Json.JsonEncodedText,
    value: number | StrongNumeric<Int32Host>
  ): VoidResult;
  writeNumber(
    propertyName: System.Text.Json.JsonEncodedText,
    value: number | StrongNumeric<Int64Host>
  ): VoidResult;
  writeNumber(
    propertyName: System.Text.Json.JsonEncodedText,
    value: number | StrongNumeric<SingleHost>
  ): VoidResult;
  writeNumber(
    propertyName: System.Text.Json.JsonEncodedText,
    value: number | StrongNumeric<UInt32Host>
  ): VoidResult;
  writeNumber(
    propertyName: System.Text.Json.JsonEncodedText,
    value: number | StrongNumeric<UInt64Host>
  ): VoidResult;
  writeNumber(propertyName: string, value: number | StrongNumeric<DecimalHost>): VoidResult;
  writeNumber(propertyName: string, value: number | StrongNumeric<DoubleHost>): VoidResult;
  writeNumber(propertyName: string, value: number | StrongNumeric<Int32Host>): VoidResult;
  writeNumber(propertyName: string, value: number | StrongNumeric<Int64Host>): VoidResult;
  writeNumber(propertyName: string, value: number | StrongNumeric<SingleHost>): VoidResult;
  writeNumber(propertyName: string, value: number | StrongNumeric<UInt32Host>): VoidResult;
  writeNumber(propertyName: string, value: number | StrongNumeric<UInt64Host>): VoidResult;
  writeNumberValue(value: number | StrongNumeric<DecimalHost>): VoidResult;
  writeNumberValue(value: number | StrongNumeric<DoubleHost>): VoidResult;
  writeNumberValue(value: number | StrongNumeric<Int32Host>): VoidResult;
  writeNumberValue(value: number | StrongNumeric<Int64Host>): VoidResult;
  writeNumberValue(value: number | StrongNumeric<SingleHost>): VoidResult;
  writeNumberValue(value: number | StrongNumeric<UInt32Host>): VoidResult;
  writeNumberValue(value: number | StrongNumeric<UInt64Host>): VoidResult;
  writePropertyName(propertyName: System.Text.Json.JsonEncodedText): VoidResult;
  writePropertyName(propertyName: string): VoidResult;
  writeRawValue(json: string): VoidResult;
  writeRawValue(json: string, skipInputValidation: boolean): VoidResult;
  writeRawValue(utf8Json: System.Buffers.ReadOnlySequence<number>): VoidResult;
  writeRawValue(
    utf8Json: System.Buffers.ReadOnlySequence<number>,
    skipInputValidation: boolean
  ): VoidResult;
  writeStartArray(): VoidResult;
  writeStartArray(propertyName: System.Text.Json.JsonEncodedText): VoidResult;
  writeStartArray(propertyName: string): VoidResult;
  writeStartObject(): VoidResult;
  writeStartObject(propertyName: System.Text.Json.JsonEncodedText): VoidResult;
  writeStartObject(propertyName: string): VoidResult;
  writeString(propertyName: System.Text.Json.JsonEncodedText, value: System.DateTime): VoidResult;
  writeString(
    propertyName: System.Text.Json.JsonEncodedText,
    value: System.DateTimeOffset
  ): VoidResult;
  writeString(propertyName: System.Text.Json.JsonEncodedText, value: System.Guid): VoidResult;
  writeString(
    propertyName: System.Text.Json.JsonEncodedText,
    value: System.Text.Json.JsonEncodedText
  ): VoidResult;
  writeString(propertyName: System.Text.Json.JsonEncodedText, value: string | null): VoidResult;
  writeString(propertyName: string, value: System.DateTime): VoidResult;
  writeString(propertyName: string, value: System.DateTimeOffset): VoidResult;
  writeString(propertyName: string, value: System.Guid): VoidResult;
  writeString(propertyName: string, value: System.Text.Json.JsonEncodedText): VoidResult;
  writeString(propertyName: string, value: string | null): VoidResult;
  writeStringValue(value: System.DateTime): VoidResult;
  writeStringValue(value: System.DateTimeOffset): VoidResult;
  writeStringValue(value: System.Guid): VoidResult;
  writeStringValue(value: System.Text.Json.JsonEncodedText): VoidResult;
  writeStringValue(value: string | null): VoidResult;
}

declare global {
  namespace System.Text.Json {
    type Utf8JsonWriter = import("./Utf8JsonWriter").Utf8JsonWriter;
  }
}

export interface Utf8JsonWriterHostType extends HostType<Utf8JsonWriter, ReferenceTypeTrait> {
  new (bufferWriter: System.Buffers.IBufferWriter<number>): Utf8JsonWriter;
  new (
    bufferWriter: System.Buffers.IBufferWriter<number>,
    options: System.Text.Json.JsonWriterOptions
  ): Utf8JsonWriter;
  new (utf8Json: System.IO.Stream): Utf8JsonWriter;
  new (utf8Json: System.IO.Stream, options: System.Text.Json.JsonWriterOptions): Utf8JsonWriter;
}

export {};
