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
import "./EncoderFallback";
import "./EncoderFallbackBuffer";

declare const encoderBrand: unique symbol;
export interface Encoder extends ClrHostValue {
  readonly [encoderBrand]: true;
  convert(
    chars: HostArray<number | StrongNumeric<CharHost>>,
    charIndex: number | StrongNumeric<Int32Host>,
    charCount: number | StrongNumeric<Int32Host>,
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    byteIndex: number | StrongNumeric<Int32Host>,
    byteCount: number | StrongNumeric<Int32Host>,
    flush: boolean,
    charsUsed: HostVariableOut<number>,
    bytesUsed: HostVariableOut<number>,
    completed: HostVariableOut<boolean>
  ): VoidResult;
  fallback: System.Text.EncoderFallback;
  getByteCount(
    chars: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    flush: boolean
  ): number;
  getBytes(
    chars: HostArray<number | StrongNumeric<CharHost>>,
    charIndex: number | StrongNumeric<Int32Host>,
    charCount: number | StrongNumeric<Int32Host>,
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    byteIndex: number | StrongNumeric<Int32Host>,
    flush: boolean
  ): number;
  readonly fallbackBuffer: System.Text.EncoderFallbackBuffer;
  reset(): VoidResult;
}

declare global {
  namespace System.Text {
    type Encoder = import("./Encoder").Encoder;
  }
}

export interface EncoderHostType extends HostType<Encoder, ReferenceTypeTrait> {}

export {};
