import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../Linq/Expressions/Expression";
import "./DynamicMetaObject";

declare const iDynamicMetaObjectProviderInputBrand: unique symbol;
export interface IDynamicMetaObjectProviderInput {
  readonly [iDynamicMetaObjectProviderInputBrand]: true;
}

export interface IDynamicMetaObjectProvider
  extends
    Microsoft.ClearScript.ClrInterfaceView<IDynamicMetaObjectProviderInput>,
    IDynamicMetaObjectProviderInput {
  getMetaObject(parameter: System.Linq.Expressions.Expression): System.Dynamic.DynamicMetaObject;
}

declare global {
  namespace System.Dynamic {
    type IDynamicMetaObjectProviderInput =
      import("./IDynamicMetaObjectProvider").IDynamicMetaObjectProviderInput;
  }
}

declare global {
  namespace System.Dynamic {
    type IDynamicMetaObjectProvider =
      import("./IDynamicMetaObjectProvider").IDynamicMetaObjectProvider;
  }
}

export interface IDynamicMetaObjectProviderHostType extends HostType<
  IDynamicMetaObjectProvider,
  InterfaceTypeTrait
> {}

export {};
