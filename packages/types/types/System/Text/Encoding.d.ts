import type {
  ByteHost,
  CharHost,
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../ICloneable";
import "../IO/Stream";
import "./Decoder";
import "./DecoderFallback";
import "./Encoder";
import "./EncoderFallback";
import "./EncodingInfo";
import "./EncodingProvider";
import "./NormalizationForm";

declare const encodingBrand: unique symbol;
export interface Encoding extends ClrHostValue, System.ICloneableInput {
  readonly [encodingBrand]: true;
  clone(): unknown;
  decoderFallback: System.Text.DecoderFallback;
  encoderFallback: System.Text.EncoderFallback;
  equals(value: unknown | null): boolean;
  getByteCount(chars: HostArray<number | StrongNumeric<CharHost>>): number;
  getByteCount(
    chars: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  getByteCount(s: string): number;
  getByteCount(
    s: string,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  getBytes(chars: HostArray<number | StrongNumeric<CharHost>>): HostArray<number>;
  getBytes(
    chars: HostArray<number | StrongNumeric<CharHost>>,
    charIndex: number | StrongNumeric<Int32Host>,
    charCount: number | StrongNumeric<Int32Host>,
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    byteIndex: number | StrongNumeric<Int32Host>
  ): number;
  getBytes(
    chars: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): HostArray<number>;
  getBytes(s: string): HostArray<number>;
  getBytes(
    s: string,
    charIndex: number | StrongNumeric<Int32Host>,
    charCount: number | StrongNumeric<Int32Host>,
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    byteIndex: number | StrongNumeric<Int32Host>
  ): number;
  getBytes(
    s: string,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): HostArray<number>;
  getCharCount(bytes: HostArray<number | StrongNumeric<ByteHost>>): number;
  getCharCount(
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  getChars(bytes: HostArray<number | StrongNumeric<ByteHost>>): HostArray<number>;
  getChars(
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    byteIndex: number | StrongNumeric<Int32Host>,
    byteCount: number | StrongNumeric<Int32Host>,
    chars: HostArray<number | StrongNumeric<CharHost>>,
    charIndex: number | StrongNumeric<Int32Host>
  ): number;
  getChars(
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): HostArray<number>;
  getDecoder(): System.Text.Decoder;
  getEncoder(): System.Text.Encoder;
  getHashCode(): number;
  getMaxByteCount(charCount: number | StrongNumeric<Int32Host>): number;
  getMaxCharCount(byteCount: number | StrongNumeric<Int32Host>): number;
  getPreamble(): HostArray<number>;
  getString(bytes: HostArray<number | StrongNumeric<ByteHost>>): string;
  getString(
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): string;
  isAlwaysNormalized(): boolean;
  isAlwaysNormalized(form: EnumInput<System.Text.NormalizationForm>): boolean;
  readonly bodyName: string;
  readonly codePage: number;
  readonly encodingName: string;
  readonly headerName: string;
  readonly isBrowserDisplay: boolean;
  readonly isBrowserSave: boolean;
  readonly isMailNewsDisplay: boolean;
  readonly isMailNewsSave: boolean;
  readonly isReadOnly: boolean;
  readonly isSingleByte: boolean;
  readonly webName: string;
  readonly windowsCodePage: number;
}

declare global {
  namespace System.Text {
    type Encoding = import("./Encoding").Encoding;
  }
}

export interface EncodingHostType extends HostType<Encoding, ReferenceTypeTrait> {
  readonly default: System.Text.Encoding;
  readonly ascii: System.Text.Encoding;
  readonly latin1: System.Text.Encoding;
  readonly unicode: System.Text.Encoding;
  readonly bigEndianUnicode: System.Text.Encoding;
  readonly utF7: System.Text.Encoding;
  readonly utF8: System.Text.Encoding;
  readonly utF32: System.Text.Encoding;
  convert(
    srcEncoding: System.Text.Encoding,
    dstEncoding: System.Text.Encoding,
    bytes: HostArray<number | StrongNumeric<ByteHost>>
  ): HostArray<number>;
  convert(
    srcEncoding: System.Text.Encoding,
    dstEncoding: System.Text.Encoding,
    bytes: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): HostArray<number>;
  registerProvider(provider: System.Text.EncodingProvider): VoidResult;
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
  getEncodings(): HostArray<System.Text.EncodingInfo>;
  createTranscodingStream(
    innerStream: System.IO.Stream,
    innerStreamEncoding: System.Text.Encoding,
    outerStreamEncoding: System.Text.Encoding
  ): System.IO.Stream;
  createTranscodingStream(
    innerStream: System.IO.Stream,
    innerStreamEncoding: System.Text.Encoding,
    outerStreamEncoding: System.Text.Encoding,
    leaveOpen: boolean
  ): System.IO.Stream;
}

export {};
