import "../../System/Reflection/ICustomAttributeProvider";
import type {
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "./HostType";

declare const customAttributeLoaderBrand: unique symbol;
export interface CustomAttributeLoader extends ClrHostValue {
  readonly [customAttributeLoaderBrand]: true;
  loadCustomAttributes<T>(
    type1: HostType<T>,
    resource: System.Reflection.ICustomAttributeProvider,
    inherit: boolean
  ): HostArray<T>;
}

declare global {
  namespace Microsoft.ClearScript {
    type CustomAttributeLoader = import("./CustomAttributeLoader").CustomAttributeLoader;
  }
}

export interface CustomAttributeLoaderHostType extends HostType<
  CustomAttributeLoader,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): CustomAttributeLoader;
  readonly default: Microsoft.ClearScript.CustomAttributeLoader;
}

export {};
