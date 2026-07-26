import type { ClrHostValue, HostType, StaticTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../CvErrorCallback";

declare const exceptionHandlerBrand: unique symbol;
export interface ExceptionHandler extends ClrHostValue {
  readonly [exceptionHandlerBrand]: true;
}

declare global {
  namespace OpenCvSharp.Internal {
    type ExceptionHandler = import("./ExceptionHandler").ExceptionHandler;
  }
}

export interface ExceptionHandlerHostType extends HostType<ExceptionHandler, StaticTypeTrait> {
  readonly errorHandlerCallback: OpenCvSharp.CvErrorCallback;
  registerExceptionCallback(): VoidResult;
  throwPossibleException(): VoidResult;
}

export {};
