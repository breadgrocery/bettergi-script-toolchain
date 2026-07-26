import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const exceptionStatusBrand: unique symbol;
export interface ExceptionStatus extends ClrHostValue {
  readonly [exceptionStatusBrand]: true;
}

declare global {
  namespace OpenCvSharp.Internal {
    type ExceptionStatus = import("./ExceptionStatus").ExceptionStatus;
  }
}

export interface ExceptionStatusHostType extends HostType<ExceptionStatus, EnumTypeTrait> {
  readonly notOccurred: ExceptionStatus;
  readonly occurred: ExceptionStatus;
}

export {};
