import type {
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IDisposable";
import "./EncoderParameter";

declare const encoderParametersBrand: unique symbol;
export interface EncoderParameters extends ClrHostValue, System.IDisposableInput {
  readonly [encoderParametersBrand]: true;
  dispose(): VoidResult;
  param: HostArray<System.Drawing.Imaging.EncoderParameter>;
}

declare global {
  namespace System.Drawing.Imaging {
    type EncoderParameters = import("./EncoderParameters").EncoderParameters;
  }
}

export interface EncoderParametersHostType extends HostType<
  EncoderParameters,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (count: number | StrongNumeric<Int32Host>): EncoderParameters;
  new (): EncoderParameters;
}

export {};
