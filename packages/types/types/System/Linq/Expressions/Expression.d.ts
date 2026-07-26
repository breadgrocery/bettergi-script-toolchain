import type {
  ClrHostValue,
  EnumInput,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  IsFamilyArgumentOmitted,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import "../../Collections/Generic/IEnumerable";
import "../../Guid";
import "../../Reflection/ConstructorInfo";
import "../../Reflection/FieldInfo";
import "../../Reflection/MemberInfo";
import "../../Reflection/MethodInfo";
import "../../Reflection/PropertyInfo";
import "../../Runtime/CompilerServices/CallSiteBinder";
import "../../Runtime/CompilerServices/DebugInfoGenerator";
import "../../V8SplitProxyHelpers";
import "./BinaryExpression";
import "./BlockExpression";
import "./CatchBlock";
import "./ConditionalExpression";
import "./ConstantExpression";
import "./DebugInfoExpression";
import "./DefaultExpression";
import "./DynamicExpression";
import "./ElementInit";
import "./ExpressionType";
import "./GotoExpression";
import "./GotoExpressionKind";
import "./IndexExpression";
import "./InvocationExpression";
import "./LabelExpression";
import "./LabelTarget";
import "./LambdaExpression";
import "./ListInitExpression";
import "./LoopExpression";
import "./MemberAssignment";
import "./MemberBinding";
import "./MemberExpression";
import "./MemberInitExpression";
import "./MemberListBinding";
import "./MemberMemberBinding";
import "./MethodCallExpression";
import "./NewArrayExpression";
import "./NewExpression";
import "./ParameterExpression";
import "./RuntimeVariablesExpression";
import "./SwitchCase";
import "./SwitchExpression";
import "./SymbolDocumentInfo";
import "./TryExpression";
import "./TypeBinaryExpression";
import "./UnaryExpression";

declare const expressionArity0Brand: unique symbol;
export interface _ExpressionArity0 extends ClrHostValue {
  readonly [expressionArity0Brand]: true;
  readonly canReduce: boolean;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly type: System.Type;
  reduce(): System.Linq.Expressions.Expression;
  reduceAndCheck(): System.Linq.Expressions.Expression;
  reduceExtensions(): System.Linq.Expressions.Expression;
  toString(): string;
}

export interface _ExpressionArity0HostType extends HostType<_ExpressionArity0, ReferenceTypeTrait> {
  assign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  makeBinary(
    binaryType: EnumInput<System.Linq.Expressions.ExpressionType>,
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  makeBinary(
    binaryType: EnumInput<System.Linq.Expressions.ExpressionType>,
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    liftToNull: boolean,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  makeBinary(
    binaryType: EnumInput<System.Linq.Expressions.ExpressionType>,
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    liftToNull: boolean,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  equal(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  equal(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    liftToNull: boolean,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  referenceEqual(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  notEqual(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  notEqual(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    liftToNull: boolean,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  referenceNotEqual(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  greaterThan(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  greaterThan(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    liftToNull: boolean,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  lessThan(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  lessThan(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    liftToNull: boolean,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  greaterThanOrEqual(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  greaterThanOrEqual(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    liftToNull: boolean,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  lessThanOrEqual(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  lessThanOrEqual(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    liftToNull: boolean,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  andAlso(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  andAlso(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  orElse(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  orElse(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  coalesce(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  coalesce(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  add(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  add(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  addAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  addAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  addAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  addAssignChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  addAssignChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  addAssignChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  addChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  addChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  subtract(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  subtract(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  subtractAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  subtractAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  subtractAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  subtractAssignChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  subtractAssignChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  subtractAssignChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  subtractChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  subtractChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  divide(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  divide(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  divideAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  divideAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  divideAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  modulo(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  modulo(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  moduloAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  moduloAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  moduloAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  multiply(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  multiply(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  multiplyAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  multiplyAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  multiplyAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  multiplyAssignChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  multiplyAssignChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  multiplyAssignChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  multiplyChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  multiplyChecked(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  leftShift(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  leftShift(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  leftShiftAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  leftShiftAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  leftShiftAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  rightShift(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  rightShift(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  rightShiftAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  rightShiftAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  rightShiftAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  and(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  and(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  andAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  andAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  andAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  or(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  or(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  orAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  orAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  orAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  exclusiveOr(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  exclusiveOr(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  exclusiveOrAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  exclusiveOrAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  exclusiveOrAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  power(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  power(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  powerAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  powerAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.BinaryExpression;
  powerAssign(
    left: System.Linq.Expressions.Expression,
    right: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null,
    conversion: System.Linq.Expressions.LambdaExpression | null
  ): System.Linq.Expressions.BinaryExpression;
  arrayIndex(
    array: System.Linq.Expressions.Expression,
    index: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BinaryExpression;
  block(
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BlockExpression;
  block(
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression,
    arg2: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BlockExpression;
  block(
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression,
    arg2: System.Linq.Expressions.Expression,
    arg3: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BlockExpression;
  block(
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression,
    arg2: System.Linq.Expressions.Expression,
    arg3: System.Linq.Expressions.Expression,
    arg4: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.BlockExpression;
  block(
    expressions: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.BlockExpression;
  block(
    ...expressions: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.BlockExpression;
  block(
    expressions: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.BlockExpression;
  block(
    type: System.Type,
    expressions: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.BlockExpression;
  block(
    type: System.Type,
    ...expressions: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.BlockExpression;
  block(
    type: System.Type,
    expressions: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.BlockExpression;
  block(
    variables: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null,
    expressions: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.BlockExpression;
  block(
    variables: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null,
    ...expressions: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.BlockExpression;
  block(
    type: System.Type,
    variables: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null,
    expressions: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.BlockExpression;
  block(
    type: System.Type,
    variables: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null,
    ...expressions: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.BlockExpression;
  block(
    variables: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null,
    expressions: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.BlockExpression;
  block(
    type: System.Type,
    variables: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null,
    expressions: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.BlockExpression;
  catch(
    type: System.Type,
    body: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.CatchBlock;
  catch(
    variable: System.Linq.Expressions.ParameterExpression,
    body: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.CatchBlock;
  catch(
    type: System.Type,
    body: System.Linq.Expressions.Expression,
    filter: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.CatchBlock;
  catch(
    variable: System.Linq.Expressions.ParameterExpression,
    body: System.Linq.Expressions.Expression,
    filter: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.CatchBlock;
  makeCatchBlock(
    type: System.Type,
    variable: System.Linq.Expressions.ParameterExpression | null,
    body: System.Linq.Expressions.Expression,
    filter: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.CatchBlock;
  condition(
    test: System.Linq.Expressions.Expression,
    ifTrue: System.Linq.Expressions.Expression,
    ifFalse: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.ConditionalExpression;
  condition(
    test: System.Linq.Expressions.Expression,
    ifTrue: System.Linq.Expressions.Expression,
    ifFalse: System.Linq.Expressions.Expression,
    type: System.Type
  ): System.Linq.Expressions.ConditionalExpression;
  ifThen(
    test: System.Linq.Expressions.Expression,
    ifTrue: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.ConditionalExpression;
  ifThenElse(
    test: System.Linq.Expressions.Expression,
    ifTrue: System.Linq.Expressions.Expression,
    ifFalse: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.ConditionalExpression;
  constant(value: unknown | null): System.Linq.Expressions.ConstantExpression;
  constant(value: unknown | null, type: System.Type): System.Linq.Expressions.ConstantExpression;
  debugInfo(
    document: System.Linq.Expressions.SymbolDocumentInfo,
    startLine: number | StrongNumeric<Int32Host>,
    startColumn: number | StrongNumeric<Int32Host>,
    endLine: number | StrongNumeric<Int32Host>,
    endColumn: number | StrongNumeric<Int32Host>
  ): System.Linq.Expressions.DebugInfoExpression;
  clearDebugInfo(
    document: System.Linq.Expressions.SymbolDocumentInfo
  ): System.Linq.Expressions.DebugInfoExpression;
  empty(): System.Linq.Expressions.DefaultExpression;
  default(type: System.Type): System.Linq.Expressions.DefaultExpression;
  elementInit(
    addMethod: System.Reflection.MethodInfo,
    arguments: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.ElementInit;
  elementInit(
    addMethod: System.Reflection.MethodInfo,
    ...arguments: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.ElementInit;
  elementInit(
    addMethod: System.Reflection.MethodInfo,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.ElementInit;
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
  makeDynamic(
    delegateType: System.Type,
    binder: System.Runtime.CompilerServices.CallSiteBinder,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
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
  break(target: System.Linq.Expressions.LabelTarget): System.Linq.Expressions.GotoExpression;
  break(
    target: System.Linq.Expressions.LabelTarget,
    value: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.GotoExpression;
  break(
    target: System.Linq.Expressions.LabelTarget,
    type: System.Type
  ): System.Linq.Expressions.GotoExpression;
  break(
    target: System.Linq.Expressions.LabelTarget,
    value: System.Linq.Expressions.Expression | null,
    type: System.Type
  ): System.Linq.Expressions.GotoExpression;
  continue(target: System.Linq.Expressions.LabelTarget): System.Linq.Expressions.GotoExpression;
  continue(
    target: System.Linq.Expressions.LabelTarget,
    type: System.Type
  ): System.Linq.Expressions.GotoExpression;
  return(target: System.Linq.Expressions.LabelTarget): System.Linq.Expressions.GotoExpression;
  return(
    target: System.Linq.Expressions.LabelTarget,
    type: System.Type
  ): System.Linq.Expressions.GotoExpression;
  return(
    target: System.Linq.Expressions.LabelTarget,
    value: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.GotoExpression;
  return(
    target: System.Linq.Expressions.LabelTarget,
    value: System.Linq.Expressions.Expression | null,
    type: System.Type
  ): System.Linq.Expressions.GotoExpression;
  goto(target: System.Linq.Expressions.LabelTarget): System.Linq.Expressions.GotoExpression;
  goto(
    target: System.Linq.Expressions.LabelTarget,
    type: System.Type
  ): System.Linq.Expressions.GotoExpression;
  goto(
    target: System.Linq.Expressions.LabelTarget,
    value: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.GotoExpression;
  goto(
    target: System.Linq.Expressions.LabelTarget,
    value: System.Linq.Expressions.Expression | null,
    type: System.Type
  ): System.Linq.Expressions.GotoExpression;
  makeGoto(
    kind: EnumInput<System.Linq.Expressions.GotoExpressionKind>,
    target: System.Linq.Expressions.LabelTarget,
    value: System.Linq.Expressions.Expression | null,
    type: System.Type
  ): System.Linq.Expressions.GotoExpression;
  makeIndex(
    instance: System.Linq.Expressions.Expression,
    indexer: System.Reflection.PropertyInfo | null,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
  ): System.Linq.Expressions.IndexExpression;
  arrayAccess(
    array: System.Linq.Expressions.Expression,
    indexes: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.IndexExpression;
  arrayAccess(
    array: System.Linq.Expressions.Expression,
    ...indexes: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.IndexExpression;
  arrayAccess(
    array: System.Linq.Expressions.Expression,
    indexes: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
  ): System.Linq.Expressions.IndexExpression;
  property(
    instance: System.Linq.Expressions.Expression,
    propertyName: string,
    arguments: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.IndexExpression;
  property(
    instance: System.Linq.Expressions.Expression,
    propertyName: string,
    ...arguments: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.IndexExpression;
  property(
    instance: System.Linq.Expressions.Expression | null,
    indexer: System.Reflection.PropertyInfo,
    arguments: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.IndexExpression;
  property(
    instance: System.Linq.Expressions.Expression | null,
    indexer: System.Reflection.PropertyInfo,
    ...arguments: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.IndexExpression;
  property(
    instance: System.Linq.Expressions.Expression | null,
    indexer: System.Reflection.PropertyInfo,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
  ): System.Linq.Expressions.IndexExpression;
  invoke(
    expression: System.Linq.Expressions.Expression,
    arguments: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.InvocationExpression;
  invoke(
    expression: System.Linq.Expressions.Expression,
    ...arguments: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.InvocationExpression;
  invoke(
    expression: System.Linq.Expressions.Expression,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
  ): System.Linq.Expressions.InvocationExpression;
  label(target: System.Linq.Expressions.LabelTarget): System.Linq.Expressions.LabelExpression;
  label(
    target: System.Linq.Expressions.LabelTarget,
    defaultValue: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.LabelExpression;
  label(): System.Linq.Expressions.LabelTarget;
  label(name: string | null): System.Linq.Expressions.LabelTarget;
  label(type: System.Type): System.Linq.Expressions.LabelTarget;
  label(type: System.Type, name: string | null): System.Linq.Expressions.LabelTarget;
  lambda<TDelegate>(
    type1: HostType<TDelegate>,
    body: System.Linq.Expressions.Expression,
    parameters: HostArray<System.Linq.Expressions.ParameterExpression>
  ): System.Linq.Expressions.Expression<TDelegate>;
  lambda<TDelegate>(
    type1: HostType<TDelegate>,
    body: System.Linq.Expressions.Expression,
    ...parameters: System.Linq.Expressions.ParameterExpression[]
  ): System.Linq.Expressions.Expression<TDelegate>;
  lambda<TDelegate>(
    type1: HostType<TDelegate>,
    body: System.Linq.Expressions.Expression,
    tailCall: boolean,
    parameters: HostArray<System.Linq.Expressions.ParameterExpression>
  ): System.Linq.Expressions.Expression<TDelegate>;
  lambda<TDelegate>(
    type1: HostType<TDelegate>,
    body: System.Linq.Expressions.Expression,
    tailCall: boolean,
    ...parameters: System.Linq.Expressions.ParameterExpression[]
  ): System.Linq.Expressions.Expression<TDelegate>;
  lambda<TDelegate>(
    type1: HostType<TDelegate>,
    body: System.Linq.Expressions.Expression,
    parameters: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null
  ): System.Linq.Expressions.Expression<TDelegate>;
  lambda<TDelegate>(
    type1: HostType<TDelegate>,
    body: System.Linq.Expressions.Expression,
    tailCall: boolean,
    parameters: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null
  ): System.Linq.Expressions.Expression<TDelegate>;
  lambda<TDelegate>(
    type1: HostType<TDelegate>,
    body: System.Linq.Expressions.Expression,
    name: string | null,
    parameters: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null
  ): System.Linq.Expressions.Expression<TDelegate>;
  lambda<TDelegate>(
    type1: HostType<TDelegate>,
    body: System.Linq.Expressions.Expression,
    name: string | null,
    tailCall: boolean,
    parameters: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null
  ): System.Linq.Expressions.Expression<TDelegate>;
  lambda(
    body: System.Linq.Expressions.Expression,
    parameters: HostArray<System.Linq.Expressions.ParameterExpression>
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    body: System.Linq.Expressions.Expression,
    ...parameters: System.Linq.Expressions.ParameterExpression[]
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    body: System.Linq.Expressions.Expression,
    tailCall: boolean,
    parameters: HostArray<System.Linq.Expressions.ParameterExpression>
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    body: System.Linq.Expressions.Expression,
    tailCall: boolean,
    ...parameters: System.Linq.Expressions.ParameterExpression[]
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    body: System.Linq.Expressions.Expression,
    parameters: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    body: System.Linq.Expressions.Expression,
    tailCall: boolean,
    parameters: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    delegateType: System.Type,
    body: System.Linq.Expressions.Expression,
    parameters: HostArray<System.Linq.Expressions.ParameterExpression>
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    delegateType: System.Type,
    body: System.Linq.Expressions.Expression,
    ...parameters: System.Linq.Expressions.ParameterExpression[]
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    delegateType: System.Type,
    body: System.Linq.Expressions.Expression,
    tailCall: boolean,
    parameters: HostArray<System.Linq.Expressions.ParameterExpression>
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    delegateType: System.Type,
    body: System.Linq.Expressions.Expression,
    tailCall: boolean,
    ...parameters: System.Linq.Expressions.ParameterExpression[]
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    delegateType: System.Type,
    body: System.Linq.Expressions.Expression,
    parameters: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    delegateType: System.Type,
    body: System.Linq.Expressions.Expression,
    tailCall: boolean,
    parameters: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    body: System.Linq.Expressions.Expression,
    name: string | null,
    parameters: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    body: System.Linq.Expressions.Expression,
    name: string | null,
    tailCall: boolean,
    parameters: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    delegateType: System.Type,
    body: System.Linq.Expressions.Expression,
    name: string | null,
    parameters: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null
  ): System.Linq.Expressions.LambdaExpression;
  lambda(
    delegateType: System.Type,
    body: System.Linq.Expressions.Expression,
    name: string | null,
    tailCall: boolean,
    parameters: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null
  ): System.Linq.Expressions.LambdaExpression;
  getFuncType(typeArgs: HostArray<System.Type>): System.Type;
  getFuncType(...typeArgs: System.Type[]): System.Type;
  tryGetFuncType(typeArgs: HostArray<System.Type>, funcType: HostVariableOut<System.Type>): boolean;
  getActionType(typeArgs: HostArray<System.Type>): System.Type;
  getActionType(...typeArgs: System.Type[]): System.Type;
  tryGetActionType(
    typeArgs: HostArray<System.Type>,
    actionType: HostVariableOut<System.Type>
  ): boolean;
  getDelegateType(typeArgs: HostArray<System.Type>): System.Type;
  getDelegateType(...typeArgs: System.Type[]): System.Type;
  listInit(
    newExpression: System.Linq.Expressions.NewExpression,
    initializers: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.ListInitExpression;
  listInit(
    newExpression: System.Linq.Expressions.NewExpression,
    ...initializers: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.ListInitExpression;
  listInit(
    newExpression: System.Linq.Expressions.NewExpression,
    initializers: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.ListInitExpression;
  listInit(
    newExpression: System.Linq.Expressions.NewExpression,
    addMethod: System.Reflection.MethodInfo | null,
    initializers: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.ListInitExpression;
  listInit(
    newExpression: System.Linq.Expressions.NewExpression,
    addMethod: System.Reflection.MethodInfo | null,
    ...initializers: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.ListInitExpression;
  listInit(
    newExpression: System.Linq.Expressions.NewExpression,
    addMethod: System.Reflection.MethodInfo | null,
    initializers: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.ListInitExpression;
  listInit(
    newExpression: System.Linq.Expressions.NewExpression,
    initializers: HostArray<System.Linq.Expressions.ElementInit>
  ): System.Linq.Expressions.ListInitExpression;
  listInit(
    newExpression: System.Linq.Expressions.NewExpression,
    ...initializers: System.Linq.Expressions.ElementInit[]
  ): System.Linq.Expressions.ListInitExpression;
  listInit(
    newExpression: System.Linq.Expressions.NewExpression,
    initializers: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ElementInit>
  ): System.Linq.Expressions.ListInitExpression;
  loop(body: System.Linq.Expressions.Expression): System.Linq.Expressions.LoopExpression;
  loop(
    body: System.Linq.Expressions.Expression,
    break_: System.Linq.Expressions.LabelTarget | null
  ): System.Linq.Expressions.LoopExpression;
  loop(
    body: System.Linq.Expressions.Expression,
    break_: System.Linq.Expressions.LabelTarget | null,
    continue_: System.Linq.Expressions.LabelTarget | null
  ): System.Linq.Expressions.LoopExpression;
  bind(
    member: System.Reflection.MemberInfo,
    expression: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.MemberAssignment;
  bind(
    propertyAccessor: System.Reflection.MethodInfo,
    expression: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.MemberAssignment;
  field(
    expression: System.Linq.Expressions.Expression | null,
    field: System.Reflection.FieldInfo
  ): System.Linq.Expressions.MemberExpression;
  field(
    expression: System.Linq.Expressions.Expression,
    fieldName: string
  ): System.Linq.Expressions.MemberExpression;
  field(
    expression: System.Linq.Expressions.Expression | null,
    type: System.Type,
    fieldName: string
  ): System.Linq.Expressions.MemberExpression;
  property(
    expression: System.Linq.Expressions.Expression,
    propertyName: string
  ): System.Linq.Expressions.MemberExpression;
  property(
    expression: System.Linq.Expressions.Expression | null,
    type: System.Type,
    propertyName: string
  ): System.Linq.Expressions.MemberExpression;
  property(
    expression: System.Linq.Expressions.Expression | null,
    property: System.Reflection.PropertyInfo
  ): System.Linq.Expressions.MemberExpression;
  property(
    expression: System.Linq.Expressions.Expression | null,
    propertyAccessor: System.Reflection.MethodInfo
  ): System.Linq.Expressions.MemberExpression;
  propertyOrField(
    expression: System.Linq.Expressions.Expression,
    propertyOrFieldName: string
  ): System.Linq.Expressions.MemberExpression;
  makeMemberAccess(
    expression: System.Linq.Expressions.Expression | null,
    member: System.Reflection.MemberInfo
  ): System.Linq.Expressions.MemberExpression;
  memberInit(
    newExpression: System.Linq.Expressions.NewExpression,
    bindings: HostArray<System.Linq.Expressions.MemberBinding>
  ): System.Linq.Expressions.MemberInitExpression;
  memberInit(
    newExpression: System.Linq.Expressions.NewExpression,
    ...bindings: System.Linq.Expressions.MemberBinding[]
  ): System.Linq.Expressions.MemberInitExpression;
  memberInit(
    newExpression: System.Linq.Expressions.NewExpression,
    bindings: System.Collections.Generic.IEnumerable<System.Linq.Expressions.MemberBinding>
  ): System.Linq.Expressions.MemberInitExpression;
  listBind(
    member: System.Reflection.MemberInfo,
    initializers: HostArray<System.Linq.Expressions.ElementInit>
  ): System.Linq.Expressions.MemberListBinding;
  listBind(
    member: System.Reflection.MemberInfo,
    ...initializers: System.Linq.Expressions.ElementInit[]
  ): System.Linq.Expressions.MemberListBinding;
  listBind(
    member: System.Reflection.MemberInfo,
    initializers: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ElementInit>
  ): System.Linq.Expressions.MemberListBinding;
  listBind(
    propertyAccessor: System.Reflection.MethodInfo,
    initializers: HostArray<System.Linq.Expressions.ElementInit>
  ): System.Linq.Expressions.MemberListBinding;
  listBind(
    propertyAccessor: System.Reflection.MethodInfo,
    ...initializers: System.Linq.Expressions.ElementInit[]
  ): System.Linq.Expressions.MemberListBinding;
  listBind(
    propertyAccessor: System.Reflection.MethodInfo,
    initializers: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ElementInit>
  ): System.Linq.Expressions.MemberListBinding;
  memberBind(
    member: System.Reflection.MemberInfo,
    bindings: HostArray<System.Linq.Expressions.MemberBinding>
  ): System.Linq.Expressions.MemberMemberBinding;
  memberBind(
    member: System.Reflection.MemberInfo,
    ...bindings: System.Linq.Expressions.MemberBinding[]
  ): System.Linq.Expressions.MemberMemberBinding;
  memberBind(
    member: System.Reflection.MemberInfo,
    bindings: System.Collections.Generic.IEnumerable<System.Linq.Expressions.MemberBinding>
  ): System.Linq.Expressions.MemberMemberBinding;
  memberBind(
    propertyAccessor: System.Reflection.MethodInfo,
    bindings: HostArray<System.Linq.Expressions.MemberBinding>
  ): System.Linq.Expressions.MemberMemberBinding;
  memberBind(
    propertyAccessor: System.Reflection.MethodInfo,
    ...bindings: System.Linq.Expressions.MemberBinding[]
  ): System.Linq.Expressions.MemberMemberBinding;
  memberBind(
    propertyAccessor: System.Reflection.MethodInfo,
    bindings: System.Collections.Generic.IEnumerable<System.Linq.Expressions.MemberBinding>
  ): System.Linq.Expressions.MemberMemberBinding;
  call(
    method: System.Reflection.MethodInfo,
    arg0: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    method: System.Reflection.MethodInfo,
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    method: System.Reflection.MethodInfo,
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression,
    arg2: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    method: System.Reflection.MethodInfo,
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression,
    arg2: System.Linq.Expressions.Expression,
    arg3: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    method: System.Reflection.MethodInfo,
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression,
    arg2: System.Linq.Expressions.Expression,
    arg3: System.Linq.Expressions.Expression,
    arg4: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    method: System.Reflection.MethodInfo,
    arguments: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    method: System.Reflection.MethodInfo,
    ...arguments: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    method: System.Reflection.MethodInfo,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    instance: System.Linq.Expressions.Expression | null,
    method: System.Reflection.MethodInfo
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    instance: System.Linq.Expressions.Expression | null,
    method: System.Reflection.MethodInfo,
    arguments: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    instance: System.Linq.Expressions.Expression | null,
    method: System.Reflection.MethodInfo,
    ...arguments: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    instance: System.Linq.Expressions.Expression | null,
    method: System.Reflection.MethodInfo,
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    instance: System.Linq.Expressions.Expression | null,
    method: System.Reflection.MethodInfo,
    arg0: System.Linq.Expressions.Expression,
    arg1: System.Linq.Expressions.Expression,
    arg2: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    instance: System.Linq.Expressions.Expression,
    methodName: string,
    typeArguments: HostArray<System.Type> | null,
    arguments: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    instance: System.Linq.Expressions.Expression,
    methodName: string,
    typeArguments: HostArray<System.Type> | null,
    ...arguments: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    type: System.Type,
    methodName: string,
    typeArguments: HostArray<System.Type> | null,
    arguments: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    type: System.Type,
    methodName: string,
    typeArguments: HostArray<System.Type> | null,
    ...arguments: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.MethodCallExpression;
  call(
    instance: System.Linq.Expressions.Expression | null,
    method: System.Reflection.MethodInfo,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
  ): System.Linq.Expressions.MethodCallExpression;
  arrayIndex(
    array: System.Linq.Expressions.Expression,
    indexes: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.MethodCallExpression;
  arrayIndex(
    array: System.Linq.Expressions.Expression,
    ...indexes: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.MethodCallExpression;
  arrayIndex(
    array: System.Linq.Expressions.Expression,
    indexes: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.MethodCallExpression;
  newArrayInit(
    type: System.Type,
    initializers: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.NewArrayExpression;
  newArrayInit(
    type: System.Type,
    ...initializers: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.NewArrayExpression;
  newArrayInit(
    type: System.Type,
    initializers: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.NewArrayExpression;
  newArrayBounds(
    type: System.Type,
    bounds: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.NewArrayExpression;
  newArrayBounds(
    type: System.Type,
    ...bounds: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.NewArrayExpression;
  newArrayBounds(
    type: System.Type,
    bounds: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.NewArrayExpression;
  "new"(constructor: System.Reflection.ConstructorInfo): System.Linq.Expressions.NewExpression;
  "new"(
    constructor: System.Reflection.ConstructorInfo,
    arguments: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.NewExpression;
  "new"(
    constructor: System.Reflection.ConstructorInfo,
    ...arguments: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.NewExpression;
  "new"(
    constructor: System.Reflection.ConstructorInfo,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null
  ): System.Linq.Expressions.NewExpression;
  "new"(
    constructor: System.Reflection.ConstructorInfo,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null,
    members: System.Collections.Generic.IEnumerable<System.Reflection.MemberInfo> | null
  ): System.Linq.Expressions.NewExpression;
  "new"(
    constructor: System.Reflection.ConstructorInfo,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null,
    members: HostArray<System.Reflection.MemberInfo>
  ): System.Linq.Expressions.NewExpression;
  "new"(
    constructor: System.Reflection.ConstructorInfo,
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression> | null,
    ...members: System.Reflection.MemberInfo[]
  ): System.Linq.Expressions.NewExpression;
  "new"(type: System.Type): System.Linq.Expressions.NewExpression;
  parameter(type: System.Type): System.Linq.Expressions.ParameterExpression;
  variable(type: System.Type): System.Linq.Expressions.ParameterExpression;
  parameter(type: System.Type, name: string | null): System.Linq.Expressions.ParameterExpression;
  variable(type: System.Type, name: string | null): System.Linq.Expressions.ParameterExpression;
  runtimeVariables(
    variables: HostArray<System.Linq.Expressions.ParameterExpression>
  ): System.Linq.Expressions.RuntimeVariablesExpression;
  runtimeVariables(
    ...variables: System.Linq.Expressions.ParameterExpression[]
  ): System.Linq.Expressions.RuntimeVariablesExpression;
  runtimeVariables(
    variables: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression>
  ): System.Linq.Expressions.RuntimeVariablesExpression;
  switchCase(
    body: System.Linq.Expressions.Expression,
    testValues: HostArray<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.SwitchCase;
  switchCase(
    body: System.Linq.Expressions.Expression,
    ...testValues: System.Linq.Expressions.Expression[]
  ): System.Linq.Expressions.SwitchCase;
  switchCase(
    body: System.Linq.Expressions.Expression,
    testValues: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.SwitchCase;
  switch(
    switchValue: System.Linq.Expressions.Expression,
    cases: HostArray<System.Linq.Expressions.SwitchCase>
  ): System.Linq.Expressions.SwitchExpression;
  switch(
    switchValue: System.Linq.Expressions.Expression,
    ...cases: System.Linq.Expressions.SwitchCase[]
  ): System.Linq.Expressions.SwitchExpression;
  switch(
    switchValue: System.Linq.Expressions.Expression,
    defaultBody: System.Linq.Expressions.Expression | null,
    cases: HostArray<System.Linq.Expressions.SwitchCase>
  ): System.Linq.Expressions.SwitchExpression;
  switch(
    switchValue: System.Linq.Expressions.Expression,
    defaultBody: System.Linq.Expressions.Expression | null,
    ...cases: System.Linq.Expressions.SwitchCase[]
  ): System.Linq.Expressions.SwitchExpression;
  switch(
    switchValue: System.Linq.Expressions.Expression,
    defaultBody: System.Linq.Expressions.Expression | null,
    comparison: System.Reflection.MethodInfo | null,
    cases: HostArray<System.Linq.Expressions.SwitchCase>
  ): System.Linq.Expressions.SwitchExpression;
  switch(
    switchValue: System.Linq.Expressions.Expression,
    defaultBody: System.Linq.Expressions.Expression | null,
    comparison: System.Reflection.MethodInfo | null,
    ...cases: System.Linq.Expressions.SwitchCase[]
  ): System.Linq.Expressions.SwitchExpression;
  switch(
    type: System.Type | null,
    switchValue: System.Linq.Expressions.Expression,
    defaultBody: System.Linq.Expressions.Expression | null,
    comparison: System.Reflection.MethodInfo | null,
    cases: HostArray<System.Linq.Expressions.SwitchCase>
  ): System.Linq.Expressions.SwitchExpression;
  switch(
    type: System.Type | null,
    switchValue: System.Linq.Expressions.Expression,
    defaultBody: System.Linq.Expressions.Expression | null,
    comparison: System.Reflection.MethodInfo | null,
    ...cases: System.Linq.Expressions.SwitchCase[]
  ): System.Linq.Expressions.SwitchExpression;
  switch(
    switchValue: System.Linq.Expressions.Expression,
    defaultBody: System.Linq.Expressions.Expression | null,
    comparison: System.Reflection.MethodInfo | null,
    cases: System.Collections.Generic.IEnumerable<System.Linq.Expressions.SwitchCase> | null
  ): System.Linq.Expressions.SwitchExpression;
  switch(
    type: System.Type | null,
    switchValue: System.Linq.Expressions.Expression,
    defaultBody: System.Linq.Expressions.Expression | null,
    comparison: System.Reflection.MethodInfo | null,
    cases: System.Collections.Generic.IEnumerable<System.Linq.Expressions.SwitchCase> | null
  ): System.Linq.Expressions.SwitchExpression;
  symbolDocument(fileName: string): System.Linq.Expressions.SymbolDocumentInfo;
  symbolDocument(
    fileName: string,
    language: System.Guid
  ): System.Linq.Expressions.SymbolDocumentInfo;
  symbolDocument(
    fileName: string,
    language: System.Guid,
    languageVendor: System.Guid
  ): System.Linq.Expressions.SymbolDocumentInfo;
  symbolDocument(
    fileName: string,
    language: System.Guid,
    languageVendor: System.Guid,
    documentType: System.Guid
  ): System.Linq.Expressions.SymbolDocumentInfo;
  tryFault(
    body: System.Linq.Expressions.Expression,
    fault: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.TryExpression;
  tryFinally(
    body: System.Linq.Expressions.Expression,
    finally_: System.Linq.Expressions.Expression | null
  ): System.Linq.Expressions.TryExpression;
  tryCatch(
    body: System.Linq.Expressions.Expression,
    handlers: HostArray<System.Linq.Expressions.CatchBlock>
  ): System.Linq.Expressions.TryExpression;
  tryCatch(
    body: System.Linq.Expressions.Expression,
    ...handlers: System.Linq.Expressions.CatchBlock[]
  ): System.Linq.Expressions.TryExpression;
  tryCatchFinally(
    body: System.Linq.Expressions.Expression,
    finally_: System.Linq.Expressions.Expression | null,
    handlers: HostArray<System.Linq.Expressions.CatchBlock>
  ): System.Linq.Expressions.TryExpression;
  tryCatchFinally(
    body: System.Linq.Expressions.Expression,
    finally_: System.Linq.Expressions.Expression | null,
    ...handlers: System.Linq.Expressions.CatchBlock[]
  ): System.Linq.Expressions.TryExpression;
  makeTry(
    type: System.Type | null,
    body: System.Linq.Expressions.Expression,
    finally_: System.Linq.Expressions.Expression | null,
    fault: System.Linq.Expressions.Expression | null,
    handlers: System.Collections.Generic.IEnumerable<System.Linq.Expressions.CatchBlock> | null
  ): System.Linq.Expressions.TryExpression;
  typeIs(
    expression: System.Linq.Expressions.Expression,
    type: System.Type
  ): System.Linq.Expressions.TypeBinaryExpression;
  typeEqual(
    expression: System.Linq.Expressions.Expression,
    type: System.Type
  ): System.Linq.Expressions.TypeBinaryExpression;
  makeUnary(
    unaryType: EnumInput<System.Linq.Expressions.ExpressionType>,
    operand: System.Linq.Expressions.Expression,
    type: System.Type
  ): System.Linq.Expressions.UnaryExpression;
  makeUnary(
    unaryType: EnumInput<System.Linq.Expressions.ExpressionType>,
    operand: System.Linq.Expressions.Expression,
    type: System.Type,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  negate(expression: System.Linq.Expressions.Expression): System.Linq.Expressions.UnaryExpression;
  negate(
    expression: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  unaryPlus(
    expression: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.UnaryExpression;
  unaryPlus(
    expression: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  negateChecked(
    expression: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.UnaryExpression;
  negateChecked(
    expression: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  not(expression: System.Linq.Expressions.Expression): System.Linq.Expressions.UnaryExpression;
  not(
    expression: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  isFalse(expression: System.Linq.Expressions.Expression): System.Linq.Expressions.UnaryExpression;
  isFalse(
    expression: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  isTrue(expression: System.Linq.Expressions.Expression): System.Linq.Expressions.UnaryExpression;
  isTrue(
    expression: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  onesComplement(
    expression: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.UnaryExpression;
  onesComplement(
    expression: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  typeAs(
    expression: System.Linq.Expressions.Expression,
    type: System.Type
  ): System.Linq.Expressions.UnaryExpression;
  unbox(
    expression: System.Linq.Expressions.Expression,
    type: System.Type
  ): System.Linq.Expressions.UnaryExpression;
  convert(
    expression: System.Linq.Expressions.Expression,
    type: System.Type
  ): System.Linq.Expressions.UnaryExpression;
  convert(
    expression: System.Linq.Expressions.Expression,
    type: System.Type,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  convertChecked(
    expression: System.Linq.Expressions.Expression,
    type: System.Type
  ): System.Linq.Expressions.UnaryExpression;
  convertChecked(
    expression: System.Linq.Expressions.Expression,
    type: System.Type,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  arrayLength(array: System.Linq.Expressions.Expression): System.Linq.Expressions.UnaryExpression;
  quote(expression: System.Linq.Expressions.Expression): System.Linq.Expressions.UnaryExpression;
  rethrow(): System.Linq.Expressions.UnaryExpression;
  rethrow(type: System.Type): System.Linq.Expressions.UnaryExpression;
  throw(value: System.Linq.Expressions.Expression | null): System.Linq.Expressions.UnaryExpression;
  throw(
    value: System.Linq.Expressions.Expression | null,
    type: System.Type
  ): System.Linq.Expressions.UnaryExpression;
  increment(
    expression: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.UnaryExpression;
  increment(
    expression: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  decrement(
    expression: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.UnaryExpression;
  decrement(
    expression: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  preIncrementAssign(
    expression: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.UnaryExpression;
  preIncrementAssign(
    expression: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  preDecrementAssign(
    expression: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.UnaryExpression;
  preDecrementAssign(
    expression: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  postIncrementAssign(
    expression: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.UnaryExpression;
  postIncrementAssign(
    expression: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
  postDecrementAssign(
    expression: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.UnaryExpression;
  postDecrementAssign(
    expression: System.Linq.Expressions.Expression,
    method: System.Reflection.MethodInfo | null
  ): System.Linq.Expressions.UnaryExpression;
}

declare const expressionArity1Brand: unique symbol;
export interface _ExpressionArity1<TDelegate> extends Omit<
  System.Linq.Expressions.LambdaExpression,
  "compile" | "update"
> {
  readonly [expressionArity1Brand]: true;
  compile(): TDelegate;
  compile(debugInfoGenerator: System.Runtime.CompilerServices.DebugInfoGenerator): TDelegate;
  compile(preferInterpretation: boolean): TDelegate;
  update(
    body: System.Linq.Expressions.Expression,
    parameters: System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> | null
  ): System.Linq.Expressions.Expression;
}

export interface _ExpressionArity1HostType<TDelegate> extends HostType<
  _ExpressionArity1<TDelegate>,
  ReferenceTypeTrait
> {}

export type ExpressionFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _ExpressionArity0 : _ExpressionArity1<T1>;

declare global {
  namespace System.Linq.Expressions {
    type Expression<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./Expression").ExpressionFamily<T1>;
  }
}

export type ExpressionHostType = _ExpressionArity0HostType;

export {};
