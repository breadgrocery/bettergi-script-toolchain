import type { HostArray, HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../Linq/Expressions/ExpressionType";
import "../V8SplitProxyHelpers";
import "./DynamicMetaObject";
import "./DynamicMetaObjectBinder";

declare const binaryOperationBinderBrand: unique symbol;
export interface BinaryOperationBinder extends Omit<
  System.Dynamic.DynamicMetaObjectBinder,
  "bind" | "fallbackBinaryOperation" | "operation" | "returnType"
> {
  readonly [binaryOperationBinderBrand]: true;
  bind(
    target: System.Dynamic.DynamicMetaObject,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  fallbackBinaryOperation(
    target: System.Dynamic.DynamicMetaObject,
    arg: System.Dynamic.DynamicMetaObject
  ): System.Dynamic.DynamicMetaObject;
  fallbackBinaryOperation(
    target: System.Dynamic.DynamicMetaObject,
    arg: System.Dynamic.DynamicMetaObject,
    errorSuggestion: System.Dynamic.DynamicMetaObject | null
  ): System.Dynamic.DynamicMetaObject;
  readonly operation: System.Linq.Expressions.ExpressionType;
  readonly returnType: System.Type;
}

declare global {
  namespace System.Dynamic {
    type BinaryOperationBinder = import("./BinaryOperationBinder").BinaryOperationBinder;
  }
}

export interface BinaryOperationBinderHostType extends HostType<
  BinaryOperationBinder,
  ReferenceTypeTrait
> {}

export {};
