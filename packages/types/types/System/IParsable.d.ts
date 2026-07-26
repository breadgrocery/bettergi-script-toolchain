import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import "./IFormatProvider";

declare const iParsableArity1InputBrand: unique symbol;
export interface _IParsableArity1Input<TSelf> {
  readonly [iParsableArity1InputBrand]: true;
}

export interface _IParsableArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IParsableArity1Input<TSelf>>,
    _IParsableArity1Input<TSelf> {}

export interface _IParsableArity1HostType<TSelf> extends HostType<
  _IParsableArity1<TSelf>,
  InterfaceTypeTrait
> {
  parse(s: string, provider: System.IFormatProvider | null): TSelf;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<TSelf>
  ): boolean;
}

export type IParsableFamily<T1 = FamilyArgumentOmitted> = _IParsableArity1<T1>;

declare global {
  namespace System {
    type IParsable<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IParsable").IParsableFamily<T1>;
  }
}

export type IParsableInputFamily<T1 = FamilyArgumentOmitted> = _IParsableArity1Input<T1>;
export type IParsableInput<T1> = _IParsableArity1Input<T1>;

declare global {
  namespace System {
    type IParsableInput<T1> = import("./IParsable").IParsableInput<T1>;
  }
}

export type IParsableHostType<T1> = _IParsableArity1HostType<T1>;

export {};
