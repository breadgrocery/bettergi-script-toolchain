import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const encoderParameterValueTypeBrand: unique symbol;
export interface EncoderParameterValueType extends ClrHostValue {
  readonly [encoderParameterValueTypeBrand]: true;
}

declare global {
  namespace System.Drawing.Imaging {
    type EncoderParameterValueType =
      import("./EncoderParameterValueType").EncoderParameterValueType;
  }
}

export interface EncoderParameterValueTypeHostType extends HostType<
  EncoderParameterValueType,
  EnumTypeTrait
> {
  readonly valueTypeByte: EncoderParameterValueType;
  readonly valueTypeAscii: EncoderParameterValueType;
  readonly valueTypeShort: EncoderParameterValueType;
  readonly valueTypeLong: EncoderParameterValueType;
  readonly valueTypeRational: EncoderParameterValueType;
  readonly valueTypeLongRange: EncoderParameterValueType;
  readonly valueTypeUndefined: EncoderParameterValueType;
  readonly valueTypeRationalRange: EncoderParameterValueType;
  readonly valueTypePointer: EncoderParameterValueType;
}

export {};
