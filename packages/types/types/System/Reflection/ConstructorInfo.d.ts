import type {
  EnumInput,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../Globalization/CultureInfo";
import "./Binder";
import "./BindingFlags";
import "./ICustomAttributeProvider";
import "./MemberTypes";
import "./MethodBase";

declare const constructorInfoBrand: unique symbol;
export interface ConstructorInfo
  extends
    Omit<System.Reflection.MethodBase, "equals" | "getHashCode" | "invoke" | "memberType">,
    System.Reflection.ICustomAttributeProviderInput {
  readonly [constructorInfoBrand]: true;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  invoke(
    invokeAttr: EnumInput<System.Reflection.BindingFlags>,
    binder: System.Reflection.Binder | null,
    parameters: HostArray<unknown> | null,
    culture: System.Globalization.CultureInfo | null
  ): unknown;
  invoke(parameters: HostArray<unknown> | null): unknown;
  readonly memberType: System.Reflection.MemberTypes;
}

declare global {
  namespace System.Reflection {
    type ConstructorInfo = import("./ConstructorInfo").ConstructorInfo;
  }
}

export interface ConstructorInfoHostType extends HostType<ConstructorInfo, ReferenceTypeTrait> {
  readonly constructorName: string;
  readonly typeConstructorName: string;
}

export {};
