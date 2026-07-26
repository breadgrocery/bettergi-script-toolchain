import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "../../Reflection/MethodInfo";
import "./Expression";
import "./IArgumentProvider";

declare const elementInitBrand: unique symbol;
export interface ElementInit extends ClrHostValue, System.Linq.Expressions.IArgumentProviderInput {
  readonly [elementInitBrand]: true;
  getArgument(index: number | StrongNumeric<Int32Host>): System.Linq.Expressions.Expression;
  readonly addMethod: System.Reflection.MethodInfo;
  readonly argumentCount: number;
  readonly arguments: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.Expression>;
  toString(): string;
  update(
    arguments: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>
  ): System.Linq.Expressions.ElementInit;
}

declare global {
  namespace System.Linq.Expressions {
    type ElementInit = import("./ElementInit").ElementInit;
  }
}

export interface ElementInitHostType extends HostType<ElementInit, ReferenceTypeTrait> {}

export {};
