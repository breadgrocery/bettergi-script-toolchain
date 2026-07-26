import type { ClrHostValue, HostType, ValueTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../IEquatable";
import "../V8SplitProxyHelpers";
import "../ValueType";

declare const customAttributeTypedArgumentBrand: unique symbol;
export interface CustomAttributeTypedArgument extends ClrHostValue {
  readonly [customAttributeTypedArgumentBrand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: System.Reflection.CustomAttributeTypedArgument): boolean;
  getHashCode(): number;
  readonly argumentType: System.Type;
  readonly value: unknown;
  toString(): string;
}

declare global {
  namespace System.Reflection {
    type CustomAttributeTypedArgument =
      import("./CustomAttributeTypedArgument").CustomAttributeTypedArgument;
  }
}

export interface CustomAttributeTypedArgumentHostType extends HostType<
  CustomAttributeTypedArgument,
  ValueTypeTrait
> {
  new (argumentType: System.Type, value: unknown | null): CustomAttributeTypedArgument;
  new (value: unknown): CustomAttributeTypedArgument;
}

export {};
