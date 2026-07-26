import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./IFormatProvider";

declare const iUtf8SpanParsableArity1InputBrand: unique symbol;
export interface _IUtf8SpanParsableArity1Input<TSelf> {
  readonly [iUtf8SpanParsableArity1InputBrand]: true;
}

export interface _IUtf8SpanParsableArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IUtf8SpanParsableArity1Input<TSelf>>,
    _IUtf8SpanParsableArity1Input<TSelf> {}

export interface _IUtf8SpanParsableArity1HostType<TSelf> extends HostType<
  _IUtf8SpanParsableArity1<TSelf>,
  InterfaceTypeTrait
> {}

export type IUtf8SpanParsableFamily<T1 = FamilyArgumentOmitted> = _IUtf8SpanParsableArity1<T1>;

declare global {
  namespace System {
    type IUtf8SpanParsable<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IUtf8SpanParsable").IUtf8SpanParsableFamily<T1>;
  }
}

export type IUtf8SpanParsableInputFamily<T1 = FamilyArgumentOmitted> =
  _IUtf8SpanParsableArity1Input<T1>;
export type IUtf8SpanParsableInput<T1> = _IUtf8SpanParsableArity1Input<T1>;

declare global {
  namespace System {
    type IUtf8SpanParsableInput<T1> = import("./IUtf8SpanParsable").IUtf8SpanParsableInput<T1>;
  }
}

export type IUtf8SpanParsableHostType<T1> = _IUtf8SpanParsableArity1HostType<T1>;

export {};
