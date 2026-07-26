import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "./EncoderFallbackBuffer";

declare const encoderFallbackBrand: unique symbol;
export interface EncoderFallback extends ClrHostValue {
  readonly [encoderFallbackBrand]: true;
  createFallbackBuffer(): System.Text.EncoderFallbackBuffer;
  readonly maxCharCount: number;
}

declare global {
  namespace System.Text {
    type EncoderFallback = import("./EncoderFallback").EncoderFallback;
  }
}

export interface EncoderFallbackHostType extends HostType<EncoderFallback, ReferenceTypeTrait> {
  readonly replacementFallback: System.Text.EncoderFallback;
  readonly exceptionFallback: System.Text.EncoderFallback;
}

export {};
