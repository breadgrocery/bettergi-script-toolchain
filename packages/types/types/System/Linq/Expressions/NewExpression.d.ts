import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../Reflection/ConstructorInfo";
import "../../Reflection/MemberInfo";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./IArgumentProvider";

declare const newExpressionBrand: unique symbol;
export interface NewExpression
  extends
    Omit<
      System.Linq.Expressions.Expression,
      | "argumentCount"
      | "arguments"
      | "constructor"
      | "getArgument"
      | "members"
      | "nodeType"
      | "type"
      | "update"
    >,
    System.Linq.Expressions.IArgumentProviderInput {
  readonly [newExpressionBrand]: true;
  getArgument(index: number | StrongNumeric<Int32Host>): System.Linq.Expressions.Expression;
  readonly argumentCount: number;
  readonly arguments: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.Expression>;
  readonly constructor: System.Reflection.ConstructorInfo;
  readonly members: System.Collections.ObjectModel.ReadOnlyCollection<System.Reflection.MemberInfo>;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly type: System.Type;
  update(
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
  ): System.Linq.Expressions.NewExpression;
}

declare global {
  namespace System.Linq.Expressions {
    type NewExpression = import("./NewExpression").NewExpression;
  }
}

export interface NewExpressionHostType extends HostType<NewExpression, ReferenceTypeTrait> {}

export {};
