import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "./Expression";
import "./MemberBinding";

declare const memberAssignmentBrand: unique symbol;
export interface MemberAssignment extends Omit<
  System.Linq.Expressions.MemberBinding,
  "expression" | "update"
> {
  readonly [memberAssignmentBrand]: true;
  readonly expression: System.Linq.Expressions.Expression;
  update(expression: System.Linq.Expressions.Expression): System.Linq.Expressions.MemberAssignment;
}

declare global {
  namespace System.Linq.Expressions {
    type MemberAssignment = import("./MemberAssignment").MemberAssignment;
  }
}

export interface MemberAssignmentHostType extends HostType<MemberAssignment, ReferenceTypeTrait> {}

export {};
