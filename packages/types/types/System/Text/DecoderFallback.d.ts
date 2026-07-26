import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "./DecoderFallbackBuffer";

declare const decoderFallbackBrand: unique symbol;
export interface DecoderFallback extends ClrHostValue {
  readonly [decoderFallbackBrand]: true;
  createFallbackBuffer(): System.Text.DecoderFallbackBuffer;
  readonly maxCharCount: number;
}

declare global {
  namespace System.Text {
    type DecoderFallback = import("./DecoderFallback").DecoderFallback;
  }
}

export interface DecoderFallbackHostType extends HostType<DecoderFallback, ReferenceTypeTrait> {
  readonly replacementFallback: System.Text.DecoderFallback;
  readonly exceptionFallback: System.Text.DecoderFallback;
}

export {};
