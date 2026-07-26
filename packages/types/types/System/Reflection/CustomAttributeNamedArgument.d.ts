import type { ClrHostValue, HostType, ValueTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../IEquatable";
import "../ValueType";
import "./CustomAttributeTypedArgument";
import "./MemberInfo";

declare const customAttributeNamedArgumentBrand: unique symbol;
export interface CustomAttributeNamedArgument extends ClrHostValue {
  readonly [customAttributeNamedArgumentBrand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: System.Reflection.CustomAttributeNamedArgument): boolean;
  getHashCode(): number;
  readonly isField: boolean;
  readonly memberInfo: System.Reflection.MemberInfo;
  readonly memberName: string;
  readonly typedValue: System.Reflection.CustomAttributeTypedArgument;
  toString(): string;
}

declare global {
  namespace System.Reflection {
    type CustomAttributeNamedArgument =
      import("./CustomAttributeNamedArgument").CustomAttributeNamedArgument;
  }
}

export interface CustomAttributeNamedArgumentHostType extends HostType<
  CustomAttributeNamedArgument,
  ValueTypeTrait
> {
  new (
    memberInfo: System.Reflection.MemberInfo,
    value: unknown | null
  ): CustomAttributeNamedArgument;
  new (
    memberInfo: System.Reflection.MemberInfo,
    typedArgument: System.Reflection.CustomAttributeTypedArgument
  ): CustomAttributeNamedArgument;
}

export {};
