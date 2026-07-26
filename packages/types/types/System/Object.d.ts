import type { ClrHostValue } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";

declare const systemObjectBrand: unique symbol;

export interface Object extends ClrHostValue {
  readonly [systemObjectBrand]: true;
  equals(obj: Microsoft.ClearScript.ClrInput<System.Object | null>): boolean;
  getHashCode(): number;
  getType(): unknown;
  toString(): string;
}

export interface ObjectHostType extends Microsoft.ClearScript.HostType<
  System.Object,
  Microsoft.ClearScript.ReferenceTypeTrait & Microsoft.ClearScript.PublicDefaultConstructorTrait
> {
  new (): System.Object;
  equals(objA: unknown, objB: unknown): boolean;
  referenceEquals(objA: unknown, objB: unknown): boolean;
}

declare global {
  namespace System {
    type Object = import("./Object").Object;
  }
}

export {};
