import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../Collections/Generic/IEnumerable";
import "./DecoderFallback";
import "./EncoderFallback";
import "./Encoding";
import "./EncodingInfo";

declare const encodingProviderBrand: unique symbol;
export interface EncodingProvider extends ClrHostValue {
  readonly [encodingProviderBrand]: true;
  getEncoding(codepage: number | StrongNumeric<Int32Host>): System.Text.Encoding;
  getEncoding(
    codepage: number | StrongNumeric<Int32Host>,
    encoderFallback: System.Text.EncoderFallback,
    decoderFallback: System.Text.DecoderFallback
  ): System.Text.Encoding;
  getEncoding(name: string): System.Text.Encoding;
  getEncoding(
    name: string,
    encoderFallback: System.Text.EncoderFallback,
    decoderFallback: System.Text.DecoderFallback
  ): System.Text.Encoding;
  getEncodings(): System.Collections.Generic.IEnumerable<System.Text.EncodingInfo>;
}

declare global {
  namespace System.Text {
    type EncodingProvider = import("./EncodingProvider").EncodingProvider;
  }
}

export interface EncodingProviderHostType extends HostType<EncodingProvider, ReferenceTypeTrait> {}

export {};
