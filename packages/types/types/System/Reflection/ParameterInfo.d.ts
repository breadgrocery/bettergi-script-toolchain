import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../Collections/Generic/IEnumerable";
import "../Collections/Generic/IList";
import "../Runtime/Serialization/IObjectReference";
import "../Runtime/Serialization/StreamingContext";
import "../V8SplitProxyHelpers";
import "./CustomAttributeData";
import "./ICustomAttributeProvider";
import "./MemberInfo";
import "./ParameterAttributes";

declare const parameterInfoBrand: unique symbol;
export interface ParameterInfo
  extends
    ClrHostValue,
    System.Reflection.ICustomAttributeProviderInput,
    System.Runtime.Serialization.IObjectReferenceInput {
  readonly [parameterInfoBrand]: true;
  getCustomAttributes(attributeType: System.Type, inherit: boolean): HostArray<unknown>;
  getCustomAttributes(inherit: boolean): HostArray<unknown>;
  getCustomAttributesData(): System.Collections.Generic.IList<System.Reflection.CustomAttributeData>;
  getModifiedParameterType(): System.Type;
  getOptionalCustomModifiers(): HostArray<System.Type>;
  getRealObject(context: System.Runtime.Serialization.StreamingContext): unknown;
  getRequiredCustomModifiers(): HostArray<System.Type>;
  isDefined(attributeType: System.Type, inherit: boolean): boolean;
  readonly attributes: System.Reflection.ParameterAttributes;
  readonly customAttributes: System.Collections.Generic.IEnumerable<System.Reflection.CustomAttributeData>;
  readonly defaultValue: unknown;
  readonly hasDefaultValue: boolean;
  readonly isIn: boolean;
  readonly isLcid: boolean;
  readonly isOptional: boolean;
  readonly isOut: boolean;
  readonly isRetval: boolean;
  readonly member: System.Reflection.MemberInfo;
  readonly metadataToken: number;
  readonly name: string;
  readonly parameterType: System.Type;
  readonly position: number;
  readonly rawDefaultValue: unknown;
  toString(): string;
}

declare global {
  namespace System.Reflection {
    type ParameterInfo = import("./ParameterInfo").ParameterInfo;
  }
}

export interface ParameterInfoHostType extends HostType<ParameterInfo, ReferenceTypeTrait> {}

export {};
