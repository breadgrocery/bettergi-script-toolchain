import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../Delegate";
import "../../Runtime/CompilerServices/DebugInfoGenerator";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./ParameterExpression";

declare const lambdaExpressionBrand: unique symbol;
export interface LambdaExpression extends Omit<
  System.Linq.Expressions.Expression,
  "body" | "compile" | "name" | "nodeType" | "parameters" | "returnType" | "tailCall" | "type"
> {
  readonly [lambdaExpressionBrand]: true;
  compile(): System.Delegate;
  compile(debugInfoGenerator: System.Runtime.CompilerServices.DebugInfoGenerator): System.Delegate;
  compile(preferInterpretation: boolean): System.Delegate;
  readonly body: System.Linq.Expressions.Expression;
  readonly name: string;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly parameters: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.ParameterExpression>;
  readonly returnType: System.Type;
  readonly tailCall: boolean;
  readonly type: System.Type;
}

declare global {
  namespace System.Linq.Expressions {
    type LambdaExpression = import("./LambdaExpression").LambdaExpression;
  }
}

export interface LambdaExpressionHostType extends HostType<LambdaExpression, ReferenceTypeTrait> {
  readonly canCompileToIL: boolean;
  readonly canInterpret: boolean;
}

export {};
