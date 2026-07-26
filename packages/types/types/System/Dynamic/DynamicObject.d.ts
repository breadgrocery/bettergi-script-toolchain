import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type {
  DynamicMetaObjectProviderInput,
  HostVariableOut
} from "../../Microsoft/ClearScript/HostVariable";
import "../Collections/Generic/IEnumerable";
import "../Linq/Expressions/Expression";
import "./BinaryOperationBinder";
import "./ConvertBinder";
import "./CreateInstanceBinder";
import "./DeleteIndexBinder";
import "./DeleteMemberBinder";
import "./DynamicMetaObject";
import "./GetIndexBinder";
import "./GetMemberBinder";
import "./IDynamicMetaObjectProvider";
import "./InvokeBinder";
import "./InvokeMemberBinder";
import "./SetIndexBinder";
import "./SetMemberBinder";
import "./UnaryOperationBinder";

declare const dynamicObjectBrand: unique symbol;
export interface DynamicObject
  extends
    ClrHostValue,
    System.Dynamic.IDynamicMetaObjectProviderInput,
    DynamicMetaObjectProviderInput {
  readonly [dynamicObjectBrand]: true;
  getDynamicMemberNames(): System.Collections.Generic.IEnumerable<string>;
  getMetaObject(parameter: System.Linq.Expressions.Expression): System.Dynamic.DynamicMetaObject;
  tryBinaryOperation(
    binder: System.Dynamic.BinaryOperationBinder,
    arg: unknown,
    result: HostVariableOut<unknown>
  ): boolean;
  tryConvert(binder: System.Dynamic.ConvertBinder, result: HostVariableOut<unknown>): boolean;
  tryCreateInstance(
    binder: System.Dynamic.CreateInstanceBinder,
    args: HostArray<unknown> | null,
    result: HostVariableOut<unknown>
  ): boolean;
  tryDeleteIndex(binder: System.Dynamic.DeleteIndexBinder, indexes: HostArray<unknown>): boolean;
  tryDeleteMember(binder: System.Dynamic.DeleteMemberBinder): boolean;
  tryGetIndex(
    binder: System.Dynamic.GetIndexBinder,
    indexes: HostArray<unknown>,
    result: HostVariableOut<unknown>
  ): boolean;
  tryGetMember(binder: System.Dynamic.GetMemberBinder, result: HostVariableOut<unknown>): boolean;
  tryInvoke(
    binder: System.Dynamic.InvokeBinder,
    args: HostArray<unknown> | null,
    result: HostVariableOut<unknown>
  ): boolean;
  tryInvokeMember(
    binder: System.Dynamic.InvokeMemberBinder,
    args: HostArray<unknown> | null,
    result: HostVariableOut<unknown>
  ): boolean;
  trySetIndex(
    binder: System.Dynamic.SetIndexBinder,
    indexes: HostArray<unknown>,
    value: unknown | null
  ): boolean;
  trySetMember(binder: System.Dynamic.SetMemberBinder, value: unknown | null): boolean;
  tryUnaryOperation(
    binder: System.Dynamic.UnaryOperationBinder,
    result: HostVariableOut<unknown>
  ): boolean;
}

declare global {
  namespace System.Dynamic {
    type DynamicObject = import("./DynamicObject").DynamicObject;
  }
}

export interface DynamicObjectHostType extends HostType<DynamicObject, ReferenceTypeTrait> {}

export {};
