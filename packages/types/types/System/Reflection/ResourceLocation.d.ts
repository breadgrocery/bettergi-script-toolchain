import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const resourceLocationBrand: unique symbol;
export interface ResourceLocation extends ClrHostValue {
  readonly [resourceLocationBrand]: true;
}

declare global {
  namespace System.Reflection {
    type ResourceLocation = import("./ResourceLocation").ResourceLocation;
  }
}

export interface ResourceLocationHostType extends HostType<ResourceLocation, EnumTypeTrait> {
  readonly containedInAnotherAssembly: ResourceLocation;
  readonly containedInManifestFile: ResourceLocation;
  readonly embedded: ResourceLocation;
}

export {};
