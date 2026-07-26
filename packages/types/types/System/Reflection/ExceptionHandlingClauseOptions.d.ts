import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const exceptionHandlingClauseOptionsBrand: unique symbol;
export interface ExceptionHandlingClauseOptions extends ClrHostValue {
  readonly [exceptionHandlingClauseOptionsBrand]: true;
}

declare global {
  namespace System.Reflection {
    type ExceptionHandlingClauseOptions =
      import("./ExceptionHandlingClauseOptions").ExceptionHandlingClauseOptions;
  }
}

export interface ExceptionHandlingClauseOptionsHostType extends HostType<
  ExceptionHandlingClauseOptions,
  EnumTypeTrait
> {
  readonly clause: ExceptionHandlingClauseOptions;
  readonly filter: ExceptionHandlingClauseOptions;
  readonly finally: ExceptionHandlingClauseOptions;
  readonly fault: ExceptionHandlingClauseOptions;
}

export {};
