import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";
import "./ExceptionHandlingClauseOptions";

declare const exceptionHandlingClauseBrand: unique symbol;
export interface ExceptionHandlingClause extends ClrHostValue {
  readonly [exceptionHandlingClauseBrand]: true;
  readonly catchType: System.Type;
  readonly filterOffset: number;
  readonly flags: System.Reflection.ExceptionHandlingClauseOptions;
  readonly handlerLength: number;
  readonly handlerOffset: number;
  readonly tryLength: number;
  readonly tryOffset: number;
  toString(): string;
}

declare global {
  namespace System.Reflection {
    type ExceptionHandlingClause = import("./ExceptionHandlingClause").ExceptionHandlingClause;
  }
}

export interface ExceptionHandlingClauseHostType extends HostType<
  ExceptionHandlingClause,
  ReferenceTypeTrait
> {}

export {};
