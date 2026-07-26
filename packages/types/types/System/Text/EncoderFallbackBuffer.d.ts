import type {
  CharHost,
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";

declare const encoderFallbackBufferBrand: unique symbol;
export interface EncoderFallbackBuffer extends ClrHostValue {
  readonly [encoderFallbackBufferBrand]: true;
  fallback(
    charUnknown: number | StrongNumeric<CharHost>,
    index: number | StrongNumeric<Int32Host>
  ): boolean;
  fallback(
    charUnknownHigh: number | StrongNumeric<CharHost>,
    charUnknownLow: number | StrongNumeric<CharHost>,
    index: number | StrongNumeric<Int32Host>
  ): boolean;
  getNextChar(): number;
  movePrevious(): boolean;
  readonly remaining: number;
  reset(): VoidResult;
}

declare global {
  namespace System.Text {
    type EncoderFallbackBuffer = import("./EncoderFallbackBuffer").EncoderFallbackBuffer;
  }
}

export interface EncoderFallbackBufferHostType extends HostType<
  EncoderFallbackBuffer,
  ReferenceTypeTrait
> {}

export {};
