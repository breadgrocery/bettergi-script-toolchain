import type {
  ByteHost,
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";

declare const decoderFallbackBufferBrand: unique symbol;
export interface DecoderFallbackBuffer extends ClrHostValue {
  readonly [decoderFallbackBufferBrand]: true;
  fallback(
    bytesUnknown: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>
  ): boolean;
  getNextChar(): number;
  movePrevious(): boolean;
  readonly remaining: number;
  reset(): VoidResult;
}

declare global {
  namespace System.Text {
    type DecoderFallbackBuffer = import("./DecoderFallbackBuffer").DecoderFallbackBuffer;
  }
}

export interface DecoderFallbackBufferHostType extends HostType<
  DecoderFallbackBuffer,
  ReferenceTypeTrait
> {}

export {};
