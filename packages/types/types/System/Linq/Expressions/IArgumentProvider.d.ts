import type {
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "./Expression";

declare const iArgumentProviderInputBrand: unique symbol;
export interface IArgumentProviderInput {
  readonly [iArgumentProviderInputBrand]: true;
}

export interface IArgumentProvider
  extends Microsoft.ClearScript.ClrInterfaceView<IArgumentProviderInput>, IArgumentProviderInput {
  getArgument(index: number | StrongNumeric<Int32Host>): System.Linq.Expressions.Expression;
  readonly argumentCount: number;
}

declare global {
  namespace System.Linq.Expressions {
    type IArgumentProviderInput = import("./IArgumentProvider").IArgumentProviderInput;
  }
}

declare global {
  namespace System.Linq.Expressions {
    type IArgumentProvider = import("./IArgumentProvider").IArgumentProvider;
  }
}

export interface IArgumentProviderHostType extends HostType<
  IArgumentProvider,
  InterfaceTypeTrait
> {}

export {};
