import type {
  ClrHostValue,
  EnumInput,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "./Assembly";
import "./ResourceLocation";

declare const manifestResourceInfoBrand: unique symbol;
export interface ManifestResourceInfo extends ClrHostValue {
  readonly [manifestResourceInfoBrand]: true;
  readonly fileName: string;
  readonly referencedAssembly: System.Reflection.Assembly;
  readonly resourceLocation: System.Reflection.ResourceLocation;
}

declare global {
  namespace System.Reflection {
    type ManifestResourceInfo = import("./ManifestResourceInfo").ManifestResourceInfo;
  }
}

export interface ManifestResourceInfoHostType extends HostType<
  ManifestResourceInfo,
  ReferenceTypeTrait
> {
  new (
    containingAssembly: System.Reflection.Assembly | null,
    containingFileName: string | null,
    resourceLocation: EnumInput<System.Reflection.ResourceLocation>
  ): ManifestResourceInfo;
}

export {};
