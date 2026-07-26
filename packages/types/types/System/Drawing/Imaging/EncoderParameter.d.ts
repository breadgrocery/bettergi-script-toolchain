import type {
  ByteHost,
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  Int16Host,
  Int32Host,
  Int64Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IDisposable";
import "../../IntPtr";
import "./Encoder";
import "./EncoderParameterValueType";

declare const encoderParameterBrand: unique symbol;
export interface EncoderParameter extends ClrHostValue, System.IDisposableInput {
  readonly [encoderParameterBrand]: true;
  dispose(): VoidResult;
  encoder: System.Drawing.Imaging.Encoder;
  readonly numberOfValues: number;
  readonly type: System.Drawing.Imaging.EncoderParameterValueType;
  readonly valueType: System.Drawing.Imaging.EncoderParameterValueType;
}

declare global {
  namespace System.Drawing.Imaging {
    type EncoderParameter = import("./EncoderParameter").EncoderParameter;
  }
}

export interface EncoderParameterHostType extends HostType<EncoderParameter, ReferenceTypeTrait> {
  new (
    encoder: System.Drawing.Imaging.Encoder,
    value: number | StrongNumeric<ByteHost>
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    value: number | StrongNumeric<ByteHost>,
    undefined: boolean
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    value: number | StrongNumeric<Int16Host>
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    value: number | StrongNumeric<Int64Host>
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    numerator: number | StrongNumeric<Int32Host>,
    denominator: number | StrongNumeric<Int32Host>
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    rangebegin: number | StrongNumeric<Int64Host>,
    rangeend: number | StrongNumeric<Int64Host>
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    numerator1: number | StrongNumeric<Int32Host>,
    demoninator1: number | StrongNumeric<Int32Host>,
    numerator2: number | StrongNumeric<Int32Host>,
    demoninator2: number | StrongNumeric<Int32Host>
  ): EncoderParameter;
  new (encoder: System.Drawing.Imaging.Encoder, value: string): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    value: HostArray<number | StrongNumeric<ByteHost>>
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    value: HostArray<number | StrongNumeric<ByteHost>>,
    undefined: boolean
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    value: HostArray<number | StrongNumeric<Int16Host>>
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    value: HostArray<number | StrongNumeric<Int64Host>>
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    numerator: HostArray<number | StrongNumeric<Int32Host>>,
    denominator: HostArray<number | StrongNumeric<Int32Host>>
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    rangebegin: HostArray<number | StrongNumeric<Int64Host>>,
    rangeend: HostArray<number | StrongNumeric<Int64Host>>
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    numerator1: HostArray<number | StrongNumeric<Int32Host>>,
    denominator1: HostArray<number | StrongNumeric<Int32Host>>,
    numerator2: HostArray<number | StrongNumeric<Int32Host>>,
    denominator2: HostArray<number | StrongNumeric<Int32Host>>
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    numberOfValues: number | StrongNumeric<Int32Host>,
    type: number | StrongNumeric<Int32Host>,
    value: number | StrongNumeric<Int32Host>
  ): EncoderParameter;
  new (
    encoder: System.Drawing.Imaging.Encoder,
    numberValues: number | StrongNumeric<Int32Host>,
    type: EnumInput<System.Drawing.Imaging.EncoderParameterValueType>,
    value: System.IntPtr
  ): EncoderParameter;
}

export {};
