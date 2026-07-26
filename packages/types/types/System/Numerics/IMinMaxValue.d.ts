import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iMinMaxValueArity1InputBrand: unique symbol;
export interface _IMinMaxValueArity1Input<TSelf> {
  readonly [iMinMaxValueArity1InputBrand]: true;
}

export interface _IMinMaxValueArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IMinMaxValueArity1Input<TSelf>>,
    _IMinMaxValueArity1Input<TSelf> {}

export interface _IMinMaxValueArity1HostType<TSelf> extends HostType<
  _IMinMaxValueArity1<TSelf>,
  InterfaceTypeTrait
> {
  readonly minValue: TSelf;
  readonly maxValue: TSelf;
}

export type IMinMaxValueFamily<T1 = FamilyArgumentOmitted> = _IMinMaxValueArity1<T1>;

declare global {
  namespace System.Numerics {
    type IMinMaxValue<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IMinMaxValue").IMinMaxValueFamily<T1>;
  }
}

export type IMinMaxValueInputFamily<T1 = FamilyArgumentOmitted> = _IMinMaxValueArity1Input<T1>;
export type IMinMaxValueInput<T1> = _IMinMaxValueArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IMinMaxValueInput<T1> = import("./IMinMaxValue").IMinMaxValueInput<T1>;
  }
}

export type IMinMaxValueHostType<T1> = _IMinMaxValueArity1HostType<T1>;

export {};
