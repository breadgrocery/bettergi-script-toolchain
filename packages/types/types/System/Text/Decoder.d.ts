import type {
  ByteHost,
  CharHost,
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "./DecoderFallback";
import "./DecoderFallbackBuffer";

declare const decoderBrand: unique symbol;
export interface Decoder extends ClrHostValue {
  readonly [decoderBrand]: true;
  convert(
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    byteIndex: number | StrongNumeric<Int32Host>,
    byteCount: number | StrongNumeric<Int32Host>,
    chars: HostArray<number | StrongNumeric<CharHost>>,
    charIndex: number | StrongNumeric<Int32Host>,
    charCount: number | StrongNumeric<Int32Host>,
    flush: boolean,
    bytesUsed: HostVariableOut<number>,
    charsUsed: HostVariableOut<number>,
    completed: HostVariableOut<boolean>
  ): VoidResult;
  fallback: System.Text.DecoderFallback;
  getCharCount(
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  getCharCount(
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    flush: boolean
  ): number;
  getChars(
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    byteIndex: number | StrongNumeric<Int32Host>,
    byteCount: number | StrongNumeric<Int32Host>,
    chars: HostArray<number | StrongNumeric<CharHost>>,
    charIndex: number | StrongNumeric<Int32Host>
  ): number;
  getChars(
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    byteIndex: number | StrongNumeric<Int32Host>,
    byteCount: number | StrongNumeric<Int32Host>,
    chars: HostArray<number | StrongNumeric<CharHost>>,
    charIndex: number | StrongNumeric<Int32Host>,
    flush: boolean
  ): number;
  readonly fallbackBuffer: System.Text.DecoderFallbackBuffer;
  reset(): VoidResult;
}

declare global {
  namespace System.Text {
    type Decoder = import("./Decoder").Decoder;
  }
}

export interface DecoderHostType extends HostType<Decoder, ReferenceTypeTrait> {}

export {};
