import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../Collections/Generic/IList";
import "../V8SplitProxyHelpers";
import "./Assembly";
import "./CommonJSManager";
import "./ConstructorInfo";
import "./CustomAttributeNamedArgument";
import "./CustomAttributeTypedArgument";
import "./MemberInfo";
import "./ParameterInfo";

declare const customAttributeDataBrand: unique symbol;
export interface CustomAttributeData extends ClrHostValue {
  readonly [customAttributeDataBrand]: true;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  readonly attributeType: System.Type;
  readonly constructor: System.Reflection.ConstructorInfo;
  readonly constructorArguments: System.Collections.Generic.IList<System.Reflection.CustomAttributeTypedArgument>;
  readonly namedArguments: System.Collections.Generic.IList<System.Reflection.CustomAttributeNamedArgument>;
  toString(): string;
}

declare global {
  namespace System.Reflection {
    type CustomAttributeData = import("./CustomAttributeData").CustomAttributeData;
  }
}

export interface CustomAttributeDataHostType extends HostType<
  CustomAttributeData,
  ReferenceTypeTrait
> {
  getCustomAttributes(
    target: System.Reflection.MemberInfo
  ): System.Collections.Generic.IList<System.Reflection.CustomAttributeData>;
  getCustomAttributes(
    target: System.Reflection.Module
  ): System.Collections.Generic.IList<System.Reflection.CustomAttributeData>;
  getCustomAttributes(
    target: System.Reflection.Assembly
  ): System.Collections.Generic.IList<System.Reflection.CustomAttributeData>;
  getCustomAttributes(
    target: System.Reflection.ParameterInfo
  ): System.Collections.Generic.IList<System.Reflection.CustomAttributeData>;
}

export {};
