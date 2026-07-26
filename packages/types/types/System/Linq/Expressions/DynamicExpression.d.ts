import type {
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../Runtime/CompilerServices/CallSiteBinder";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./IArgumentProvider";
import "./IDynamicExpression";

declare const dynamicExpressionBrand: unique symbol;
export interface DynamicExpression
  extends
    Omit<
      System.Linq.Expressions.Expression,
      | "arguments"
      | "binder"
      | "canReduce"
      | "delegateType"
      | "nodeType"
      | "reduce"
      | "type"
      | "update"
    >,
    System.Linq.Expressions.IDynamicExpressionInput,
    System.Linq.Expressions.IArgumentProviderInput {
  readonly [dynamicExpressionBrand]: true;
  readonly arguments: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.Expression>;
  readonly binder: System.Runtime.CompilerServices.CallSiteBinder;
  readonly canReduce: boolean;
  readonly delegateType: System.Type;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly type: System.Type;
  reduce(): System.Linq.Expressions.Expression;
  update(
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
  ): System.Linq.Expressions.DynamicExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type DynamicExpression = import("./DynamicExpression").DynamicExpression;
  }
}

export interface DynamicExpressionHostType extends HostType<DynamicExpression, ReferenceTypeTrait> {
  dynamic(
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    returnType: System.Type,
    arguments: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.DynamicExpression;
  dynamic(
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    returnType: System.Type,
    ...arguments: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.DynamicExpression;
  dynamic(
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    returnType: System.Type,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.DynamicExpression;
  dynamic(
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    returnType: System.Type,
    arg0: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.DynamicExpression;
  dynamic(
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    returnType: System.Type,
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.DynamicExpression;
  dynamic(
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    returnType: System.Type,
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression,
    arg2: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.DynamicExpression;
  dynamic(
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    returnType: System.Type,
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression,
    arg2: System.Linq.Expressions.Expression,
    arg3: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.DynamicExpression;
  makeDynamic(
    delegateType: System.Type,
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
  ): System.Linq.Expressions.DynamicExpression;
  makeDynamic(
    delegateType: System.Type,
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    arguments: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.DynamicExpression;
  makeDynamic(
    delegateType: System.Type,
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    ...arguments: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.DynamicExpression;
  makeDynamic(
    delegateType: System.Type,
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    arg0: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.DynamicExpression;
  makeDynamic(
    delegateType: System.Type,
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.DynamicExpression;
  makeDynamic(
    delegateType: System.Type,
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression,
    arg2: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.DynamicExpression;
  makeDynamic(
    delegateType: System.Type,
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression,
    arg2: System.Linq.Expressions.Expression,
    arg3: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.DynamicExpression;
}

export {};
