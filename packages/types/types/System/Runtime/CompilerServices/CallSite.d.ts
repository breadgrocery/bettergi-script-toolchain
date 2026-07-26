import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  IsFamilyArgumentOmitted,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "./CallSiteBinder";

declare const callSiteArity0Brand: unique symbol;
export interface _CallSiteArity0 extends ClrHostValue {
  readonly [callSiteArity0Brand]: true;
  readonly binder: System.Runtime.CompilerServices.CallSiteBinder;
}

export interface _CallSiteArity0HostType extends HostType<_CallSiteArity0, ReferenceTypeTrait> {
  create(
    delegateType: System.Type,
    binder: System.Runtime.CompilerServices.CallSiteBinder
  ): System.Runtime.CompilerServices.CallSite;
}

declare const callSiteArity1Brand: unique symbol;
export interface _CallSiteArity1<T> extends Omit<_CallSiteArity0, "target" | "update"> {
  readonly [callSiteArity1Brand]: true;
  readonly update: T;
  target: T;
}

export interface _CallSiteArity1HostType<T> extends HostType<
  _CallSiteArity1<T>,
  ReferenceTypeTrait
> {
  create(
    binder: System.Runtime.CompilerServices.CallSiteBinder
  ): System.Runtime.CompilerServices.CallSite;
}

export type CallSiteFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _CallSiteArity0 : _CallSiteArity1<T1>;

declare global {
  namespace System.Runtime.CompilerServices {
    type CallSite<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./CallSite").CallSiteFamily<T1>;
  }
}

export type CallSiteHostType = _CallSiteArity0HostType;

export {};
