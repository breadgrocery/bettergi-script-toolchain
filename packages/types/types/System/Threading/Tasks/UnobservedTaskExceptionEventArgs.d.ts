import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../AggregateException";
import "../../EventArgs";

declare const unobservedTaskExceptionEventArgsBrand: unique symbol;
export interface UnobservedTaskExceptionEventArgs extends Omit<
  System.EventArgs,
  "exception" | "observed" | "setObserved"
> {
  readonly [unobservedTaskExceptionEventArgsBrand]: true;
  readonly exception: System.AggregateException;
  readonly observed: boolean;
  setObserved(): VoidResult;
}

declare global {
  namespace System.Threading.Tasks {
    type UnobservedTaskExceptionEventArgs =
      import("./UnobservedTaskExceptionEventArgs").UnobservedTaskExceptionEventArgs;
  }
}

export interface UnobservedTaskExceptionEventArgsHostType extends HostType<
  UnobservedTaskExceptionEventArgs,
  ReferenceTypeTrait
> {
  new (exception: System.AggregateException): UnobservedTaskExceptionEventArgs;
}

export {};
