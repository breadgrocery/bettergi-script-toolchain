import type { ClrHostValue, FamilyArgumentOmitted, HostType, ReferenceTypeTrait } from "./HostType";

declare const valueRefArity1Brand: unique symbol;
export interface _ValueRefArity1<T> extends ClrHostValue {
  readonly [valueRefArity1Brand]: true;
  value: T;
}

export interface _ValueRefArity1HostType<T> extends HostType<
  _ValueRefArity1<T>,
  ReferenceTypeTrait
> {}

export type ValueRefFamily<T1 = FamilyArgumentOmitted> = _ValueRefArity1<T1>;

declare global {
  namespace Microsoft.ClearScript {
    type ValueRef<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ValueRef").ValueRefFamily<T1>;
  }
}

export type ValueRefHostType<T1> = _ValueRefArity1HostType<T1>;

export {};
