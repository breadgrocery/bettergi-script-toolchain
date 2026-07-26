import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "./Expression";
import "./ExpressionType";
import "./SymbolDocumentInfo";

declare const debugInfoExpressionBrand: unique symbol;
export interface DebugInfoExpression extends Omit<
  System.Linq.Expressions.Expression,
  | "document"
  | "endColumn"
  | "endLine"
  | "isClear"
  | "nodeType"
  | "startColumn"
  | "startLine"
  | "type"
> {
  readonly [debugInfoExpressionBrand]: true;
  readonly document: System.Linq.Expressions.SymbolDocumentInfo;
  readonly endColumn: number;
  readonly endLine: number;
  readonly isClear: boolean;
  readonly nodeType: System.Linq.Expressions.ExpressionType;
  readonly startColumn: number;
  readonly startLine: number;
  readonly type: System.Type;
}

declare global {
  namespace System.Linq.Expressions {
    type DebugInfoExpression = import("./DebugInfoExpression").DebugInfoExpression;
  }
}

export interface DebugInfoExpressionHostType extends HostType<
  DebugInfoExpression,
  ReferenceTypeTrait
> {}

export {};
