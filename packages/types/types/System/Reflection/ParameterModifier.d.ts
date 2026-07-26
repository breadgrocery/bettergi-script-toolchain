import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../ValueType";

declare const parameterModifierBrand: unique symbol;
export interface ParameterModifier extends ClrHostValue {
  readonly [parameterModifierBrand]: true;
  item: {
    (index: number | StrongNumeric<Int32Host>): boolean;
    get(index: number | StrongNumeric<Int32Host>): boolean;
    set(index: number | StrongNumeric<Int32Host>, value: boolean): boolean;
  };
}

declare global {
  namespace System.Reflection {
    type ParameterModifier = import("./ParameterModifier").ParameterModifier;
  }
}

export interface ParameterModifierHostType extends HostType<ParameterModifier, ValueTypeTrait> {
  new (parameterCount: number | StrongNumeric<Int32Host>): ParameterModifier;
}

export {};
