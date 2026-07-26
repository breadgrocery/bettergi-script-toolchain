import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../Collections/Generic/IEnumerable";
import "../Collections/Generic/IList";
import "../V8SplitProxyHelpers";
import "./CommonJSManager";
import "./CustomAttributeData";
import "./ICustomAttributeProvider";
import "./MemberTypes";

declare const memberInfoBrand: unique symbol;
export interface MemberInfo extends ClrHostValue, System.Reflection.ICustomAttributeProviderInput {
  readonly [memberInfoBrand]: true;
  equals(obj: unknown | null): boolean;
  getCustomAttributes(attributeType: System.Type, inherit: boolean): HostArray<unknown>;
  getCustomAttributes(inherit: boolean): HostArray<unknown>;
  getCustomAttributesData(): System.Collections.Generic.IList<System.Reflection.CustomAttributeData>;
  getHashCode(): number;
  hasSameMetadataDefinitionAs(other: System.Reflection.MemberInfo): boolean;
  isDefined(attributeType: System.Type, inherit: boolean): boolean;
  readonly customAttributes: System.Collections.Generic.IEnumerable<System.Reflection.CustomAttributeData>;
  readonly declaringType: System.Type;
  readonly isCollectible: boolean;
  readonly memberType: System.Reflection.MemberTypes;
  readonly metadataToken: number;
  readonly module: System.Reflection.Module;
  readonly name: string;
  readonly reflectedType: System.Type;
}

declare global {
  namespace System.Reflection {
    type MemberInfo = import("./MemberInfo").MemberInfo;
  }
}

export interface MemberInfoHostType extends HostType<MemberInfo, ReferenceTypeTrait> {}

export {};
