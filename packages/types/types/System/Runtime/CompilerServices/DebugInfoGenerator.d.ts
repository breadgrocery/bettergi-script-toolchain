import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Linq/Expressions/DebugInfoExpression";
import "../../Linq/Expressions/LambdaExpression";

declare const debugInfoGeneratorBrand: unique symbol;
export interface DebugInfoGenerator extends ClrHostValue {
  readonly [debugInfoGeneratorBrand]: true;
  markSequencePoint(
    method: System.Linq.Expressions.LambdaExpression,
    ilOffset: number | StrongNumeric<Int32Host>,
    sequencePoint: System.Linq.Expressions.DebugInfoExpression
  ): VoidResult;
}

declare global {
  namespace System.Runtime.CompilerServices {
    type DebugInfoGenerator = import("./DebugInfoGenerator").DebugInfoGenerator;
  }
}

export interface DebugInfoGeneratorHostType extends HostType<
  DebugInfoGenerator,
  ReferenceTypeTrait
> {
  createPdbGenerator(): System.Runtime.CompilerServices.DebugInfoGenerator;
}

export {};
