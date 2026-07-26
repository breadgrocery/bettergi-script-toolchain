import type {
  CharHost,
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../IO/TextWriter";

declare const textEncoderBrand: unique symbol;
export interface TextEncoder extends ClrHostValue {
  readonly [textEncoderBrand]: true;
  encode(
    output: System.IO.TextWriter,
    value: HostArray<number | StrongNumeric<CharHost>>,
    startIndex: number | StrongNumeric<Int32Host>,
    characterCount: number | StrongNumeric<Int32Host>
  ): VoidResult;
  encode(output: System.IO.TextWriter, value: string): VoidResult;
  encode(
    output: System.IO.TextWriter,
    value: string,
    startIndex: number | StrongNumeric<Int32Host>,
    characterCount: number | StrongNumeric<Int32Host>
  ): VoidResult;
  encode(value: string): string;
  readonly maxOutputCharactersPerInputCharacter: number;
  willEncode(unicodeScalar: number | StrongNumeric<Int32Host>): boolean;
}

declare global {
  namespace System.Text.Encodings.Web {
    type TextEncoder = import("./TextEncoder").TextEncoder;
  }
}

export interface TextEncoderHostType extends HostType<TextEncoder, ReferenceTypeTrait> {}

export {};
