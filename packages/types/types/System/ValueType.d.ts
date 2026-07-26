import type { ClrHostValue, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";

declare const valueTypeBrand: unique symbol;
export interface ValueType extends ClrHostValue {
  readonly [valueTypeBrand]: true;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace System {
    type ValueType = import("./ValueType").ValueType;
  }
}

export interface ValueTypeHostType extends HostType<ValueType, ReferenceTypeTrait> {}

export {};
