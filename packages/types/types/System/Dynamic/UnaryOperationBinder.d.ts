import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../Linq/Expressions/ExpressionType";
import "../V8SplitProxyHelpers";
import "./DynamicMetaObject";
import "./DynamicMetaObjectBinder";

declare const unaryOperationBinderBrand: unique symbol;
export interface UnaryOperationBinder extends Omit<
  System.Dynamic.DynamicMetaObjectBinder,
  "bind" | "fallbackUnaryOperation" | "operation" | "returnType"
> {
  readonly [unaryOperationBinderBrand]: true;
  bind(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject> | null
  ): System.Dynamic.DynamicMetaObject;
  fallbackUnaryOperation(
    target: System.Dynamic.DynamicMetaObject
  ): System.Dynamic.DynamicMetaObject;
  fallbackUnaryOperation(
    target: System.Dynamic.DynamicMetaObject,
    errorSuggestion: System.Dynamic.DynamicMetaObject | null
  ): System.Dynamic.DynamicMetaObject;
  readonly operation: System.Linq.Expressions.ExpressionType;
  readonly returnType: System.Type;
}

declare global {
  namespace System.Dynamic {
    type UnaryOperationBinder = import("./UnaryOperationBinder").UnaryOperationBinder;
  }
}

export interface UnaryOperationBinderHostType extends HostType<
  UnaryOperationBinder,
  ReferenceTypeTrait
> {}

export {};
