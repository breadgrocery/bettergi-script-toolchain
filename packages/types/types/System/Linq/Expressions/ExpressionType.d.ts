import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const expressionTypeBrand: unique symbol;
export interface ExpressionType extends ClrHostValue {
  readonly [expressionTypeBrand]: true;
}

declare global {
  namespace System.Linq.Expressions {
    type ExpressionType = import("./ExpressionType").ExpressionType;
  }
}

export interface ExpressionTypeHostType extends HostType<ExpressionType, EnumTypeTrait> {
  readonly add: ExpressionType;
  readonly addChecked: ExpressionType;
  readonly and: ExpressionType;
  readonly andAlso: ExpressionType;
  readonly arrayLength: ExpressionType;
  readonly arrayIndex: ExpressionType;
  readonly call: ExpressionType;
  readonly coalesce: ExpressionType;
  readonly conditional: ExpressionType;
  readonly constant: ExpressionType;
  readonly convert: ExpressionType;
  readonly convertChecked: ExpressionType;
  readonly divide: ExpressionType;
  readonly equal: ExpressionType;
  readonly exclusiveOr: ExpressionType;
  readonly greaterThan: ExpressionType;
  readonly greaterThanOrEqual: ExpressionType;
  readonly invoke: ExpressionType;
  readonly lambda: ExpressionType;
  readonly leftShift: ExpressionType;
  readonly lessThan: ExpressionType;
  readonly lessThanOrEqual: ExpressionType;
  readonly listInit: ExpressionType;
  readonly memberAccess: ExpressionType;
  readonly memberInit: ExpressionType;
  readonly modulo: ExpressionType;
  readonly multiply: ExpressionType;
  readonly multiplyChecked: ExpressionType;
  readonly negate: ExpressionType;
  readonly unaryPlus: ExpressionType;
  readonly negateChecked: ExpressionType;
  readonly "new": ExpressionType;
  readonly newArrayInit: ExpressionType;
  readonly newArrayBounds: ExpressionType;
  readonly not: ExpressionType;
  readonly notEqual: ExpressionType;
  readonly or: ExpressionType;
  readonly orElse: ExpressionType;
  readonly parameter: ExpressionType;
  readonly power: ExpressionType;
  readonly quote: ExpressionType;
  readonly rightShift: ExpressionType;
  readonly subtract: ExpressionType;
  readonly subtractChecked: ExpressionType;
  readonly typeAs: ExpressionType;
  readonly typeIs: ExpressionType;
  readonly assign: ExpressionType;
  readonly block: ExpressionType;
  readonly debugInfo: ExpressionType;
  readonly decrement: ExpressionType;
  readonly dynamic: ExpressionType;
  readonly default: ExpressionType;
  readonly extension: ExpressionType;
  readonly goto: ExpressionType;
  readonly increment: ExpressionType;
  readonly index: ExpressionType;
  readonly label: ExpressionType;
  readonly runtimeVariables: ExpressionType;
  readonly loop: ExpressionType;
  readonly switch: ExpressionType;
  readonly throw: ExpressionType;
  readonly try: ExpressionType;
  readonly unbox: ExpressionType;
  readonly addAssign: ExpressionType;
  readonly andAssign: ExpressionType;
  readonly divideAssign: ExpressionType;
  readonly exclusiveOrAssign: ExpressionType;
  readonly leftShiftAssign: ExpressionType;
  readonly moduloAssign: ExpressionType;
  readonly multiplyAssign: ExpressionType;
  readonly orAssign: ExpressionType;
  readonly powerAssign: ExpressionType;
  readonly rightShiftAssign: ExpressionType;
  readonly subtractAssign: ExpressionType;
  readonly addAssignChecked: ExpressionType;
  readonly multiplyAssignChecked: ExpressionType;
  readonly subtractAssignChecked: ExpressionType;
  readonly preIncrementAssign: ExpressionType;
  readonly preDecrementAssign: ExpressionType;
  readonly postIncrementAssign: ExpressionType;
  readonly postDecrementAssign: ExpressionType;
  readonly typeEqual: ExpressionType;
  readonly onesComplement: ExpressionType;
  readonly isTrue: ExpressionType;
  readonly isFalse: ExpressionType;
}

export {};
