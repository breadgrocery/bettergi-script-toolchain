import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEnumerable";
import "../../Collections/ObjectModel/ReadOnlyCollection";
import "./Expression";

declare const switchCaseBrand: unique symbol;
export interface SwitchCase extends ClrHostValue {
  readonly [switchCaseBrand]: true;
  readonly body: System.Linq.Expressions.Expression;
  readonly testValues: System.Collections.ObjectModel.ReadOnlyCollection<System.Linq.Expressions.Expression>;
  toString(): string;
  update(
    testValues: System.Collections.Generic.IEnumerable<System.Linq.Expressions.Expression>,
    body: System.Linq.Expressions.Expression
  ): System.Linq.Expressions.SwitchCase;
}

declare global {
  namespace System.Linq.Expressions {
    type SwitchCase = import("./SwitchCase").SwitchCase;
  }
}

export interface SwitchCaseHostType extends HostType<SwitchCase, ReferenceTypeTrait> {}

export {};
