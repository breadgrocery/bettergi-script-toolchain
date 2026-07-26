import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../Collections/Generic/IEnumerable";
import "../Linq/Expressions/Expression";
import "../V8SplitProxyHelpers";
import "./BinaryOperationBinder";
import "./BindingRestrictions";
import "./ConvertBinder";
import "./CreateInstanceBinder";
import "./DeleteIndexBinder";
import "./DeleteMemberBinder";
import "./GetIndexBinder";
import "./GetMemberBinder";
import "./InvokeBinder";
import "./InvokeMemberBinder";
import "./SetIndexBinder";
import "./SetMemberBinder";
import "./UnaryOperationBinder";

declare const dynamicMetaObjectBrand: unique symbol;
export interface DynamicMetaObject extends ClrHostValue {
  readonly [dynamicMetaObjectBrand]: true;
  bindBinaryOperation(
    binder: System.Dynamic.BinaryOperationBinder,
    arg: System.Dynamic.DynamicMetaObject
  ): System.Dynamic.DynamicMetaObject;
  bindConvert(binder: System.Dynamic.ConvertBinder): System.Dynamic.DynamicMetaObject;
  bindCreateInstance(
    binder: System.Dynamic.CreateInstanceBinder,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  bindDeleteIndex(
    binder: System.Dynamic.DeleteIndexBinder,
    indexes: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  bindDeleteMember(binder: System.Dynamic.DeleteMemberBinder): System.Dynamic.DynamicMetaObject;
  bindGetIndex(
    binder: System.Dynamic.GetIndexBinder,
    indexes: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  bindGetMember(binder: System.Dynamic.GetMemberBinder): System.Dynamic.DynamicMetaObject;
  bindInvoke(
    binder: System.Dynamic.InvokeBinder,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  bindInvokeMember(
    binder: System.Dynamic.InvokeMemberBinder,
    args: HostArray<System.Dynamic.DynamicMetaObject>
  ): System.Dynamic.DynamicMetaObject;
  bindSetIndex(
    binder: System.Dynamic.SetIndexBinder,
    indexes: HostArray<System.Dynamic.DynamicMetaObject>,
    value: System.Dynamic.DynamicMetaObject
  ): System.Dynamic.DynamicMetaObject;
  bindSetMember(
    binder: System.Dynamic.SetMemberBinder,
    value: System.Dynamic.DynamicMetaObject
  ): System.Dynamic.DynamicMetaObject;
  bindUnaryOperation(binder: System.Dynamic.UnaryOperationBinder): System.Dynamic.DynamicMetaObject;
  getDynamicMemberNames(): System.Collections.Generic.IEnumerable<string>;
  readonly expression: System.Linq.Expressions.Expression;
  readonly hasValue: boolean;
  readonly limitType: System.Type;
  readonly restrictions: System.Dynamic.BindingRestrictions;
  readonly runtimeType: System.Type;
  readonly value: unknown;
}

declare global {
  namespace System.Dynamic {
    type DynamicMetaObject = import("./DynamicMetaObject").DynamicMetaObject;
  }
}

export interface DynamicMetaObjectHostType extends HostType<DynamicMetaObject, ReferenceTypeTrait> {
  new (
    expression: System.Linq.Expressions.Expression,
    restrictions: System.Dynamic.BindingRestrictions
  ): DynamicMetaObject;
  new (
    expression: System.Linq.Expressions.Expression,
    restrictions: System.Dynamic.BindingRestrictions,
    value: unknown
  ): DynamicMetaObject;
  readonly emptyMetaObjects: HostArray<System.Dynamic.DynamicMetaObject>;
  create(
    value: unknown,
    expression: System.Linq.Expressions.Expression
  ): System.Dynamic.DynamicMetaObject;
}

export {};
