import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";

declare const criticalFinalizerObjectBrand: unique symbol;
export interface CriticalFinalizerObject extends ClrHostValue {
  readonly [criticalFinalizerObjectBrand]: true;
}

declare global {
  namespace System.Runtime.ConstrainedExecution {
    type CriticalFinalizerObject = import("./CriticalFinalizerObject").CriticalFinalizerObject;
  }
}

export interface CriticalFinalizerObjectHostType extends HostType<
  CriticalFinalizerObject,
  ReferenceTypeTrait
> {}

export {};
