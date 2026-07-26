import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./IFormatProvider";
import "./IParsable";

declare const iSpanParsableArity1InputBrand: unique symbol;
export interface _ISpanParsableArity1Input<TSelf> {
  readonly [iSpanParsableArity1InputBrand]: true;
}

export interface _ISpanParsableArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_ISpanParsableArity1Input<TSelf>>,
    _ISpanParsableArity1Input<TSelf> {}

export interface _ISpanParsableArity1HostType<TSelf> extends HostType<
  _ISpanParsableArity1<TSelf>,
  InterfaceTypeTrait
> {}

export type ISpanParsableFamily<T1 = FamilyArgumentOmitted> = _ISpanParsableArity1<T1>;

declare global {
  namespace System {
    type ISpanParsable<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ISpanParsable").ISpanParsableFamily<T1>;
  }
}

export type ISpanParsableInputFamily<T1 = FamilyArgumentOmitted> = _ISpanParsableArity1Input<T1>;
export type ISpanParsableInput<T1> = _ISpanParsableArity1Input<T1>;

declare global {
  namespace System {
    type ISpanParsableInput<T1> = import("./ISpanParsable").ISpanParsableInput<T1>;
  }
}

export type ISpanParsableHostType<T1> = _ISpanParsableArity1HostType<T1>;

export {};
